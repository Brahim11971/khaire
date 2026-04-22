#!/usr/bin/env python3
"""Regenerate khaire/preview.html — a single-file, fully self-contained
version of index.html with all CSS, JS, fonts, and images inlined as
data: URIs.

Why this exists
---------------
Claude Code / Cowork's HTML preview widget runs the file in a sandbox
that cannot resolve relative paths ("css/style.css", "assets/images/...").
The live index.html is the "source of truth" and keeps all the normal
<link> / <script> / <img src> tags for real deployment — but when you
want a perfect preview inside the Claude panel, run this script and
open preview.html instead.

Usage
-----
    cd khaire
    python3 build-preview.py

Writes: ./preview.html  (~860 KB)
"""
import base64, re, pathlib, mimetypes, sys

ROOT = pathlib.Path(__file__).resolve().parent
OUT  = ROOT / "preview.html"

MIME = {
    ".woff2": "font/woff2", ".woff": "font/woff",
    ".webp":  "image/webp", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
    ".png":   "image/png",  ".svg": "image/svg+xml",
}

def data_uri(path: pathlib.Path):
    if not path.exists(): return None
    mime = MIME.get(path.suffix.lower()) or mimetypes.guess_type(str(path))[0] or "application/octet-stream"
    b64 = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{b64}"

def main():
    html        = (ROOT / "index.html").read_text(encoding="utf-8")
    reset_css   = (ROOT / "css/reset.css").read_text(encoding="utf-8")
    style_css   = (ROOT / "css/style.css").read_text(encoding="utf-8")
    translations = (ROOT / "js/translations.js").read_text(encoding="utf-8")
    app_js      = (ROOT / "js/app.js").read_text(encoding="utf-8")

    # Local preview is a duplicate, self-contained artifact. Keep it out of
    # search results if somebody accidentally uploads it with the live site.
    preview_robots = '  <meta name="robots" content="noindex,nofollow" />'
    if preview_robots not in html:
        html = html.replace("  <meta name=\"format-detection\" content=\"telephone=no\" />",
                            "  <meta name=\"format-detection\" content=\"telephone=no\" />\n" + preview_robots)

    # Rewrite url() in style.css — relative to /css/, so "../assets/..." becomes /assets/...
    def css_url(m):
        raw = m.group(1).strip().strip('"').strip("'")
        if raw.startswith("data:"): return m.group(0)
        rel = raw[3:] if raw.startswith("../") else raw
        uri = data_uri(ROOT / rel)
        return f'url("{uri}")' if uri else m.group(0)
    style_css = re.sub(r'url\(\s*([^)]+?)\s*\)', css_url, style_css)

    # Rewrite <link> / <img> / <source> href/src/srcset to data: URIs
    def tag_asset(m):
        tag = m.group(0)
        for attr in ["src", "srcset", "href", "imagesrcset"]:
            for mm in list(re.finditer(rf'{attr}="([^"]+)"', tag)):
                raw = mm.group(1)
                if raw.startswith(("http:", "https:", "data:", "#", "mailto:", "tel:", "javascript:")):
                    continue
                if raw.startswith("assets/"):
                    uri = data_uri(ROOT / raw)
                    if uri: tag = tag.replace(f'{attr}="{raw}"', f'{attr}="{uri}"')
        return tag
    html = re.sub(r'<(?:img|source|link)[^>]*>', tag_asset, html)

    # Swap linked CSS for inline
    html = re.sub(r'<link\s+rel="stylesheet"\s+href="css/reset\.css"\s*/?>',
                  f'<style data-origin="reset.css">\n{reset_css}\n</style>', html)
    html = re.sub(r'<link\s+rel="stylesheet"\s+href="css/style\.css"\s*/?>',
                  f'<style data-origin="style.css">\n{style_css}\n</style>', html)

    # Rewrite asset paths inside JS source (app.js's VARIANTS array
    # references "assets/images/..." as strings — without this rewrite
    # the inlined preview can't resolve them to data URIs and every
    # JS-rendered swatch / thumb / collection card shows a broken image).
    # Matches bare "assets/images/<name>.<ext>" inside any double-quoted string.
    def js_asset(m):
        rel = m.group(1)
        uri = data_uri(ROOT / rel)
        return f'"{uri}"' if uri else m.group(0)
    asset_pat = r'"(assets/(?:images|video|fonts)/[^"]+?\.(?:webp|jpg|jpeg|png|svg|mp4|woff2|woff))"'
    app_js       = re.sub(asset_pat, js_asset, app_js)
    translations = re.sub(asset_pat, js_asset, translations)

    # Swap linked JS for inline (permissive — accepts defer, async, etc.)
    html = re.sub(r'<script\b[^>]*\bsrc="js/translations\.js"[^>]*>\s*</script>',
                  f'<script data-origin="translations.js">\n{translations}\n</script>', html)
    html = re.sub(r'<script\b[^>]*\bsrc="js/app\.js"[^>]*>\s*</script>',
                  f'<script data-origin="app.js">\n{app_js}\n</script>', html)

    OUT.write_text(html, encoding="utf-8")
    kb = OUT.stat().st_size / 1024
    print(f"Wrote {OUT.name}  ({kb:.0f} KB)")

if __name__ == "__main__":
    main()
