/**
 * Khaire — i18n strings.
 *
 * Every text element on the page has a `data-i18n` key that maps to one of
 * these dictionaries. To edit copy, just change the string here.
 *
 * WhatsApp message templates ({size} is replaced at click time):
 *   - whatsapp_message            → order intent      (hero, closing, sticky, after-benefits)
 *   - whatsapp_message_inquiry    → availability      (header icon, footer, after-gallery)
 *   - whatsapp_message_question   → general question  (after-FAQ)
 *
 * Each CTA element in index.html declares which template to use via
 *   data-cta-intent="order|inquiry|question"
 */
window.KHAIRE_I18N = {
  // =======================================================================
  // FRENCH
  // =======================================================================
  fr: {
    // ---- WhatsApp message templates ------------------------------------
    // Note: all messages address the Khaire team, not Chaimae personally.
    whatsapp_message:
      "Bonjour l'équipe Khaire, je souhaite réserver Le Jabador Khaire (Taille {size}). Pouvez-vous confirmer la disponibilité et m'aider à choisir le coloris ?",
    whatsapp_message_inquiry:
      "Bonjour l'équipe Khaire, Le Jabador Khaire est-il disponible en Taille {size} ?",
    whatsapp_message_question:
      "Bonjour l'équipe Khaire, j'aurais une question avant de commander Le Jabador Khaire.",

    // ---- Floating WhatsApp button (desktop) ----------------------------
    wa_fab_aria: "Parler à l'équipe Khaire sur WhatsApp",
    wa_fab_tip: "L'équipe répond en ~5 min",

    // ---- Announce bar --------------------------------------------------
    announce:
      "Édition très limitée · Livraison 24–48 h · Réservation à 50%",

    // ---- Hero ----------------------------------------------------------
    eyebrow: "Édition très limitée",
    product_name: "Le Jabador Khaire",
    availability: "Atelier ouvert · réponse en ~5 min",
    price_amount: "1199",
    price_currency: "dh",
    price_note: "Acompte 50% · Solde à la livraison",
    color_note:
      "Plusieurs coloris disponibles. Notre styliste vous aide à choisir le vôtre sur WhatsApp.",
    size_label: "Taille",
    size_guide: "Guide des tailles",

    // Primary CTAs (used by multiple buttons)
    cta: "Commander sur WhatsApp",
    cta_short: "Commander",
    cta_inquiry_button: "Vérifier la disponibilité",
    cta_question_button: "Poser une question",

    // Legacy trust row (still inside hero)
    trust_1: "Livraison 24–48 h au Maroc",
    trust_2: "Acompte 50% · Solde livré",
    trust_3: "Réponse en 5 min",

    // ---- Trust strip (6 micro-blocks) ----------------------------------
    trust_delivery_title: "Livraison",
    trust_delivery_body: "24 à 48 h partout au Maroc",
    trust_payment_title: "Paiement",
    trust_payment_body: "50% à la commande, solde à la livraison",
    trust_reply_title: "Réponse WhatsApp",
    trust_reply_body: "En 5 minutes ou moins",
    trust_exchange_title: "Échange",
    trust_exchange_body: "Sous 24 h, non porté, emballage d'origine",
    trust_limited_title: "Édition",
    trust_limited_body: "Pièces extrêmement limitées",
    trust_handmade_title: "Fait main",
    trust_handmade_body: "Broderie artisanale, pièce unique",

    // ---- Social proof snapshot -----------------------------------------
    social_proof_quote:
      "Vu sur MBC5 : Chaimae Belkhir présente l'univers Khaire, le jabador marocain et le travail artisanal derrière chaque pièce.",
    social_proof_attribution: "Chaimae Belkhir, fondatrice et directrice créative",
    social_proof_count: "Presse · MBC5",

    // ---- Gallery -------------------------------------------------------
    gallery_eyebrow: "Détails",
    gallery_title: "Regardez de plus près",
    gallery_video_caption: "Vidéo produit",
    gallery_label_front: "Face",
    gallery_label_back: "Dos",
    gallery_label_detail: "Détail brodé",
    gallery_label_worn: "Porté",

    // ---- Vertical video ------------------------------------------------
    video_eyebrow: "En mouvement",
    video_title: "Le tombé, la lumière, les finitions",
    video_caption: "Une vidéo verticale pour voir le jabador en mouvement.",
    video_kicker: "À regarder avant de choisir",
    video_note_1_title: "Coupe",
    video_note_1_body: "Le tombé sur le corps et l'allure générale.",
    video_note_2_title: "Broderie",
    video_note_2_body: "Les détails main, les boutons et les reflets du fil.",
    video_note_3_title: "Coloris",
    video_note_3_body: "La teinte réelle selon la lumière.",

    // ---- CTA banners (contextual) --------------------------------------
    cta_inquiry_text: "Des questions sur la disponibilité ou les coloris ?",
    cta_order_text: "Prête à recevoir la vôtre ?",
    cta_question_text: "Une question avant de commander ?",

    // ---- Benefits ("Pourquoi Khaire") ----------------------------------
    benefits_eyebrow: "Pourquoi Khaire",
    benefits_title: "Ce qui rend cette pièce rare",

    benefit_1_title: "Brodé à la main",
    benefit_1_body:
      "Chaque pièce demande plusieurs semaines de travail. Aucune machine, aucun raccourci.",
    benefit_2_title: "Matières précieuses",
    benefit_2_body:
      "Tissus haut de gamme, fils fins et boutons tressés. Le détail qui dure.",
    benefit_3_title: "Extrêmement limité",
    benefit_3_body:
      "Petites séries. Quand une pièce est partie, elle ne revient pas.",
    benefit_4_title: "Réservation simple et sûre",
    benefit_4_body:
      "Un acompte de 50% réserve votre pièce à la commande. Le solde est réglé à la livraison, partout au Maroc.",
    benefit_5_title: "Conseil personnel",
    benefit_5_body:
      "Notre styliste vous guide sur WhatsApp en quelques minutes : taille, coloris, coupe.",

    // ---- Story (kept, moved after benefits) ----------------------------
    story_eyebrow: "À propos",
    story_title: "L'héritage marocain, cousu main.",
    story_body_1:
      "Khaire célèbre l'élégance du vêtement traditionnel marocain — caftan, jabador, takchita. Notre premier drop met à l'honneur le jabador : une pièce brodée main par les artisanes de notre atelier, avec un soin porté au moindre détail — des fils précieux aux boutons tressés.",
    story_body_2:
      "Nous créons en petites séries, pour préserver le geste et la singularité de chaque vêtement. Une allure contemporaine, un héritage vivant.",

    // ---- Founder / search-intent section -------------------------------
    founder_eyebrow: "Créatrice",
    founder_title: "Khaire par Chaimae Belkhir",
    founder_body_1:
      "Chaimae Belkhir fonde Khaire autour d'une idée simple : rendre le vêtement traditionnel marocain désirable, précis et facile à commander. La maison signe des créations autour du jabador, du caftan marocain, du kaftan, de la takchita et des tenues d'occasion.",
    founder_body_2:
      "Pour l'Aïd, les cérémonies, les soirées familiales ou les fêtes marocaines, Khaire privilégie les coupes élégantes, la broderie main, les finitions artisanales et l'accompagnement sur WhatsApp pour choisir taille, coloris et livraison.",
    founder_terms_title: "Recherches utiles",
    founder_terms_body:
      "Jabador marocain, caftan marocain, kaftan, takchita, tenue Aïd femme, robe de fête marocaine, vêtement traditionnel marocain, Khaire creations, Chaimae Belkhir Khaire.",

    // ---- Product details accordion (specs only) ------------------------
    details_eyebrow: "Caractéristiques",
    details_title: "Matières et entretien",
    details_sizing_title: "Guide des tailles",
    details_sizing_body:
      "S / M convient aux tailles 36-40. L / XL convient aux tailles 42-46. Pour toute question sur la coupe, notre styliste vous guide sur WhatsApp.",
    details_fabric_title: "Matières",
    details_fabric_body:
      "Tissus haut de gamme sélectionnés avec soin. Broderie main sur l'ensemble de la pièce. Boutons tressés et finitions artisanales.",
    details_care_title: "Entretien",
    details_care_body:
      "Nettoyage à sec recommandé. Ne pas tordre. Suspendre sur un cintre rembourré pour préserver les broderies.",

    // ---- Press / trust cards -------------------------------------------
    testimonials_eyebrow: "Presse",
    testimonials_title: "Presse & savoir-faire",

    testimonial_1_quote:
      "Chaimae Belkhir a récemment présenté l'univers Khaire sur MBC5 : une maison dédiée aux créations marocaines, au jabador et au savoir-faire artisanal.",
    testimonial_1_name: "MBC5",
    testimonial_1_city: "Mention média",
    testimonial_1_time: "Lien officiel à ajouter",

    testimonial_2_quote:
      "Fondatrice et directrice créative, Chaimae Belkhir construit Khaire autour de pièces traditionnelles marocaines brodées main, pensées pour les femmes d'aujourd'hui.",
    testimonial_2_name: "Chaimae Belkhir",
    testimonial_2_city: "Fondatrice",
    testimonial_2_time: "Khaire",

    testimonial_3_quote:
      "Khaire travaille le vestiaire marocain de cérémonie : jabador, caftan, kaftan, takchita et tenues d'Aïd en petites séries.",
    testimonial_3_name: "Créations Khaire",
    testimonial_3_city: "Jabador · Caftan · Takchita",
    testimonial_3_time: "Maroc",

    // ---- FAQ -----------------------------------------------------------
    faq_eyebrow: "FAQ",
    faq_title: "Questions fréquentes",

    faq_1_q: "Est-il disponible en stock actuellement ?",
    faq_1_a:
      "Nos pièces sont fabriquées en très petites quantités et partent vite. Pour confirmer la disponibilité de votre taille et coloris, écrivez-nous sur WhatsApp — nous répondons en 5 minutes ou moins.",

    faq_2_q: "Combien de temps pour la livraison ?",
    faq_2_a:
      "24 à 48 heures partout au Maroc. Nous expédions le jour même quand la commande est confirmée avant 16 h.",

    faq_3_q: "Comment se passe le paiement ?",
    faq_3_a:
      "Un acompte de 50% est demandé à la commande pour réserver votre pièce. Le solde est réglé à la livraison. Notre styliste vous partage les modalités de paiement de l'acompte sur WhatsApp (virement, Wafacash, CashPlus).",

    faq_4_q: "Puis-je échanger la pièce si elle ne convient pas ?",
    faq_4_a:
      "Oui. Échange possible dans les 24 heures suivant la réception, à condition que la pièce n'ait pas été portée et qu'elle soit retournée dans son emballage d'origine.",

    faq_5_q: "En combien de temps répondez-vous sur WhatsApp ?",
    faq_5_a:
      "5 minutes ou moins, aux heures d'ouverture de notre atelier.",

    faq_6_q: "Comment je commande via WhatsApp ?",
    faq_6_a:
      "Cliquez sur un bouton WhatsApp, envoyez le message pré-rempli. Notre styliste confirme la disponibilité, vous aide à choisir la taille et le coloris, organise l'acompte et la livraison. C'est tout.",

    // ---- Closing CTA ---------------------------------------------------
    closing_eyebrow: "Pièce en édition limitée",
    closing_title: "Une pièce. Faite pour durer.",
    closing_body:
      "Réservez en quelques secondes sur WhatsApp. Notre styliste vous guide pour choisir la taille, le coloris et organiser l'acompte.",

    // ---- Footer --------------------------------------------------------
    footer_tag: "Jabadors, caftans et vêtements marocains traditionnels, faits main.",
    footer_copy: "© 2026 Khaire. Tous droits réservés.",

    // ---- Hero thumbnail rail + picture button --------------------------
    hero_alt: "Le Jabador Khaire",
    hero_thumb_label: "Pièce",
    hero_thumbs_label: "Autres pièces",
    hero_open_lightbox: "Agrandir l'image",

    // ---- Detail gallery ------------------------------------------------
    detail_front:  "Face",
    detail_back:   "Dos",
    detail_model:  "Porté",
    detail_fabric: "Détail du tissu",
    detail_generic: "Détail",

    // ---- Lightbox ------------------------------------------------------
    lightbox_close: "Fermer",
    lightbox_prev: "Précédent",
    lightbox_next: "Suivant",
  },

  // =======================================================================
  // ARABIC
  // =======================================================================
  ar: {
    // ---- WhatsApp message templates ------------------------------------
    // كل الرسائل موجهة لفريق خيّر وليس لشيماء شخصياً.
    whatsapp_message:
      "السلام عليكم فريق خيّر، أرغب في حجز جبادور خيّر (المقاس {size}). هل يمكنكم تأكيد التوفر ومساعدتي في اختيار اللون ؟",
    whatsapp_message_inquiry:
      "السلام عليكم فريق خيّر، هل جبادور خيّر متوفر في المقاس {size} ؟",
    whatsapp_message_question:
      "السلام عليكم فريق خيّر، لدي سؤال قبل طلب جبادور خيّر.",

    // ---- Floating WhatsApp button (desktop) ----------------------------
    wa_fab_aria: "تواصل مع فريق خيّر عبر واتساب",
    wa_fab_tip: "يردّ فريقنا خلال ~5 دقائق",

    // ---- Announce bar --------------------------------------------------
    announce:
      "إصدار محدود جداً · التوصيل خلال 24 إلى 48 ساعة · الحجز بعربون 50%",

    // ---- Hero ----------------------------------------------------------
    eyebrow: "إصدار محدود جداً",
    product_name: "جبادور خيّر",
    availability: "المحترف مفتوح · الرد خلال ~5 دقائق",
    price_amount: "1199",
    price_currency: "درهم",
    price_note: "عربون 50% · الباقي عند الاستلام",
    color_note:
      "ألوان متعددة متوفرة. مستشارة الموضة لدينا ستساعدك على اختيار لونك عبر الواتساب.",
    size_label: "المقاس",
    size_guide: "دليل المقاسات",

    cta: "اطلبي عبر الواتساب",
    cta_short: "اطلبي الآن",
    cta_inquiry_button: "تحقّقي من التوفر",
    cta_question_button: "اطرحي سؤالاً",

    trust_1: "توصيل خلال 24–48 ساعة",
    trust_2: "عربون 50% والباقي عند الاستلام",
    trust_3: "الرد في 5 دقائق",

    // ---- Trust strip ---------------------------------------------------
    trust_delivery_title: "التوصيل",
    trust_delivery_body: "من 24 إلى 48 ساعة في كل المغرب",
    trust_payment_title: "الدفع",
    trust_payment_body: "50% عند الطلب، الباقي عند الاستلام",
    trust_reply_title: "الرد على الواتساب",
    trust_reply_body: "في 5 دقائق أو أقل",
    trust_exchange_title: "الاستبدال",
    trust_exchange_body: "خلال 24 ساعة، غير ملبوسة، بتغليفها الأصلي",
    trust_limited_title: "إصدار",
    trust_limited_body: "قطع محدودة جداً",
    trust_handmade_title: "صناعة يدوية",
    trust_handmade_body: "تطريز يدوي، قطعة فريدة",

    // ---- Social proof snapshot -----------------------------------------
    social_proof_quote:
      "ظهور على MBC5: تقدم شيماء بلخير عالم خيّر، الجبادور المغربي، والعمل الحرفي وراء كل قطعة.",
    social_proof_attribution: "شيماء بلخير، المؤسسة والمديرة الإبداعية",
    social_proof_count: "صحافة · MBC5",

    // ---- Gallery -------------------------------------------------------
    gallery_eyebrow: "تفاصيل",
    gallery_title: "اقتربي أكثر",
    gallery_video_caption: "فيديو المنتج",
    gallery_label_front: "أمام",
    gallery_label_back: "خلف",
    gallery_label_detail: "تفصيل مطرّز",
    gallery_label_worn: "مرتدى",

    // ---- Vertical video ------------------------------------------------
    video_eyebrow: "في الحركة",
    video_title: "القَصّة، الضوء، والتشطيبات",
    video_caption: "فيديو عمودي لرؤية الجبادور أثناء الحركة.",
    video_kicker: "شاهديه قبل الاختيار",
    video_note_1_title: "القَصّة",
    video_note_1_body: "كيف ينسدل على الجسم والإطلالة العامة.",
    video_note_2_title: "التطريز",
    video_note_2_body: "تفاصيل العمل اليدوي، الأزرار ولمعة الخيط.",
    video_note_3_title: "الألوان",
    video_note_3_body: "درجة اللون الحقيقية حسب الضوء.",

    // ---- CTA banners ---------------------------------------------------
    cta_inquiry_text: "أسئلة حول التوفر أو الألوان ؟",
    cta_order_text: "جاهزة لاستلام قطعتك ؟",
    cta_question_text: "سؤال قبل الطلب ؟",

    // ---- Benefits ------------------------------------------------------
    benefits_eyebrow: "لماذا خيّر",
    benefits_title: "ما يجعل هذه القطعة نادرة",

    benefit_1_title: "مطرّزة يدوياً",
    benefit_1_body:
      "كل قطعة تتطلب أسابيع من العمل. لا آلات، لا اختصارات.",
    benefit_2_title: "مواد ثمينة",
    benefit_2_body:
      "أقمشة راقية وخيوط فاخرة وأزرار مظفّرة. التفاصيل التي تدوم.",
    benefit_3_title: "محدود جداً",
    benefit_3_body:
      "كميات صغيرة. عندما تنتهي القطعة، لا تعود.",
    benefit_4_title: "حجز آمن وبسيط",
    benefit_4_body:
      "عربون 50% يحجز قطعتك عند الطلب. الباقي يُدفع عند الاستلام في كل المغرب.",
    benefit_5_title: "استشارة شخصية",
    benefit_5_body:
      "مستشارتنا ترشدك عبر الواتساب في دقائق : المقاس، اللون، القصّة.",

    // ---- Story ---------------------------------------------------------
    story_eyebrow: "من نحن",
    story_title: "التراث المغربي، مخيط يدوياً.",
    story_body_1:
      "خيّر تحتفي بأناقة الأزياء المغربية التقليدية — القفطان، الجبادور، التكشيطة. أول إصدار لنا يُسلّط الضوء على الجبادور: قطعة مطرّزة يدوياً بواسطة حرفيات ماهرات في محترفنا، مع عناية فائقة بأدق التفاصيل — من الخيوط الثمينة إلى الأزرار المظفّرة.",
    story_body_2:
      "نصمم بكميات محدودة، للحفاظ على خصوصية الصنعة وتفرد كل ثوب. إطلالة عصرية، وتراث حي.",

    // ---- Founder / search-intent section -------------------------------
    founder_eyebrow: "المصممة",
    founder_title: "خيّر من شيماء بلخير",
    founder_body_1:
      "أسست شيماء بلخير خيّر حول فكرة واضحة: تقديم اللباس التقليدي المغربي بطريقة أنيقة، دقيقة وسهلة الطلب. تشتغل الدار على الجبادور، القفطان المغربي، الكفتان، التكشيطة وملابس المناسبات.",
    founder_body_2:
      "للعيد، الحفلات العائلية، المناسبات المغربية والسهرات، تختار خيّر القصات الراقية، التطريز اليدوي، التشطيبات الحرفية والمرافقة عبر الواتساب لاختيار المقاس، اللون والتوصيل.",
    founder_terms_title: "عبارات بحث مهمة",
    founder_terms_body:
      "جبادور مغربي، قفطان مغربي، كفتان، تكشيطة، لباس العيد للنساء، فستان مغربي للمناسبات، لباس تقليدي مغربي، إبداعات خيّر، شيماء بلخير خيّر.",

    // ---- Product details ----------------------------------------------
    details_eyebrow: "خصائص",
    details_title: "المواد والعناية",
    details_sizing_title: "دليل المقاسات",
    details_sizing_body:
      "S / M يناسب المقاسات 36-40. L / XL يناسب المقاسات 42-46. لأي سؤال حول المقاس، مستشارتنا ترشدك عبر الواتساب.",
    details_fabric_title: "المواد",
    details_fabric_body:
      "أقمشة راقية مُنتقاة بعناية. تطريز يدوي على كامل القطعة. أزرار مظفّرة وتشطيبات حرفية.",
    details_care_title: "العناية",
    details_care_body:
      "يُفضّل التنظيف الجاف. لا تعصري. علّقي القطعة على شماعة مبطّنة للحفاظ على التطريز.",

    // ---- Press / trust cards -------------------------------------------
    testimonials_eyebrow: "صحافة",
    testimonials_title: "صحافة وحرفية",

    testimonial_1_quote:
      "قدمت شيماء بلخير مؤخراً عالم خيّر على MBC5: دار مغربية تهتم بالإبداعات التقليدية، الجبادور، والحرفية اليدوية.",
    testimonial_1_name: "MBC5",
    testimonial_1_city: "ظهور إعلامي",
    testimonial_1_time: "يضاف الرابط الرسمي",

    testimonial_2_quote:
      "كمؤسسة ومديرة إبداعية، تبني شيماء بلخير خيّر حول قطع مغربية تقليدية مطرزة يدوياً ومصممة لامرأة اليوم.",
    testimonial_2_name: "شيماء بلخير",
    testimonial_2_city: "المؤسسة",
    testimonial_2_time: "خيّر",

    testimonial_3_quote:
      "تشتغل خيّر على خزانة المناسبات المغربية: الجبادور، القفطان، الكفتان، التكشيطة ولباس العيد بكميات محدودة.",
    testimonial_3_name: "إبداعات خيّر",
    testimonial_3_city: "جبادور · قفطان · تكشيطة",
    testimonial_3_time: "المغرب",

    // ---- FAQ -----------------------------------------------------------
    faq_eyebrow: "أسئلة شائعة",
    faq_title: "أسئلة شائعة",

    faq_1_q: "هل متوفر في المخزون حالياً ؟",
    faq_1_a:
      "قطعنا تُصنع بكميات صغيرة جداً وتنفد بسرعة. للتأكد من توفر مقاسك ولونك، راسلينا على الواتساب — سنرد في 5 دقائق أو أقل.",

    faq_2_q: "كم يستغرق التوصيل ؟",
    faq_2_a:
      "من 24 إلى 48 ساعة في كل المغرب. نشحن في نفس اليوم إذا تم تأكيد الطلب قبل الساعة 16:00.",

    faq_3_q: "كيف يتم الدفع ؟",
    faq_3_a:
      "يُطلب عربون 50% عند الطلب لحجز قطعتك. الباقي يُدفع عند الاستلام. مستشارتنا تشاركك طرق دفع العربون عبر الواتساب (تحويل بنكي، Wafacash، CashPlus).",

    faq_4_q: "هل يمكنني استبدال القطعة إذا لم تناسبني ؟",
    faq_4_a:
      "نعم. الاستبدال ممكن خلال 24 ساعة من الاستلام، بشرط ألا تكون القطعة قد ارتُدِيت وأن تُعاد في تغليفها الأصلي.",

    faq_5_q: "في كم من الوقت تردّون على الواتساب ؟",
    faq_5_a:
      "5 دقائق أو أقل، خلال ساعات عمل المحترف.",

    faq_6_q: "كيف أطلب عبر الواتساب ؟",
    faq_6_a:
      "اضغطي على أحد أزرار الواتساب، أرسلي الرسالة المُعبّأة مسبقاً. ستؤكد لك المستشارة التوفر، تساعدك على اختيار المقاس واللون، تنظّم العربون والتوصيل. هذا كل شيء.",

    // ---- Closing CTA ---------------------------------------------------
    closing_eyebrow: "قطعة إصدار محدود",
    closing_title: "قطعة واحدة. لتدوم.",
    closing_body:
      "احجزي في ثوانٍ عبر الواتساب. مستشارتنا ترشدك لاختيار المقاس واللون وتنظيم العربون.",

    // ---- Footer --------------------------------------------------------
    footer_tag: "جبادورات، قفاطين وأزياء مغربية تقليدية، مصنوعة يدوياً.",
    footer_copy: "© 2026 خيّر. جميع الحقوق محفوظة.",

    // ---- Hero thumbnail rail + picture button --------------------------
    hero_alt: "جبادور خيّر",
    hero_thumb_label: "قطعة",
    hero_thumbs_label: "قطع أخرى",
    hero_open_lightbox: "تكبير الصورة",

    // ---- Detail gallery ------------------------------------------------
    detail_front:  "أمام",
    detail_back:   "خلف",
    detail_model:  "مرتدى",
    detail_fabric: "تفصيل القماش",
    detail_generic: "تفصيل",

    // ---- Lightbox ------------------------------------------------------
    lightbox_close: "إغلاق",
    lightbox_prev: "السابق",
    lightbox_next: "التالي",
  },
};
