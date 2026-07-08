/* ═══════════════════════════════════════════════════════════
 i18n.js - Language switcher (EN / PT)
 Strategy: data-i18n="key" on elements → swap textContent.
 data-i18n-html="key" on elements → swap innerHTML.
 Switcher injected into .nav-right before .nav-cta.
 ═══════════════════════════════════════════════════════════ */
(function () {
 var STORAGE_KEY = 'lang';

 /* ── TRANSLATIONS ────────────────────────────────────────── */
 var T = {
 en: {
 /* NAV */
 'nav.work': 'Work',
 'nav.about': 'About Me',
 'nav.archives': 'Archives',
 'nav.contact': 'Contact',
 'nav.contact-mobile': 'Contact →',
 'nav.linkedin': 'LinkedIn',
 'nav.theme-light':'Light mode',
 'nav.theme-dark': 'Dark mode',

 /* COMMON */
 'btn.view-case': 'View Case Study',
 'btn.get-in-touch': 'Get in Touch',
 'btn.more-about': 'More About Me',
 'btn.view-work': 'View Selected Work',
 'btn.about-me': 'About me →',
 'btn.download-cv': 'Download CV',
 'label.featured': 'Featured',
 'label.currently': 'Currently',

 /* FOOTER */
 'footer.text': 'Lucas Nascimento · Lead Product Designer',

 /* ── INDEX (root) ── */
 'index.label': 'Selected Work',
 'index.heading': 'Products I\'ve shaped,\nproblems I\'ve solved.',

 /* ── PORTFOLIO / INDEX ── */
 'hero.headline': '11 years turning complex<br />problems into experiences<br />that <em>work.</em>',
 'hero.sub': 'I\'m a Lead Product Designer bridging strategy, UX, and Product Development. From zero-to-one products to enterprise design systems, with Figma at an advanced level and AI integrated throughout the process.',
 'stat1.label': 'Years turning problems into structured design',
 'stat2.label': 'Monthly accesses on products I\'ve designed',
 'stat3.label': 'Reduction in delivery cycles with AI-assisted workflow',
 'stat4.label': 'Companies where I built design structure from zero',
 'marquee.label': 'Companies & Clients',
 'work.label': 'Featured Work',
 'work.heading': 'Products I\'ve shaped,\nproblems I\'ve solved.',

 /* Cards - Multipedidos */
 'card.multi.title': 'Multipedidos: design system and UX at 10M+ monthly accesses',
 'card.multi.desc': 'As the sole designer, built the product design sector from scratch at a food-tech platform serving 10M+ monthly accesses. Created the design system, restructured UX flows, and introduced AI-assisted prototyping that cut delivery time by 60%.',
 'card.multi.metric1': 'Monthly platform accesses',
 'card.multi.metric2': 'Faster prototype delivery',

 /* Cards - IncludED */
 'card.included.title': 'IncludED: managing Individualized Education Plans for inclusion students',
 'card.included.desc': 'Co-founded PixelPunk and led the full product design of IncludED, a BNCC-compliant SaaS built with neuropsychologists and pedagogical consultants. Already in schools across Brazil.',
 'card.included.metric1': 'Years of pedagogical expertise in the team',

 /* Cards - Keepeye */
 'card.keepeye.title': 'Keepeye: KPI management platform from zero to tested product',
 'card.keepeye.desc': 'End-to-end design and front-end development of a B2B SaaS centralizing KPI tracking for enterprise clients. From UX research and architecture to component handoff and coded implementation.',
 'card.keepeye.metric1': 'Satisfaction score out of 10',

 /* Cards - Electrolux */
 'card.electrolux.title': 'Electrolux Global Dashboard System: one visual language, worldwide',
 'card.electrolux.desc': 'Created the visual identity and component standards for Electrolux\'s operational dashboards. Adopted in LATAM first, then approved by the global board and rolled out across all regions.',
 'card.electrolux.metric1': 'Standard adopted across all regions',

 /* About section (portfolio/index) */
 'about.label': 'About',
 'about.heading': 'Designer who codes.\nStrategist who executes.',
 'about.text1': 'I\'m Lucas, a Product Designer with <strong>11+ years</strong> working at the intersection of strategy, UX, and front-end development. I specialize in building digital products and <strong>design cultures from scratch</strong>, in environments where there wasn\'t much structure before.',
 'about.text2': 'Beyond the work, I\'m also a musician and a storyteller, and those habits shape how I approach design. Curious how it all connects?',

 /* Expertise */
 'exp.label': 'Expertise',
 'exp.heading': 'What I bring\nto your product.',
 'exp.figma.name': 'Figma Mastery',
 'exp.figma.desc': 'Advanced use of Figma as a design system platform, not just a drawing tool. Variables, tokens, dev mode, complex components, and interactive prototypes that developers can actually use.',
 'exp.ai.name': 'AI-Augmented Design',
 'exp.ai.desc': 'AI and Vibe Coding as a strategic process layer: from research synthesis and handoff documentation to building functional prototypes with Claude and Lovable. Speed without sacrificing design quality.',
 'exp.ux.name': 'UX Research & Strategy',
 'exp.ux.desc': 'Discovery, user interviews, jobs-to-be-done, competitive analysis, and translating insights into product strategy that stakeholders align on.',
 'exp.product.name': 'Product Design (E2E)',
 'exp.product.desc': 'Information architecture, interaction design, and prototyping from low to high fidelity, balancing user needs with business goals and technical constraints.',
 'exp.ds.name': 'Design Systems',
 'exp.ds.desc': 'Scalable component libraries and design tokens that bridge design and engineering, reducing inconsistency, rework, and dev friction across teams.',
 'exp.dataviz.name': 'Data Visualization',
 'exp.dataviz.desc': 'Dashboards and data products that make complex information scannable and actionable, combining UX thinking with Data Visualization tools and data storytelling.',

 /* AI Banner */
 'ai.title': 'AI in my process: <em>accelerator, not replacement.</em>',
 'ai.text': 'I use AI as a <strong style="color:var(--text-1); font-weight:500;">strategic layer</strong> across the entire design cycle: research synthesis, handoff documentation, component spec writing, and functional prototype generation. The result: shorter feedback cycles, clearer handoffs, and more time for the design decisions that actually require human judgment.',
 'ai.chip1': 'Research synthesis',
 'ai.chip2': 'Handoff documentation',
 'ai.chip3': 'Component spec writing',
 'ai.chip4': 'Vibe Coding',
 'ai.chip5': 'Functional prototypes',

 /* Mini-CTA */
 'cta.heading': 'Let\'s build something<br /><em style="font-style:italic; color:var(--accent-text);">worth shipping.</em>',
 'cta.sub': 'Available for new projects, local and global.',

 /* ── ABOUT PAGE ── */
 'about.hero.label': 'About',
 'about.hero.text1': '<strong>Lead Product Designer</strong> based in Joinville, Brazil, also a musician and a storyteller.',
 'about.hero.text2': 'I design digital products end to end, from research and strategy to interface and front-end code. Outside of product work, music and storytelling are quiet habits that shape how I think about rhythm, structure, and communication in design.',
 'about.bio.heading': 'Brazilian.\nProduct designer.\n<span class="dim">Builder, musician\n&amp; storyteller.</span>',
 'about.bio.h3': '...a bit more about me',
 'about.bio.p1': 'I\'m a Product Designer with <strong>11+ years</strong> across multiple disciplines: product design, design systems, data visualization, branding, front-end development, and audiovisual. That breadth isn\'t scattered: it\'s what lets me move between strategy and execution without losing the thread of either.',
 'about.bio.p2': 'Most of my career has been spent entering companies with little to no design structure and leaving them with <strong>processes, systems, and culture</strong> that continue long after. I\'ve built three product design sectors from scratch, created design systems adopted globally, and co-founded a software company whose first product is already running in schools across Brazil.',
 'about.bio.p3': 'I believe design is fundamentally about <strong>storytelling</strong>: whether it\'s a product narrative, a dashboard that makes millions of data points readable, or a visual system that gives distributed teams a shared language. That\'s the same thread running through my music, my case studies, and how I run a design critique.',
 'about.ima.designer': 'I\'m a <em>designer.</em>',
 'about.ima.designer.text': 'Design is where I spend most of my hours, and most of my curiosity. I care about <strong>systems over screens</strong>: the logic, tokens, and patterns that make a product feel coherent at scale. I\'m equally comfortable leading discovery, drawing the details, and writing the front-end code that brings a component to life.',
 'about.ima.musician': 'I\'m a <em>musician.</em>',
 'about.ima.musician.text': 'Music has been part of my life for as long as design has. There\'s something about practicing an instrument, the patience, the repetition, the small adjustments, that maps directly onto how I approach design problems: iterate quietly until it feels right.',
 'about.ima.storyteller': 'I\'m a <em>storyteller.</em>',
 'about.ima.storyteller.text': 'Whether it\'s a product, a song, a photograph, or a conversation, I\'m always looking for the story underneath. Storytelling isn\'t a skill I use at work. It\'s how I move through the world and how I connect with the people in it.',
 'about.photo.cap1': 'Professional travel planner. Execution rate: roughly 1 in 10.',
 'about.photo.cap2': 'Maker of what is very likely the best Carbonara on my street. Uncontested.',
 'about.photo.cap3': 'Games taught me storytelling before I knew that\'s what I was learning.',
 'about.photo.cap4': 'Commonly spotted behind a camera, quietly documenting things nobody asked me to.',
 'about.photo.cap5': 'If I\'m not home, there\'s a good chance I\'m at a festival somewhere.',
 'about.photo.cap6': 'I\'ve been a musician for more than half my life. It started as a habit and never stopped.',
 'about.photo.cap7': 'Active part of the local music and audiovisual community, for better or worse.',
 'about.photo.cap8': 'Always chasing ways to collapse the line between audio and image into something new.',
 'about.photo.cap9': 'Passionate about finding another angle for the ordinary, one frame at a time.',
 'about.photo.cap10': 'Composing, writing, and spending an unreasonable amount of time thinking about time.',
 'about.photo.cap11': 'Architecture fan. The kind who walks slowly past buildings other people rush by.',
 'about.photo.cap12': 'Genuinely obsessed with medieval culture, history, and the aesthetics of that whole era.',
 'about.exp.label': 'Experience',
 'about.exp.heading': 'Where I\'ve built,\nled, and shipped.',
 'about.exp.current': 'Current',

 /* ── CONTACT PAGE ── */
 'contact.label': 'Get in touch',
 'contact.heading': 'Let\'s talk.',
 'contact.sub': 'Available for full-time roles, freelance projects, and consulting engagements. Based in Joinville, BR. Open to remote and on-site.',
 'contact.email.label': 'Email',
 'contact.linkedin.label': 'LinkedIn',
 'contact.behance.label': 'Behance',
 'contact.cv.label': 'Curriculum Vitae',
 'contact.cv.sub': 'Available upon request.',
 'contact.copy': 'Copy',
 'contact.copied': 'Copied!',

 /* ── ARCHIVES PAGE ── */
 'archives.label': 'Archives',
 'archives.heading': 'Work from before the case studies.',
 'archives.sub': 'Older projects, experiments, and collaborations that didn\'t make it into the main portfolio but still shaped how I design.',
 'archives.behance': 'See more on Behance',

 /* ── CASE STUDY: MULTIPEDIDOS ── */
 'cs.multi.overview.label': 'Overview',
 'cs.multi.overview.heading': 'Multipedidos: design system and UX at 10M+ monthly accesses',
 'cs.multi.role': 'Senior Product Designer',
 'cs.multi.company': 'Multipedidos',
 'cs.multi.period': 'Jan 2024 – Jun 2026',
 'cs.multi.type': 'Full-time',

 /* ── CASE STUDY: KEEPEYE ── */
 'cs.keepeye.overview.label': 'Overview',
 'cs.keepeye.overview.heading': 'Keepeye: KPI management platform from zero to tested product',
 'cs.keepeye.role': 'UX Engineer',
 'cs.keepeye.company': 'Dojo Smart Ways',
 'cs.keepeye.period': 'Jun 2022 – Dec 2023',
 'cs.keepeye.type': 'Full-time',

 /* ── CASE STUDY: INCLUDED ── */
 'cs.included.overview.label': 'Overview',
 'cs.included.overview.heading': 'IncludED: building the design system and product for inclusive education',
 'cs.included.role': 'Co-founder & Lead Product Designer',
 'cs.included.company': 'PixelPunk',
 'cs.included.period': 'Oct 2024 – Present',
 'cs.included.type': 'Co-founder',

 /* ── CASE STUDY: ELECTROLUX ── */
 'cs.electrolux.overview.label': 'Overview',
 'cs.electrolux.overview.heading': 'Electrolux Global Dashboard System: one visual language, worldwide',
 'cs.electrolux.role': 'UX Engineer',
 'cs.electrolux.company': 'Dojo Smart Ways / Electrolux',
 'cs.electrolux.period': 'Jun 2022 – Dec 2023',
 'cs.electrolux.type': 'Contractor',
 'exp.pixelpunk.role': 'Co-founder & Lead Product Designer',
 'exp.pixelpunk.period': 'Oct 2024 – Present',
 'exp.pixelpunk.desc': 'Co-founded a software company with two partners and built the entire design ecosystem from scratch. Led the end-to-end design of IncludED, a BNCC-compliant SaaS for creating and managing Individualized Education Plans (PEIs) for inclusion students. Built in close collaboration with a neuropsychologist and a pedagogical consultant with 20+ combined years inside schools. Already deployed in schools across Brazil.',
 'exp.pixelpunk.b1': 'Built the Design System first, then all product screens, ensuring consistency from day one',
 'exp.pixelpunk.b2': 'Designed all UX flows with accessibility as a core requirement, not a feature',
 'exp.pixelpunk.b3': 'Created full branding for IncludED: logo, visual identity, and support materials',
 'exp.pixelpunk.b4': 'Used AI tools throughout the process for faster prototyping and spec generation',
 'exp.multi.role': 'Senior Product Designer',
 'exp.multi.period': 'Jan 2024 – Jun 2026',
 'exp.multi.desc': 'Sole designer at a food-tech company with two core products: Gestor de Pedidos (restaurant management) and Pedir.Delivery (online menu with 10M+ monthly accesses and 4M+ monthly orders). Entered as freelancer via Estúdio 149 in January 2024, became fixed contractor in June 2024. Built the product design sector from scratch and deeply integrated design into the engineering workflow.',
 'exp.multi.b1': 'Created the company Design System: 40+ demands, 1,000+ responsive screens for mobile and web',
 'exp.multi.b2': 'Reduced prototype delivery time from 5 to 2 days (60% improvement) using AI-assisted prototyping with Claude + MCP + design system tokens',
 'exp.multi.b3': 'Implemented Design Critiques involving devs, QA, CX, commercial, and directors for cross-functional alignment',
 'exp.multi.b4': 'Added usability testing and external client critiques to the design process',
 'exp.multi.b5': 'Introduced A/B testing, SEQ scoring, and OKR-based product decisions',
 'exp.multi.b6': 'Implemented Figma DEV Mode for all developers, enabling high-fidelity implementation directly from design tokens',
 'exp.dojo.role': 'UX Engineer',
 'exp.dojo.period': 'Jun 2022 – Dec 2023',
 'exp.dojo.desc': 'Joined as the first and lead product designer, building the product design sector from scratch. Led the design of Keepeye (KPI management SaaS) in a small team: two developers and a front-end developer transitioning into UX/UI. Led all design layers; collaborated on front-end implementation (Angular + Tailwind CSS) alongside the team. Also covered data visualization for global enterprise clients including Electrolux and Nidec.',
 'exp.dojo.b1': 'Led design of Keepeye end-to-end: UX research, IA, UI, component library, and handoff, achieving 8.8/10 satisfaction in professional testing. Collaborated on Angular + Tailwind CSS front-end implementation alongside the team',
 'exp.dojo.b2': 'Created the visual identity and dashboard construction standards for Electrolux, adopted first in LATAM then approved by the global board and rolled out company-wide',
 'exp.dojo.b3': 'Created the branding and visual identity for Keepeye: logo, brand guidelines, and product visual language',
 'exp.dojo.b4': 'Developed dashboard standards for Nidec across LATAM; later contracted directly by Nidec Motor (USA) as an independent consultant',
 'exp.dojo.b5': 'Learned Power BI in one week; contributing to live client projects by week two',
 'exp.dojo.b6': 'Ran Business Understanding sessions with Data Analysts and Data Engineers to define data rules, KPIs, and visualization strategies',
 'exp.e149.role': 'Freelance Designer',
 'exp.e149.period': 'Feb 2018 – Jun 2024 · parallel',
 'exp.e149.desc': 'Independent studio running in parallel with full-time roles. Covered digital products, visual identities, branding, photography, and audiovisual for local and global clients, including the early freelance work that became the Multipedidos contract.',
 'exp.e149.b1': 'Designed and developed digital products and web applications end-to-end',
 'exp.e149.b2': 'Created brand identities and visual systems for diverse clients',
 'exp.e149.b3': 'Produced lifestyle, product, and event photography, and audiovisual work',
 'exp.e149.b4': 'Worked as a contractor for Nidec Motor (USA) on data visualization projects',
 'exp.lepper.role': 'Product Designer',
 'exp.lepper.period': 'Feb 2016 – Jun 2022',
 'exp.lepper.desc': 'Six years at one of Brazil\'s largest textile companies (founded 1907, 100+ year history), owning the full product lifecycle for licensed and original collections. Licensed brands included Marvel, Disney, Dragon Ball (Toei), Warner, and PlayStation. A constraint-driven, cross-functional environment where design decisions had direct consequences on the factory floor, and my first real experience of what it means to ship a product end-to-end.',
 'exp.lepper.b1': 'Owned the full product lifecycle: from market research and concept briefs through design, production oversight, launch, and collection performance tracking',
 'exp.lepper.b2': 'Mastered the color separation process for rotary stamping and silk-screen printing: a highly technical, cross-functional workflow where design decisions had direct consequences on the factory floor, and errors cost hundreds in re-engraving',
 'exp.lepper.b3': 'Created the "Manual da Criação", the official complete guide for the color separation and creation process, adopted company-wide for onboarding designers and briefing external partners. First experience building documentation meant to outlast my time in a role',
 'exp.lepper.b4': 'Mentored 5 designers across 6 years on color separation and company design standards',
 'exp.lepper.b5': 'Proposed a sustainable packaging initiative, presented to the full board of directors',
 'exp.lepper.b6': 'Participated in brand events and sales conventions representing licensed product lines',
 'exp.pronto.role': 'Graphic Designer',
 'exp.pronto.period': 'Jun 2015 – Jan 2016',
 'exp.pronto.desc': 'First professional role, at a fast-paced express print studio. Handled hundreds of jobs per week across file closure, print preparation, and graphic creation, often delivering logos in under one hour and complete event kits (business card, flyer, folder) in two.',
 'exp.pronto.b1': 'Prepared files for offset, silk-screen, laser, and custom die-cut printing processes',
 'exp.pronto.b2': 'Developed logotypes, visual identities, flyers, banners, and event materials under extreme time constraints',
 'exp.pronto.b3': 'Gained practical knowledge of printing equipment, materials, and the end-to-end print production process',
 'svc.label': 'Services',
 'svc.heading': 'How I can<br />help your team.',
 'svc.figma.name': 'Figma Systems &amp; Prototyping',
 'arch.label': 'Beyond Product Design',
 'arch.title': 'Branding, games<br /><em>and other stories.</em>',
 'arch.sub': 'A collection of personal and freelance creative work: branding and visual identity, game design, photography, and other projects outside the product design world.',
 'arch.behance': 'All projects below are hosted on',
 'arch.filter.all': 'All',
 'arch.filter.branding': 'Branding',
 'arch.filter.game': 'Game Design',
 'arch.filter.photo': 'Photography',
 'arch.yby.tag1': 'Branding',
 'arch.yby.tag2': 'Real Estate',
 'arch.yby.title': 'YBY: Real Estate Developer Branding',
 'arch.yby.desc': 'Complete brand identity for a real estate developer: visual strategy, logo system, and brand guidelines.',
 'arch.taken.tag1': 'Game Design',
 'arch.taken.tag2': 'Branding',
 'arch.taken.title': 'Game Design: Taken',
 'arch.taken.desc': 'Visual identity and game design project: character design, UI concepts, and brand identity.',
 'arch.e149.tag1': 'Personal Brand',
 'arch.e149.tag2': 'Branding',
 'arch.e149.title': 'Estúdio 149: Personal Branding',
 'arch.e149.desc': 'Personal studio brand identity: naming, logo design, visual system, and brand collateral for Estúdio 149.',
 'arch.view': 'View on Behance',
 'arch.empty': 'No projects in this category yet.',
 'arch.empty.all': 'View all',
 'arch.cta.label': 'What\'s next?',
 'arch.cta.heading': 'Looking for product design work?',
 'arch.cta.sub': 'Check out my product design case studies, or get in touch about a project.',
 'arch.projects': 'projects',

 /* ── CASE STUDY CHROME ── */
 'btn.back-to-work': 'Back to Work',
 'cs.next.case': 'Next Case Study',
 'cs.explore.h2': 'Explore more <em>case studies.</em>',
 'cs.more.h2': 'More <em>case studies</em> in Selected Work.',
 'cs.electrolux.next.title': 'Keepeye: KPI Management Platform.<br /><em>From spreadsheets to a product.</em>',

 /* ── CONTACT PAGE ── */
 'contact.available.badge': 'Available for new projects',
 'contact.page.title': 'Let\'s build something<br /><em>worth shipping.</em>',
 'contact.page.sub': 'Whether it\'s a full product engagement, a design system overhaul, or a strategic UX challenge, I\'d love to hear about it.',
 'contact.avail.status': 'Currently available',
 'contact.avail.desc': 'Open to new projects starting <strong style="color:var(--text-1);">June 2026</strong>, both contract and full-time opportunities. Local (Joinville, BR) and global (remote). Typically respond within 24h.',
 'contact.phone.label': 'Phone / WhatsApp',
 'contact.detail.location': 'Joinville, Santa Catarina, Brazil',
 'contact.detail.remote': 'Works remotely with global clients',
 'contact.detail.timezone': 'GMT-3 (BRT): flexible timezone overlap',
 'contact.detail.languages': 'Portuguese (native) · English (fluent)',
 'contact.strip.heading': 'Ready to start the conversation?',
 'contact.strip.sub': 'Send me an email, I respond within 24-48 hours.',
 'contact.strip.btn': 'Send an email',

 /* ── ABOUT CLOSING ── */
 'about.closing.heading': 'Let\'s build <em>something</em> together.',
 'about.closing.text': 'If you\'re looking for a Product Designer who can own a problem end to end, from research to a working interface, I\'d love to hear about it.',
    /* ── INDEX WORK GRID ── */
    'wi.count': '5 projects',
    'wi.multi.type': 'Product Design · Design System',
    'wi.included.type': 'Product Design · EdTech SaaS',
    'wi.keepeye.type': 'UX Engineering · B2B SaaS',
    'wi.electrolux.type': 'Design System · Data Viz · Global',
    'wi.archive.name': 'Archive',
    'wi.archive.type': 'Older Work · Behance',

    /* ── SHARED CASE META LABELS ── */
    'cs.meta.company': 'Company',
    'cs.meta.role': 'Role',
    'cs.meta.timeline': 'Timeline',
    'cs.meta.stack': 'Stack',
    'cs.meta.platform': 'Platform',
    'cs.shared.outcomes.label': 'Outcomes',

    /* ── MULTIPEDIDOS ── */
    'cs.multi.context.label': 'Scale',
    'cs.multi.context.h2': 'Designing for <em>real users.</em>',
    'cs.multi.context.n1': 'Monthly accesses on Pedir.Delivery',
    'cs.multi.context.n2': 'Monthly orders processed',
    'cs.multi.context.n3': 'Screens developed',
    'cs.multi.context.n4': 'Product demands managed in design system',
    'cs.multi.situation.label': 'The Situation',
    'cs.multi.mandate.label': 'The Mandate',
    'cs.multi.pullquote': "The challenge wasn't managing design at scale. It was building the infrastructure for good decisions while the product kept shipping.",
    'cs.multi.ds.label': 'Design System',
    'cs.multi.ds.h2': 'Built to <em>move fast</em> without breaking things.',
    'cs.multi.ds.c1.h3': 'Tokens Before Components',
    'cs.multi.ds.c2.h3': 'DEV Mode Integration',
    'cs.multi.ds.c3.h3': 'Responsive by Default',
    'cs.multi.consumer.label': 'Consumer Platform',
    'cs.multi.consumer.h2': 'Designing the order, <em>from first tap to delivery.</em>',
    'cs.multi.consumer.scope': 'Scope',
    'cs.multi.funnel1.title': 'Menu',
    'cs.multi.funnel1.desc': 'Category browsing, item cards, search, restaurant info',
    'cs.multi.funnel2.title': 'Item Selection',
    'cs.multi.funnel2.desc': 'Generic items, pizza builder, combo selection, modifiers',
    'cs.multi.funnel3.title': 'Cart',
    'cs.multi.funnel3.desc': 'Review, quantity edit, loyalty points preview, CTA',
    'cs.multi.funnel4.title': 'Checkout',
    'cs.multi.funnel4.desc': 'Delivery details, payment method, cashback, coupons',
    'cs.multi.funnel5.title': 'Confirmation',
    'cs.multi.funnel5.desc': 'Order confirmed, delivery ETA, async payment tracking',
    'cs.multi.ed1.label': 'Item Flows',
    'cs.multi.ed1.title': 'Three Ordering Flows in One',
    'cs.multi.ed2.label': 'Conversion',
    'cs.multi.ed2.title': 'Reducing Abandonment at Every Step',
    'cs.multi.ed3.label': 'Account &amp; Loyalty',
    'cs.multi.ed3.title': 'Login, Account and Loyalty System',
    'cs.multi.txn.label': 'Transactional Flows',
    'cs.multi.txn.h2': 'End-to-end ownership of <em>checkout and payment.</em>',
    'cs.multi.step1.label': 'Cart<br />Review',
    'cs.multi.step2.label': 'Delivery<br />Details',
    'cs.multi.step3.label': 'Payment<br />Selection',
    'cs.multi.step4.label': 'Discounts<br />&amp; Cashback',
    'cs.multi.step5.label': 'Order<br />Confirmed',
    'cs.multi.step6.label': 'Payment<br />Tracking',
    'cs.multi.pay.online': 'Pay Online',
    'cs.multi.pay.delivery': 'Pay on Delivery',
    'cs.multi.strip1.h4': 'Cashback &amp; Coupons',
    'cs.multi.strip2.h4': 'Three Delivery Contexts',
    'cs.multi.strip3.h4': 'Async Payment States <span class=\"ab-badge\">A/B</span>',
    'cs.multi.b2b.label': 'B2B Platform',
    'cs.multi.b2b.h2': 'Running the restaurant, <em>end to end.</em>',
    'cs.multi.b2b.deliveries': 'Some Deliveries',
    'cs.multi.g1.label': 'Kitchen Operations',
    'cs.multi.g1.title': 'KDS Implementation',
    'cs.multi.g2.label': 'Menu Management',
    'cs.multi.g2.title': 'Menu Builder Rebuild',
    'cs.multi.g3.label': 'Point of Sale',
    'cs.multi.g3.title': 'POS Redesign',
    'cs.multi.g4.label': 'New Feature',
    'cs.multi.g4.title': 'Multiple Payers',
    'cs.multi.g5.label': 'Payment Integration',
    'cs.multi.g5.title': 'PIX + Digital Wallet',
    'cs.multi.g6.label': 'Navigation',
    'cs.multi.g6.title': 'Sidebar + Information Architecture',
    'cs.multi.process.label': 'Process',
    'cs.multi.process.h2': 'Design that talks <em>to the whole team.</em>',
    'cs.multi.p1.phase': 'Alignment',
    'cs.multi.p1.h3': 'Design Critiques',
    'cs.multi.p2.phase': 'Validation',
    'cs.multi.p2.h3': 'Usability Testing',
    'cs.multi.p3.phase': 'Optimization',
    'cs.multi.p3.h3': 'A/B Testing',
    'cs.multi.p4.phase': 'Delivery',
    'cs.multi.p4.h3': 'AI-Assisted Handoff',
    'cs.multi.ai.label': 'The 60% Improvement',
    'cs.multi.ai.h2': 'From 5 days<br />to <em>2 days.</em>',
    'cs.multi.outcomes.h2': 'Impact, <em>in numbers.</em>',
    'cs.multi.o1.label': 'Faster prototype delivery via AI-assisted handoff workflow',
    'cs.multi.o2.label': 'Monthly accesses on Pedir.Delivery, serving 4M+ orders',
    'cs.multi.o3.label': 'Screens developed on a single design system',
    'cs.multi.next.keepeye': 'Keepeye: KPI Platform',
    'cs.multi.next.electrolux': 'Electrolux: Data Viz',
    'cs.multi.next.included': 'IncludED: EdTech SaaS',

    /* ── KEEPEYE ── */
    'cs.keepeye.biz.label': 'The Business Case',
    'cs.keepeye.user.label': 'The User Problem',
    'cs.keepeye.pullquote': 'The problem was not the absence of data. It was the absence of a single, trustworthy version of it.',
    'cs.keepeye.process.label': 'Process',
    'cs.keepeye.process.h2': 'Discovery before <em>decisions.</em>',
    'cs.keepeye.ph1': 'Phase 01 · Discover',
    'cs.keepeye.ph1.h3': 'Understanding the problem from the inside out',
    'cs.keepeye.ph2': 'Phase 01 · Quantify',
    'cs.keepeye.ph2.h3': 'Validating what we heard at scale',
    'cs.keepeye.ph3': 'Phase 02 · Define',
    'cs.keepeye.ph3.h3': 'Prioritizing with RICE, not gut feeling',
    'cs.keepeye.ph4': 'Phase 03-04 · Build',
    'cs.keepeye.ph4.h3': 'From architecture to shipped code',
    'cs.keepeye.research.label': 'What Research Revealed',
    'cs.keepeye.research.h2': 'Three patterns, <em>one clear opportunity.</em>',
    'cs.keepeye.ed1.label': 'Data Fragmentation',
    'cs.keepeye.ed1.title': 'One metric, many versions',
    'cs.keepeye.ed2.label': 'Tool Gap',
    'cs.keepeye.ed2.title': 'Built for analysts, not managers',
    'cs.keepeye.ed3.label': 'Trust Deficit',
    'cs.keepeye.ed3.title': 'Bad data leads to paralysis, not bad decisions',
    'cs.keepeye.product.label': 'The Product',
    'cs.keepeye.product.h2': 'One platform. <em>Every KPI.</em>',
    'cs.keepeye.f1.label': 'Monitoring',
    'cs.keepeye.f1.title': 'KPI Dashboards',
    'cs.keepeye.f2.label': 'Data Trust',
    'cs.keepeye.f2.title': 'Metric Formula Calculator',
    'cs.keepeye.f3.label': 'Configuration',
    'cs.keepeye.f3.title': 'KPI and Metrics Management',
    'cs.keepeye.f4.label': 'Governance',
    'cs.keepeye.f4.title': 'User Area and Access Control',
    'cs.keepeye.how.label': 'How I Worked',
    'cs.keepeye.how.h2': 'Designer, developer, <em>and mentor.</em>',
    'cs.keepeye.fullstack.label': 'Full-Stack Contribution',
    'cs.keepeye.mentor.label': 'Mentoring in Transition',
    'cs.keepeye.outcomes.h2': 'The number that matters: <em>8.8 out of 10.</em>',
    'cs.keepeye.o1.label': 'User satisfaction in post-launch interviews, internal and external',
    'cs.keepeye.o2.label': 'Team members, including one designer mentored through her career transition',
    'cs.keepeye.next.multi': 'Multipedidos: Design System',
    'cs.keepeye.next.electrolux': 'Electrolux: Data Viz',

    /* ── INCLUDED ── */
    'cs.included.legal.label': 'The Legal Mandate',
    'cs.included.human.label': 'The Human Cost',
    'cs.included.pullquote': "The problem isn't the law. The problem is that nobody gave teachers the infrastructure to follow it.",
    'cs.included.origin.label': 'Why this project',
    'cs.included.origin.h2': 'Neuroscience, design, <em>and what matters.</em>',
    'cs.included.process.label': 'How we built it',
    'cs.included.process.h2': 'Foundation first, <em>screens second.</em>',
    'cs.included.s1': 'Step 01 · Foundation',
    'cs.included.s1.h3': 'Accio: the Design System that made everything else possible',
    'cs.included.s2': 'Step 02 · Research',
    'cs.included.s2.h3': 'Weeks of structured learning before a single wireframe',
    'cs.included.s3': 'Step 03 · Market',
    'cs.included.s3.h3': 'Mapping what existed and exactly where it fell short',
    'cs.included.s4': 'Step 04 · Build',
    'cs.included.s4.h3': 'Screens + AI, faster because the foundation was ready',
    'cs.included.rip.label': 'Research in practice',
    'cs.included.depth.label': 'What the research covered',
    'cs.included.depth.h2': "You cannot design for a domain <em>you haven't studied.</em>",
    'cs.included.r1.label': 'Legislation',
    'cs.included.r1.title': 'Brazilian Inclusion Law and PEI requirements',
    'cs.included.r2.label': 'Curriculum',
    'cs.included.r2.title': 'BNCC architecture and how it applies to inclusion',
    'cs.included.r3.label': 'Classroom Reality',
    'cs.included.r3.title': 'How teachers actually work with inclusion students',
    'cs.included.r4.label': 'Clinical Gap',
    'cs.included.r4.title': 'What neuropsychological reports mean in the classroom',
    'cs.included.r5.label': 'Regulatory Framework',
    'cs.included.r5.title': 'AEE requirements and institutional oversight',
    'cs.included.exp.label': 'What domain expertise changed',
    'cs.included.exp.h2': 'You cannot design this <em>from the outside.</em>',
    'cs.included.ed1.label': 'Pedagogical Expertise',
    'cs.included.ed1.title': '20+ years in schools, in the room',
    'cs.included.ed2.label': 'Neuropsychology',
    'cs.included.ed2.title': 'The clinical lens, translated for teachers',
    'cs.included.ed3.label': 'Market Research',
    'cs.included.ed3.title': 'The gap the market confirmed',
    'cs.included.built.label': 'What we built',
    'cs.included.built.h2': 'A complete layer for <em>inclusive education.</em>',
    'cs.included.m.label': 'Core Module',
    'cs.included.m1.title': 'PEI Creation and Management',
    'cs.included.m2.title': 'BNCC Goal Mapping with AI',
    'cs.included.m3.title': 'Student Evolution and Progress Tracking',
    'cs.included.m4.title': 'Clinical Report Processing',
    'cs.included.m5.title': 'PAEE: Specialized Support Plan',
    'cs.included.m6.title': 'Multi-Role Collaboration',
    'cs.included.ai.label': 'AI in IncludED',
    'cs.included.ai.h2': 'Not a chatbot. <em>Eight touchpoints.</em>',
    'cs.included.ai1.label': 'Clinical',
    'cs.included.ai1.title': 'Report Translation and OCR',
    'cs.included.ai2.label': 'Planning',
    'cs.included.ai2.title': 'Goal and Activity Suggestions',
    'cs.included.ai3.label': 'Synthesis',
    'cs.included.ai3.title': 'Adaptation Council and PEI Summary',
    'cs.included.outcomes.h2': 'Live in schools, <em>growing fast.</em>',
    'cs.included.o1.label': 'From launch to active in schools across multiple Brazilian states',
    'cs.included.o2.label': 'Combined years of pedagogical and neuropsychological expertise guiding every product decision',
    'cs.included.o3.label': 'Distinct AI touchpoints embedded in the product, each with a specific job and human review gate',
    'cs.included.next.multi': 'Multipedidos: Design System',
    'cs.included.next.electrolux': 'Electrolux: Data Viz',
    'cs.included.next.keepeye': 'Keepeye: KPI Platform',
    'cs.included.meta.company': 'PixelPunk<span>Co-founded Oct 2024</span>',
    'cs.included.meta.company.root': 'PixelPunk<span>Oct 2024</span>',
    'cs.included.meta.role': 'Co-founder<span>Lead Product Designer</span>',
    'cs.included.meta.role.root': 'Lead Product Designer',
    'cs.included.meta.timeline': 'Oct 2024 – Present<span>From zero to live</span>',
    'cs.included.meta.stack': 'Figma, BNCC<span>Accessibility-first</span>',
    'cs.included.meta.platform.sub': 'Live product',

    /* ── ELECTROLUX ── */
    'cs.elec.meta.scope': 'Scope',
    'cs.elec.n1': 'Deployment waves across LATAM',
    'cs.elec.n2': 'Dashboard contexts: Executive, Operational, Analytical',
    'cs.elec.n3': 'Enterprise clients served in parallel',
    'cs.elec.n4': 'Standard adopted worldwide after board presentation',
    'cs.elec.situation.label': 'The Situation',
    'cs.elec.mandate.label': 'The Mandate',
    'cs.elec.system.label': 'The System',
    'cs.elec.system.h2': 'Three contexts, <em>one language.</em>',
    'cs.elec.dt1.title': '<em>Executive</em> Dashboard',
    'cs.elec.dt1.desc': 'High-level indicators for leadership: goal attainment, regional performance, and strategic KPIs at a glance. Designed for low interaction: the first screen answers the key question without drill-down.',
    'cs.elec.dt2.title': '<em>Operational</em> Dashboard',
    'cs.elec.dt2.desc': 'Day-to-day monitoring for team leads and managers. Tracks output by period, process efficiency, and flags deviations before they become problems. Designed for daily use.',
    'cs.elec.dt3.title': '<em>Analytical</em> Dashboard',
    'cs.elec.dt3.desc': 'Deep-dive views for analysts: variance distribution, cross-dimensional breakdowns, and trend analysis. Designed for exploration rather than quick reads, with high interaction depth.',
    'cs.elec.process.label': 'Process',
    'cs.elec.process.h2': 'Understanding before <em>building.</em>',
    'cs.elec.ph1': 'Phase 01',
    'cs.elec.ph1.h3': 'Business Understanding',
    'cs.elec.ph2': 'Phase 02',
    'cs.elec.ph2.h3': 'Data Alignment',
    'cs.elec.ph3': 'Phase 03',
    'cs.elec.ph3.h3': 'Template Design',
    'cs.elec.ph4': 'Phase 04',
    'cs.elec.ph4.h3': 'Build and Validate',
    'cs.elec.system2.label': 'What Made It a System',
    'cs.elec.system2.h2': 'Beyond dashboards, <em>a repeatable standard.</em>',
    'cs.elec.d1.label': 'Deliverable',
    'cs.elec.d1.title': 'Reusable Dashboard Templates',
    'cs.elec.d2.title': 'Visualization Manual',
    'cs.elec.d3.title': '5-Wave Deployment',
    'cs.elec.d4.label': 'Parallel',
    'cs.elec.d4.title': 'Nidec: Same Methodology',
    'cs.elec.scale.label': 'Scale and Impact',
    'cs.elec.scale.h2': 'From LATAM to <em>global standard.</em>',
    'cs.elec.sp1.label': 'LATAM Rollout',
    'cs.elec.sp1.h4': '5 waves, multiple business areas',
    'cs.elec.sp2.label': 'Global Adoption',
    'cs.elec.sp2.h4': 'Presented to the board, adopted worldwide',
    'cs.elec.sp3.label': 'Self-Sustaining',
    'cs.elec.sp3.h4': 'Teams replicate without a designer',
    'cs.elec.outcomes.h2': 'Measurable results, <em>lasting standard.</em>',
    'cs.elec.o1.label': 'Standard adopted by Electrolux worldwide after board presentation',
    'cs.elec.o2.label': 'Deployment waves completed across LATAM, each faster than the last',
    'cs.elec.o3.label': 'Clients served in parallel with the same methodology, Electrolux and Nidec',

 },

 pt: {
 /* NAV */
 'nav.work': 'Trabalho',
 'nav.about': 'Sobre mim',
 'nav.archives': 'Arquivo',
 'nav.contact': 'Contato',
 'nav.contact-mobile': 'Contato →',
 'nav.linkedin': 'LinkedIn',
 'nav.theme-light':'Modo claro',
 'nav.theme-dark': 'Modo escuro',

 /* COMMON */
 'btn.view-case': 'Ver Case Study',
 'btn.get-in-touch': 'Entrar em contato',
 'btn.more-about': 'Mais sobre mim',
 'btn.view-work': 'Ver trabalhos selecionados',
 'btn.about-me': 'Sobre mim →',
 'btn.download-cv': 'Baixar CV',
 'label.featured': 'Destaque',
 'label.currently': 'Atualmente',

 /* FOOTER */
 'footer.text': 'Lucas Nascimento · Lead Product Designer',

 /* ── INDEX (root) ── */
 'index.label': 'Trabalhos Selecionados',
 'index.heading': 'Produtos que moldei,\nproblemas que resolvi.',

 /* ── PORTFOLIO / INDEX ── */
 'hero.headline': '11 anos transformando<br />problemas complexos em<br />experiências que <em>funcionam.</em>',
 'hero.sub': 'Sou Lead Product Designer na interseção entre estratégia, UX e Desenvolvimento de Produto. De produtos do zero a sistemas de design enterprise, com Figma em nível avançado e IA integrada ao processo.',
 'stat1.label': 'Anos transformando problemas em design estruturado',
 'stat2.label': 'Acessos mensais em produtos que projetei',
 'stat3.label': 'Redução nos ciclos de entrega com IA no processo',
 'stat4.label': 'Empresas onde construí estrutura de design do zero',
 'marquee.label': 'Empresas & Clientes',
 'work.label': 'Trabalhos em Destaque',
 'work.heading': 'Produtos que moldei,\nproblemas que resolvi.',

 /* Cards - Multipedidos */
 'card.multi.title': 'Multipedidos: sistema de design e UX em 10M+ acessos mensais',
 'card.multi.desc': 'Como designer solo, construí do zero o setor de product design em uma plataforma food-tech com 10M+ acessos mensais. Criei o design system, reestruturei fluxos de UX e introduzi prototipação com IA que reduziu o tempo de entrega em 60%.',
 'card.multi.metric1': 'Acessos mensais na plataforma',
 'card.multi.metric2': 'Mais rápido na entrega de protótipos',

 /* Cards - IncludED */
 'card.included.title': 'IncludED: gestão de Planos Educacionais Individualizados para alunos de inclusão',
 'card.included.desc': 'Cofundei a PixelPunk e liderei o design completo do IncludED, um SaaS adequado à BNCC, construído com neuropsicóloga e consultora pedagógica. Já em uso em escolas por todo o Brasil.',
 'card.included.metric1': 'Anos de expertise pedagógica na equipe',

 /* Cards - Keepeye */
 'card.keepeye.title': 'Keepeye: plataforma de gestão de KPIs do zero ao produto testado',
 'card.keepeye.desc': 'Design e desenvolvimento front-end de ponta a ponta de um SaaS B2B que centraliza o acompanhamento de KPIs para clientes enterprise. Da pesquisa de UX e arquitetura ao handoff de componentes e implementação em código.',
 'card.keepeye.metric1': 'Pontuação de satisfação em 10',

 /* Cards - Electrolux */
 'card.electrolux.title': 'Electrolux Global Dashboard System: uma linguagem visual, o mundo todo',
 'card.electrolux.desc': 'Criei a identidade visual e os padrões de componentes para os dashboards operacionais da Electrolux. Adotado primeiro na LATAM, depois aprovado pelo conselho global e implementado em todas as regiões.',
 'card.electrolux.metric1': 'Padrão adotado em todas as regiões',

 /* About section (portfolio/index) */
 'about.label': 'Sobre',
 'about.heading': 'Designer que programa.\nEstrategista que executa.',
 'about.text1': 'Sou Lucas, Product Designer com <strong>mais de 11 anos</strong> trabalhando na interseção entre estratégia, UX e desenvolvimento front-end. Me especializo em construir produtos digitais e <strong>culturas de design do zero</strong>, em ambientes onde antes não existia estrutura.',
 'about.text2': 'Além do trabalho, sou músico e contador de histórias, e esses hábitos moldam como abordo design. Curioso para entender como tudo isso se conecta?',

 /* Expertise */
 'exp.label': 'Especialidades',
 'exp.heading': 'O que eu trago\npara o seu produto.',
 'exp.figma.name': 'Domínio do Figma',
 'exp.figma.desc': 'Uso avançado do Figma como plataforma de design system, não apenas ferramenta de desenho. Variáveis, tokens, dev mode, componentes complexos e protótipos interativos que os desenvolvedores realmente conseguem usar.',
 'exp.ai.name': 'Design Aumentado por IA',
 'exp.ai.desc': 'IA e Vibe Coding como camada estratégica de processo: desde síntese de pesquisa e documentação de handoff até protótipos funcionais. Velocidade sem abrir mão da qualidade de design.',
 'exp.ux.name': 'Pesquisa & Estratégia de UX',
 'exp.ux.desc': 'Discovery, entrevistas com usuários, jobs-to-be-done, análise competitiva e tradução de insights em estratégia de produto com a qual stakeholders se alinham.',
 'exp.product.name': 'Product Design (E2E)',
 'exp.product.desc': 'Arquitetura de informação, design de interação e prototipação de baixa a alta fidelidade, equilibrando necessidades do usuário com objetivos de negócio e restrições técnicas.',
 'exp.ds.name': 'Design Systems',
 'exp.ds.desc': 'Bibliotecas de componentes escaláveis e design tokens que conectam design e engenharia, reduzindo inconsistências, retrabalho e atrito no processo de desenvolvimento.',
 'exp.dataviz.name': 'Visualização de Dados',
 'exp.dataviz.desc': 'Dashboards e produtos de dados que tornam informações complexas escaneáveis e acionáveis, combinando pensamento de UX com ferramentas de visualização e storytelling com dados.',

 /* AI Banner */
 'ai.title': 'IA no meu processo: <em>aceleradora, não substituta.</em>',
 'ai.text': 'Uso IA como uma <strong style="color:var(--text-1); font-weight:500;">camada estratégica</strong> em todo o ciclo de design: síntese de pesquisa, documentação de handoff, escrita de specs de componentes e geração de protótipos funcionais. O resultado: ciclos de feedback mais curtos, handoffs mais claros e mais tempo para as decisões de design que realmente exigem julgamento humano.',
 'ai.chip1': 'Síntese de pesquisa',
 'ai.chip2': 'Documentação de handoff',
 'ai.chip3': 'Escrita de specs',
 'ai.chip4': 'Vibe Coding',
 'ai.chip5': 'Protótipos funcionais',

 /* Mini-CTA */
 'cta.heading': 'Vamos construir algo<br /><em style="font-style:italic; color:var(--accent-text);">que vale a pena lançar.</em>',
 'cta.sub': 'Disponível para novos projetos, locais e globais.',

 /* ── ABOUT PAGE ── */
 'about.hero.label': 'Sobre',
 'about.hero.text1': '<strong>Lead Product Designer</strong> em Joinville, Brasil. Também músico e contador de histórias.',
 'about.hero.text2': 'Faço design de produtos digitais de ponta a ponta, da pesquisa e estratégia à interface e código front-end. Fora do trabalho com produto, música e narrativa são hábitos que moldam como penso sobre ritmo, estrutura e comunicação no design.',
 'about.bio.heading': 'Brasileiro.\nProduct designer.\n<span class="dim">Criador, músico\ne contador de histórias.</span>',
 'about.bio.h3': '...um pouco mais sobre mim',
 'about.bio.p1': 'Sou Product Designer com <strong>mais de 11 anos</strong> em múltiplas disciplinas: product design, design systems, visualização de dados, branding, desenvolvimento front-end e audiovisual. Essa amplitude não é dispersão: é o que me permite transitar entre estratégia e execução sem perder o fio de nenhuma das duas.',
 'about.bio.p2': 'Boa parte da minha carreira foi entrar em empresas com pouca ou nenhuma estrutura de design e sair deixando <strong>processos, sistemas e cultura</strong> que continuam depois. Construí três setores de product design do zero, criei design systems adotados globalmente e cofundei uma empresa de software cujo primeiro produto já roda em escolas por todo o Brasil.',
 'about.bio.p3': 'Acredito que design é fundamentalmente sobre <strong>storytelling</strong>: seja uma narrativa de produto, um dashboard que torna milhões de dados legíveis, ou um sistema visual que dá a times distribuídos uma linguagem comum. É o mesmo fio que atravessa minha música, meus case studies e como conduzo uma crítica de design.',
 'about.ima.designer': 'Sou <em>designer.</em>',
 'about.ima.designer.text': 'Design é onde passo a maior parte das minhas horas e da minha curiosidade. Me importo com <strong>sistemas antes de telas</strong>: a lógica, os tokens e os padrões que fazem um produto parecer coerente em escala. Me sinto igualmente confortável liderando discovery, desenhando os detalhes e escrevendo o código front-end que dá vida a um componente.',
 'about.ima.musician': 'Sou <em>músico.</em>',
 'about.ima.musician.text': 'A música faz parte da minha vida há tanto tempo quanto o design. Há algo em praticar um instrumento (a paciência, a repetição, os pequenos ajustes) que se mapeia diretamente na forma como abordo problemas de design: iterar em silêncio até parecer certo.',
 'about.ima.storyteller': 'Sou <em>contador de histórias.</em>',
 'about.ima.storyteller.text': 'Seja um produto, uma música, uma fotografia ou uma conversa, estou sempre procurando a história por baixo. Contar histórias não é uma habilidade que uso no trabalho. É como me movo pelo mundo e como me conecto com as pessoas.',
 'about.photo.cap1': 'Planejador profissional de viagens. Taxa de execução: uma em cada dez.',
 'about.photo.cap2': 'O melhor Carbonara da minha rua tem o meu nome. Incontestável.',
 'about.photo.cap3': 'Os games me ensinaram storytelling antes de eu saber que era isso que estava aprendendo.',
 'about.photo.cap4': 'Frequentemente avistado com câmera na mão, documentando silenciosamente coisas que ninguém pediu.',
 'about.photo.cap5': 'Se não estou em casa, tem uma boa chance de eu estar num festival por aí.',
 'about.photo.cap6': 'Sou músico há mais da metade da minha vida. Começou como hábito e nunca parou.',
 'about.photo.cap7': 'Parte ativa da cena musical e audiovisual local, para o bem ou para o mal.',
 'about.photo.cap8': 'Sempre em busca de formas de dissolver a fronteira entre áudio e imagem em algo novo.',
 'about.photo.cap9': 'Apaixonado por encontrar outro ângulo para o cotidiano, um frame de cada vez.',
 'about.photo.cap10': 'Compondo, escrevendo e passando uma quantidade irracional de tempo pensando sobre o tempo.',
 'about.photo.cap11': 'Fã de arquitetura. Do tipo que anda devagar diante dos prédios que todo mundo passa correndo.',
 'about.photo.cap12': 'Genuinamente obcecado com a cultura medieval, sua história e a estética de toda aquela era.',
 'about.exp.label': 'Experiência',
 'about.exp.heading': 'Onde construí,\nliderei e entreguei.',
 'about.exp.current': 'Atual',

 /* ── CONTACT PAGE ── */
 'contact.label': 'Fale comigo',
 'contact.heading': 'Vamos conversar.',
 'contact.sub': 'Disponível para posições CLT, projetos freelance e consultorias. Em Joinville, BR. Aberto a remoto e presencial.',
 'contact.email.label': 'E-mail',
 'contact.linkedin.label': 'LinkedIn',
 'contact.behance.label': 'Behance',
 'contact.cv.label': 'Currículo',
 'contact.cv.sub': 'Disponível mediante solicitação.',
 'contact.copy': 'Copiar',
 'contact.copied': 'Copiado!',

 /* ── ARCHIVES PAGE ── */
 'archives.label': 'Arquivo',
 'archives.heading': 'Trabalhos de antes dos case studies.',
 'archives.sub': 'Projetos mais antigos, experimentos e colaborações que não entraram no portfólio principal, mas ainda moldaram como faço design.',
 'archives.behance': 'Ver mais no Behance',

 /* ── CASE STUDIES ── */
 'cs.multi.overview.label': 'Visão Geral',
 'cs.multi.overview.heading': 'Multipedidos: sistema de design e UX em 10M+ acessos mensais',
 'cs.multi.role': 'Senior Product Designer',
 'cs.multi.company': 'Multipedidos',
 'cs.multi.period': 'Jan 2024 – Jun 2026',
 'cs.multi.type': 'Contrato',

 'cs.keepeye.overview.label': 'Visão Geral',
 'cs.keepeye.overview.heading': 'Keepeye: plataforma de gestão de KPIs do zero ao produto testado',
 'cs.keepeye.role': 'UX Engineer',
 'cs.keepeye.company': 'Dojo Smart Ways',
 'cs.keepeye.period': 'Jun 2022 – Dez 2023',
 'cs.keepeye.type': 'Contrato',

 'cs.included.overview.label': 'Visão Geral',
 'cs.included.overview.heading': 'IncludED: construindo o design system e o produto para a educação inclusiva',
 'cs.included.role': 'Cofundador & Lead Product Designer',
 'cs.included.company': 'PixelPunk',
 'cs.included.period': 'Out 2024 – Presente',
 'cs.included.type': 'Cofundador',

 'cs.electrolux.overview.label': 'Visão Geral',
 'cs.electrolux.overview.heading': 'Electrolux Global Dashboard System: uma linguagem visual, o mundo todo',
 'cs.electrolux.role': 'UX Engineer',
 'cs.electrolux.company': 'Dojo Smart Ways / Electrolux',
 'cs.electrolux.period': 'Jun 2022 – Dez 2023',
 'cs.electrolux.type': 'Prestador de serviços',
 'exp.pixelpunk.role': 'Cofundador & Lead Product Designer',
 'exp.pixelpunk.period': 'Out 2024 – Presente',
 'exp.pixelpunk.desc': 'Cofundei uma empresa de software com dois sócios e construí todo o ecossistema de design do zero. Liderei o design de ponta a ponta do IncludED, um SaaS adequado à BNCC para criação e gestão de Planos Educacionais Individualizados (PEIs) para alunos de inclusão. Desenvolvido em colaboração com uma neuropsicóloga e uma consultora pedagógica com mais de 20 anos atuando em escolas.',
 'exp.pixelpunk.b1': 'Construí o Design System primeiro, depois todas as telas do produto, garantindo consistência desde o primeiro dia',
 'exp.pixelpunk.b2': 'Desenhei todos os fluxos de UX com acessibilidade como requisito central do sistema',
 'exp.pixelpunk.b3': 'Criei o branding completo do IncludED e site do produto',
 'exp.pixelpunk.b4': 'Usei ferramentas de IA ao longo de todo o processo para prototipação e geração de specs mais rápidas',
 'exp.multi.role': 'Senior Product Designer',
 'exp.multi.period': 'Jan 2024 – Jun 2026',
 'exp.multi.desc': 'Designer de Produto solo em uma das maiores plataformas de pedidos do Brasil, responsável por dois produtos em paralelo: Pedir.Delivery (B2C, 10M+ acessos/mês, 4M+ pedidos/mês) e o Gestor de Pedidos (plataforma B2B para gestão de restaurantes).',
 'exp.multi.b1': 'Construí o Design System do zero com abordagem Foundation First, criando a base que permitiu escalar a entrega de forma consistente mesmo sendo o único designer',
 'exp.multi.b2': 'Reduzi o ciclo de entrega de prototipação em 60% com um workflow de IA combinando Claude, Figma MCP e tokens do Design System',
 'exp.multi.b3': 'Implementei Design Critiques, Testes de Usabilidade, Testes A/B e Figma DEV Mode, construindo uma cultura de design de produto onde não existia nenhuma estrutura antes',
 'exp.multi.b4': 'Trabalhei simultaneamente em demandas de 6 times diferentes na empresa',
 'exp.multi.b5': 'Introduzi testes A/B, pontuação SEQ e decisões de produto baseadas em OKRs',
 'exp.multi.b6': 'Implementei o Figma DEV Mode para todos os desenvolvedores, viabilizando implementação de alta fidelidade direto dos tokens de design',
 'exp.dojo.role': 'UX Engineer',
 'exp.dojo.period': 'Jun 2022 – Dez 2023',
 'exp.dojo.desc': 'Atuei como UX Engineer liderando a criação do setor de produto. Liderei o design do Keepeye (SaaS de gestão de KPIs), conduzindo todas as camadas de design e colaborando na implementação front-end. Também criei visualizações de dados para clientes globais como Electrolux e Nidec.',
 'exp.dojo.b1': 'Liderei o desenvolvimento do Keepeye de ponta a ponta: pesquisa de UX, arquitetura de informação, UI, biblioteca de componentes e handoff, alcançando 8,8/10 de satisfação em testes profissionais. Colaborei na implementação front-end em Angular + Tailwind CSS junto com o time',
 'exp.dojo.b2': 'Criei a identidade visual e os padrões de construção de dashboards para a Electrolux, adotados primeiro na LATAM, depois aprovados pelo conselho global e implementados em toda a empresa mundialmente',
 'exp.dojo.b3': 'Conduzi sessões de Business Understanding com Analistas de Dados e Engenheiros de Dados para definir regras de dados, KPIs e estratégias de visualização',
 'exp.dojo.b4': 'Desenvolvi padrões de dashboard para a Nidec na LATAM; depois contratado diretamente pela Nidec Motor (EUA) como consultor independente',
 'exp.dojo.b5': 'Aprendi Power BI em uma semana; contribuindo com projetos reais de clientes na segunda semana',
 'exp.dojo.b6': 'Conduzi sessões de Business Understanding com Analistas de Dados e Engenheiros de Dados para definir regras de dados, KPIs e estratégias de visualização',
 'exp.e149.role': 'Designer Freelance',
 'exp.e149.period': 'Fev 2018 – Jun 2024 · paralelo',
 'exp.e149.desc': 'Atuei como freelancer em paralelo com posições full-time por 6 anos em diversos projetos. Trabalhei com produtos digitais, identidade visual, branding, fotografia e audiovisual para clientes no Brasil e nos EUA.',
 'exp.e149.b1': 'Atuei em um contrato para Nidec Motor (EUA) em projetos de Data Visualization e desenvolvimento de Dashboards',
 'exp.e149.b2': 'Desenvolvi projetos Web e Mobile para empresas de logística nos EUA',
 'exp.e149.b3': 'Construí Identidades Visuais, Websites e peças de comunicação e mídias sociais para clientes de diferentes segmentos',
 'exp.e149.b4': 'Atuei como contratado pela Nidec Motor (EUA) em projetos de visualização de dados',
 'exp.lepper.role': 'Product Designer',
 'exp.lepper.period': 'Fev 2016 – Jun 2022',
 'exp.lepper.desc': 'Seis anos em uma das maiores empresas têxteis do Brasil, com mais de 100 anos de história. Atuei no ciclo completo de produto para coleções licenciadas e originais: pesquisa, conceito, design, lançamento e acompanhamento de métricas de performance. Marcas licenciadas: Marvel, Disney, Dragon Ball (Toei Animation), Warner e PlayStation. Além disso trabalhei com separação de cores para estamparia silk screen, um processo técnico com ligação direta com a fábrica.',
 'exp.lepper.b1': 'O processo de separação de cores para estamparia rotativa e serigrafia consistia de um workflow altamente técnico e multifuncional, com atuação diária junto a times de produção, laboratórios de pigmentação, especialistas em tecidos e operadores de maquinário',
 'exp.lepper.b2': 'Criei o guia completo do processo de separação de cores e criação, adotado pela empresa para onboarding de novos designers e briefing de parceiros externos',
 'exp.lepper.b3': 'Mentorei 5 designers ao longo de 6 anos em separação de cores e padrões de design da empresa',
 'exp.lepper.b4': 'Participei de eventos de marca e convenções de vendas representando as linhas de produtos licenciados',
 'exp.lepper.b5': 'Propus uma iniciativa de embalagens sustentáveis, apresentada ao conselho pleno de diretores',
 'exp.lepper.b6': 'Gerenciei o ciclo completo de produto para coleções licenciadas e originais: pesquisa de mercado, briefing, design, acompanhamento de produção, lançamento e monitoramento de métricas de performance',
 'exp.pronto.role': 'Designer Gráfico',
 'exp.pronto.period': 'Jun 2015 – Jan 2016',
 'exp.pronto.desc': 'Atuei como Designer Gráfico em uma gráfica expressa gerenciando centenas de trabalhos por semana de fechamento de arquivos, preparação para impressão e criação gráfica. Frequentemente entregando logotipos e materiais de apoio da marca (cartão, flyer, folder, timbrado) em poucas horas.',
 'exp.pronto.b1': 'Preparei arquivos para impressão a laser e cortes especiais personalizados',
 'exp.pronto.b2': 'Desenvolvi logotipos, identidades visuais, flyers, banners e materiais de evento sob pressão de tempo',
 'exp.pronto.b3': 'Adquiri conhecimento prático em equipamentos de impressão, materiais e o processo completo de produção gráfica',
 'svc.label': 'Serviços',
 'svc.heading': 'Como posso<br />ajudar o seu time.',
 'svc.figma.name': 'Figma e Prototipação',
 'arch.label': 'Além do Product Design',
 'arch.title': 'Branding, games<br /><em>e outras histórias.</em>',
 'arch.sub': 'Uma coletânea de trabalhos criativos pessoais e freelance: branding e identidade visual, game design, fotografia e outros projetos fora do mundo de product design.',
 'arch.behance': 'Todos os projetos abaixo estão hospedados no',
 'arch.filter.all': 'Todos',
 'arch.filter.branding': 'Branding',
 'arch.filter.game': 'Game Design',
 'arch.filter.photo': 'Fotografia',
 'arch.yby.tag1': 'Branding',
 'arch.yby.tag2': 'Imobiliário',
 'arch.yby.title': 'YBY: Branding para Incorporadora Imobiliária',
 'arch.yby.desc': 'Identidade visual completa para incorporadora: estratégia visual, sistema de logo e brand guidelines.',
 'arch.taken.tag1': 'Game Design',
 'arch.taken.tag2': 'Branding',
 'arch.taken.title': 'Game Design: Taken',
 'arch.taken.desc': 'Projeto de identidade visual e game design: design de personagens, conceitos de UI e identidade de marca.',
 'arch.e149.tag1': 'Marca Pessoal',
 'arch.e149.tag2': 'Branding',
 'arch.e149.title': 'Estúdio 149: Branding Pessoal',
 'arch.e149.desc': 'Identidade de marca do estúdio pessoal: naming, logo, sistema visual e collateral para o Estúdio 149.',
 'arch.view': 'Ver no Behance',
 'arch.empty': 'Ainda não há projetos nesta categoria.',
 'arch.empty.all': 'Ver todos',
 'arch.cta.label': 'O que vem a seguir?',
 'arch.cta.heading': 'Procurando trabalhos de product design?',
 'arch.cta.sub': 'Confira meus case studies de product design ou fale comigo sobre um projeto.',
 'arch.projects': 'projetos',

 /* ── CASE STUDY CHROME ── */
 'btn.back-to-work': 'Voltar ao trabalho',
 'cs.next.case': 'Próximo Case Study',
 'cs.explore.h2': 'Explore mais <em>case studies.</em>',
 'cs.more.h2': 'Mais <em>case studies</em> em Trabalhos Selecionados.',
 'cs.electrolux.next.title': 'Keepeye: Plataforma de Gestão de KPIs.<br /><em>De planilhas a produto.</em>',

 /* ── CONTACT PAGE ── */
 'contact.available.badge': 'Disponível para novos projetos',
 'contact.page.title': 'Vamos construir algo<br /><em>que vale a pena lançar.</em>',
 'contact.page.sub': 'Seja um engajamento completo de produto, uma reformulação de design system ou um desafio estratégico de UX, adoraria ouvir sobre isso.',
 'contact.avail.status': 'Disponível agora',
 'contact.avail.desc': 'Aberto a novos projetos a partir de <strong style="color:var(--text-1);">junho de 2026</strong>, contratos e oportunidades CLT. Local (Joinville, BR) e global (remoto). Respondo em até 24h.',
 'contact.phone.label': 'Telefone / WhatsApp',
 'contact.detail.location': 'Joinville, Santa Catarina, Brasil',
 'contact.detail.remote': 'Atende remotamente clientes no Brasil e no exterior',
 'contact.detail.timezone': 'GMT-3 (BRT): sobreposição de fuso horário flexível',
 'contact.detail.languages': 'Português (nativo) · Inglês (fluente)',
 'contact.strip.heading': 'Pronto para começar a conversa?',
 'contact.strip.sub': 'Manda um e-mail, respondo em até 24-48 horas.',
 'contact.strip.btn': 'Enviar um e-mail',

 /* ── ABOUT CLOSING ── */
 'about.closing.heading': 'Vamos construir <em>algo</em> juntos.',
 'about.closing.text': 'Se você procura um Product Designer que consiga assumir um problema de ponta a ponta, da pesquisa à interface funcionando, adoraria ouvir sobre isso.',
    /* ── INDEX WORK GRID ── */
    'wi.count': '5 projetos',
    'wi.multi.type': 'Product Design · Design System',
    'wi.included.type': 'Product Design · EdTech SaaS',
    'wi.keepeye.type': 'UX Engineering · B2B SaaS',
    'wi.electrolux.type': 'Design System · Data Viz · Global',
    'wi.archive.name': 'Arquivo',
    'wi.archive.type': 'Trabalhos anteriores · Behance',

    /* ── SHARED CASE META LABELS ── */
    'cs.meta.company': 'Empresa',
    'cs.meta.role': 'Funcao',
    'cs.meta.timeline': 'Periodo',
    'cs.meta.stack': 'Stack',
    'cs.meta.platform': 'Plataforma',
    'cs.shared.outcomes.label': 'Resultados',

    /* ── MULTIPEDIDOS ── */
    'cs.multi.context.label': 'Escala',
    'cs.multi.context.h2': 'Projetando para <em>usuarios reais.</em>',
    'cs.multi.context.n1': 'Acessos mensais no Pedir.Delivery',
    'cs.multi.context.n2': 'Pedidos processados por mes',
    'cs.multi.context.n3': 'Telas desenvolvidas',
    'cs.multi.context.n4': 'Demandas de produto gerenciadas no design system',
    'cs.multi.situation.label': 'O Cenario',
    'cs.multi.mandate.label': 'O Mandato',
    'cs.multi.pullquote': 'O desafio nao era gerenciar design em escala. Era construir a infraestrutura para boas decisoes enquanto o produto continuava sendo entregue.',
    'cs.multi.ds.label': 'Design System',
    'cs.multi.ds.h2': 'Construido para <em>andar rapido</em> sem quebrar nada.',
    'cs.multi.ds.c1.h3': 'Tokens Antes de Componentes',
    'cs.multi.ds.c2.h3': 'Integracao com DEV Mode',
    'cs.multi.ds.c3.h3': 'Responsivo por Padrao',
    'cs.multi.consumer.label': 'Plataforma Consumidor',
    'cs.multi.consumer.h2': 'Desenhando o pedido, <em>do primeiro toque a entrega.</em>',
    'cs.multi.consumer.scope': 'Escopo',
    'cs.multi.funnel1.title': 'Cardapio',
    'cs.multi.funnel1.desc': 'Navegacao por categorias, cards de item, busca, info do restaurante',
    'cs.multi.funnel2.title': 'Selecao de Item',
    'cs.multi.funnel2.desc': 'Itens genericos, montagem de pizza, selecao de combo, modificadores',
    'cs.multi.funnel3.title': 'Carrinho',
    'cs.multi.funnel3.desc': 'Revisao, edicao de quantidade, preview de pontos fidelidade, CTA',
    'cs.multi.funnel4.title': 'Checkout',
    'cs.multi.funnel4.desc': 'Dados de entrega, forma de pagamento, cashback, cupons',
    'cs.multi.funnel5.title': 'Confirmacao',
    'cs.multi.funnel5.desc': 'Pedido confirmado, previsao de entrega, rastreamento de pagamento assincrono',
    'cs.multi.ed1.label': 'Fluxos de Item',
    'cs.multi.ed1.title': 'Tres Fluxos de Pedido em Um',
    'cs.multi.ed2.label': 'Conversao',
    'cs.multi.ed2.title': 'Reduzindo Abandono em Cada Etapa',
    'cs.multi.ed3.label': 'Conta &amp; Fidelidade',
    'cs.multi.ed3.title': 'Login, Conta e Sistema de Fidelidade',
    'cs.multi.txn.label': 'Fluxos Transacionais',
    'cs.multi.txn.h2': 'Responsabilidade total sobre <em>checkout e pagamento.</em>',
    'cs.multi.step1.label': 'Revisao<br />do Carrinho',
    'cs.multi.step2.label': 'Dados<br />de Entrega',
    'cs.multi.step3.label': 'Selecao<br />de Pagamento',
    'cs.multi.step4.label': 'Descontos<br />&amp; Cashback',
    'cs.multi.step5.label': 'Pedido<br />Confirmado',
    'cs.multi.step6.label': 'Rastreamento<br />de Pagamento',
    'cs.multi.pay.online': 'Pagar Online',
    'cs.multi.pay.delivery': 'Pagar na Entrega',
    'cs.multi.strip1.h4': 'Cashback &amp; Cupons',
    'cs.multi.strip2.h4': 'Tres Contextos de Entrega',
    'cs.multi.strip3.h4': 'Estados de Pagamento Assincrono <span class=\"ab-badge\">A/B</span>',
    'cs.multi.b2b.label': 'Plataforma B2B',
    'cs.multi.b2b.h2': 'Gerenciando o restaurante, <em>de ponta a ponta.</em>',
    'cs.multi.b2b.deliveries': 'Algumas Entregas',
    'cs.multi.g1.label': 'Operacoes de Cozinha',
    'cs.multi.g1.title': 'Implementacao de KDS',
    'cs.multi.g2.label': 'Gestao de Cardapio',
    'cs.multi.g2.title': 'Redesenho do Menu Builder',
    'cs.multi.g3.label': 'Ponto de Venda',
    'cs.multi.g3.title': 'Redesenho do POS',
    'cs.multi.g4.label': 'Nova Feature',
    'cs.multi.g4.title': 'Multiplos Pagadores',
    'cs.multi.g5.label': 'Integracao de Pagamento',
    'cs.multi.g5.title': 'PIX + Carteira Digital',
    'cs.multi.g6.label': 'Navegacao',
    'cs.multi.g6.title': 'Sidebar + Arquitetura da Informacao',
    'cs.multi.process.label': 'Processo',
    'cs.multi.process.h2': 'Design que conversa <em>com o time inteiro.</em>',
    'cs.multi.p1.phase': 'Alinhamento',
    'cs.multi.p1.h3': 'Design Critiques',
    'cs.multi.p2.phase': 'Validacao',
    'cs.multi.p2.h3': 'Testes de Usabilidade',
    'cs.multi.p3.phase': 'Otimizacao',
    'cs.multi.p3.h3': 'Testes A/B',
    'cs.multi.p4.phase': 'Entrega',
    'cs.multi.p4.h3': 'Handoff com IA',
    'cs.multi.ai.label': 'A Melhora de 60%',
    'cs.multi.ai.h2': 'De 5 dias<br />para <em>2 dias.</em>',
    'cs.multi.outcomes.h2': 'Impacto, <em>em numeros.</em>',
    'cs.multi.o1.label': 'Entrega de prototipos mais rapida com workflow de handoff assistido por IA',
    'cs.multi.o2.label': 'Acessos mensais no Pedir.Delivery, processando 4M+ pedidos',
    'cs.multi.o3.label': 'Telas desenvolvidas em um unico design system',
    'cs.multi.next.keepeye': 'Keepeye: Plataforma de KPI',
    'cs.multi.next.electrolux': 'Electrolux: Data Viz',
    'cs.multi.next.included': 'IncludED: EdTech SaaS',

    /* ── KEEPEYE ── */
    'cs.keepeye.biz.label': 'O Caso de Negocio',
    'cs.keepeye.user.label': 'O Problema do Usuario',
    'cs.keepeye.pullquote': 'O problema nao era a ausencia de dados. Era a ausencia de uma unica versao confiavel deles.',
    'cs.keepeye.process.label': 'Processo',
    'cs.keepeye.process.h2': 'Descoberta antes de <em>decisoes.</em>',
    'cs.keepeye.ph1': 'Fase 01 · Descoberta',
    'cs.keepeye.ph1.h3': 'Entendendo o problema de dentro para fora',
    'cs.keepeye.ph2': 'Fase 01 · Quantificacao',
    'cs.keepeye.ph2.h3': 'Validando o que ouvimos em escala',
    'cs.keepeye.ph3': 'Fase 02 · Definicao',
    'cs.keepeye.ph3.h3': 'Priorizando com RICE, nao intuicao',
    'cs.keepeye.ph4': 'Fases 03-04 · Construcao',
    'cs.keepeye.ph4.h3': 'Da arquitetura ao codigo entregue',
    'cs.keepeye.research.label': 'O Que a Pesquisa Revelou',
    'cs.keepeye.research.h2': 'Tres padroes, <em>uma oportunidade clara.</em>',
    'cs.keepeye.ed1.label': 'Fragmentacao de Dados',
    'cs.keepeye.ed1.title': 'Uma metrica, muitas versoes',
    'cs.keepeye.ed2.label': 'Lacuna de Ferramenta',
    'cs.keepeye.ed2.title': 'Feito para analistas, nao gerentes',
    'cs.keepeye.ed3.label': 'Deficit de Confianca',
    'cs.keepeye.ed3.title': 'Dados ruins geram paralisia, nao decisoes ruins',
    'cs.keepeye.product.label': 'O Produto',
    'cs.keepeye.product.h2': 'Uma plataforma. <em>Todo KPI.</em>',
    'cs.keepeye.f1.label': 'Monitoramento',
    'cs.keepeye.f1.title': 'Dashboards de KPI',
    'cs.keepeye.f2.label': 'Confianca nos Dados',
    'cs.keepeye.f2.title': 'Calculadora de Formula de Metricas',
    'cs.keepeye.f3.label': 'Configuracao',
    'cs.keepeye.f3.title': 'Gestao de KPIs e Metricas',
    'cs.keepeye.f4.label': 'Governanca',
    'cs.keepeye.f4.title': 'Area do Usuario e Controle de Acesso',
    'cs.keepeye.how.label': 'Como Trabalhei',
    'cs.keepeye.how.h2': 'Designer, desenvolvedor, <em>e mentor.</em>',
    'cs.keepeye.fullstack.label': 'Contribuicao Full-Stack',
    'cs.keepeye.mentor.label': 'Mentoria em Transicao',
    'cs.keepeye.outcomes.h2': 'O numero que importa: <em>8,8 de 10.</em>',
    'cs.keepeye.o1.label': 'Satisfacao dos usuarios em entrevistas pos-lancamento, internas e externas',
    'cs.keepeye.o2.label': 'Membros do time, incluindo uma designer mentorada em transicao de carreira',
    'cs.keepeye.next.multi': 'Multipedidos: Design System',
    'cs.keepeye.next.electrolux': 'Electrolux: Data Viz',

    /* ── INCLUDED ── */
    'cs.included.legal.label': 'O Mandato Legal',
    'cs.included.human.label': 'O Custo Humano',
    'cs.included.pullquote': 'O problema nao e a lei. O problema e que ninguem deu aos professores a infraestrutura para segui-la.',
    'cs.included.origin.label': 'Por que este projeto',
    'cs.included.origin.h2': 'Neurociencia, design, <em>e o que importa.</em>',
    'cs.included.process.label': 'Como construimos',
    'cs.included.process.h2': 'Base primeiro, <em>telas depois.</em>',
    'cs.included.s1': 'Passo 01 · Fundacao',
    'cs.included.s1.h3': 'Accio: o Design System que tornou todo o resto possivel',
    'cs.included.s2': 'Passo 02 · Pesquisa',
    'cs.included.s2.h3': 'Semanas de aprendizado estruturado antes do primeiro wireframe',
    'cs.included.s3': 'Passo 03 · Mercado',
    'cs.included.s3.h3': 'Mapeando o que existia e exatamente onde falhava',
    'cs.included.s4': 'Passo 04 · Construcao',
    'cs.included.s4.h3': 'Telas + IA, mais rapido porque a base estava pronta',
    'cs.included.rip.label': 'Pesquisa na pratica',
    'cs.included.depth.label': 'O que a pesquisa cobriu',
    'cs.included.depth.h2': 'Nao da para projetar para um dominio <em>que voce nao estudou.</em>',
    'cs.included.r1.label': 'Legislacao',
    'cs.included.r1.title': 'Lei Brasileira de Inclusao e requisitos do PEI',
    'cs.included.r2.label': 'Curriculo',
    'cs.included.r2.title': 'Arquitetura da BNCC e sua aplicacao na inclusao',
    'cs.included.r3.label': 'Realidade da Sala de Aula',
    'cs.included.r3.title': 'Como professores realmente trabalham com alunos de inclusao',
    'cs.included.r4.label': 'Lacuna Clinica',
    'cs.included.r4.title': 'O que laudos neuropsicologicos significam na sala de aula',
    'cs.included.r5.label': 'Marco Regulatorio',
    'cs.included.r5.title': 'Requisitos do AEE e supervisao institucional',
    'cs.included.exp.label': 'O que a expertise de dominio mudou',
    'cs.included.exp.h2': 'Nao da para projetar isso <em>de fora.</em>',
    'cs.included.ed1.label': 'Expertise Pedagogica',
    'cs.included.ed1.title': '20+ anos em escolas, na sala',
    'cs.included.ed2.label': 'Neuropsicologia',
    'cs.included.ed2.title': 'A lente clinica, traduzida para professores',
    'cs.included.ed3.label': 'Pesquisa de Mercado',
    'cs.included.ed3.title': 'A lacuna que o mercado confirmou',
    'cs.included.built.label': 'O que construimos',
    'cs.included.built.h2': 'Uma camada completa para <em>educacao inclusiva.</em>',
    'cs.included.m.label': 'Modulo Principal',
    'cs.included.m1.title': 'Criacao e Gestao de PEI',
    'cs.included.m2.title': 'Mapeamento de Objetivos da BNCC com IA',
    'cs.included.m3.title': 'Evolucao e Acompanhamento de Progresso do Aluno',
    'cs.included.m4.title': 'Processamento de Laudos Clinicos',
    'cs.included.m5.title': 'PAEE: Plano de Atendimento Especializado',
    'cs.included.m6.title': 'Colaboracao Multi-Perfil',
    'cs.included.ai.label': 'IA no IncludED',
    'cs.included.ai.h2': 'Nao e chatbot. <em>Oito pontos de contato.</em>',
    'cs.included.ai1.label': 'Clinico',
    'cs.included.ai1.title': 'Traducao de Laudos e OCR',
    'cs.included.ai2.label': 'Planejamento',
    'cs.included.ai2.title': 'Sugestao de Objetivos e Atividades',
    'cs.included.ai3.label': 'Sintese',
    'cs.included.ai3.title': 'Conselho de Adaptacao e Resumo do PEI',
    'cs.included.outcomes.h2': 'Em producao nas escolas, <em>crescendo rapido.</em>',
    'cs.included.o1.label': 'Do lancamento a producao ativa em escolas de varios estados brasileiros',
    'cs.included.o2.label': 'Anos combinados de expertise pedagogica e neuropsicologica guiando cada decisao de produto',
    'cs.included.o3.label': 'Pontos de contato de IA incorporados ao produto, cada um com funcao especifica e revisao humana',
    'cs.included.next.multi': 'Multipedidos: Design System',
    'cs.included.next.electrolux': 'Electrolux: Data Viz',
    'cs.included.next.keepeye': 'Keepeye: Plataforma de KPI',
    'cs.included.meta.company': 'PixelPunk<span>Co-fundada em out. 2024</span>',
    'cs.included.meta.company.root': 'PixelPunk<span>Out. 2024</span>',
    'cs.included.meta.role': 'Co-fundador<span>Lead Product Designer</span>',
    'cs.included.meta.role.root': 'Lead Product Designer',
    'cs.included.meta.timeline': 'Out. 2024 – Presente<span>Do zero ao ar</span>',
    'cs.included.meta.stack': 'Figma, BNCC<span>Acessibilidade primeiro</span>',
    'cs.included.meta.platform.sub': 'Produto em producao',

    /* ── ELECTROLUX ── */
    'cs.elec.meta.scope': 'Escopo',
    'cs.elec.n1': 'Ondas de implantacao na LATAM',
    'cs.elec.n2': 'Contextos de dashboard: Executivo, Operacional, Analitico',
    'cs.elec.n3': 'Clientes enterprise atendidos em paralelo',
    'cs.elec.n4': 'Padrao adotado mundialmente apos apresentacao ao board',
    'cs.elec.situation.label': 'O Cenario',
    'cs.elec.mandate.label': 'O Mandato',
    'cs.elec.system.label': 'O Sistema',
    'cs.elec.system.h2': 'Tres contextos, <em>uma linguagem.</em>',
    'cs.elec.dt1.title': 'Dashboard <em>Executivo</em>',
    'cs.elec.dt1.desc': 'Indicadores de alto nivel para lideranca: atingimento de metas, desempenho regional e KPIs estrategicos de relance. Projetado para baixa interacao: a primeira tela responde a pergunta principal sem precisar de drill-down.',
    'cs.elec.dt2.title': 'Dashboard <em>Operacional</em>',
    'cs.elec.dt2.desc': 'Monitoramento diario para lideres e gestores de time. Rastreia producao por periodo, eficiencia de processos e sinaliza desvios antes que virem problemas. Projetado para uso diario.',
    'cs.elec.dt3.title': 'Dashboard <em>Analitico</em>',
    'cs.elec.dt3.desc': 'Visoes aprofundadas para analistas: distribuicao de variancia, cortes multidimensionais e analise de tendencias. Projetado para exploracao, nao leitura rapida, com alto grau de interatividade.',
    'cs.elec.process.label': 'Processo',
    'cs.elec.process.h2': 'Entendimento antes de <em>construir.</em>',
    'cs.elec.ph1': 'Fase 01',
    'cs.elec.ph1.h3': 'Entendimento do Negocio',
    'cs.elec.ph2': 'Fase 02',
    'cs.elec.ph2.h3': 'Alinhamento de Dados',
    'cs.elec.ph3': 'Fase 03',
    'cs.elec.ph3.h3': 'Design de Templates',
    'cs.elec.ph4': 'Fase 04',
    'cs.elec.ph4.h3': 'Construcao e Validacao',
    'cs.elec.system2.label': 'O Que Fez Virar um Sistema',
    'cs.elec.system2.h2': 'Alem de dashboards, <em>um padrao replicavel.</em>',
    'cs.elec.d1.label': 'Entregavel',
    'cs.elec.d1.title': 'Templates de Dashboard Reutilizaveis',
    'cs.elec.d2.title': 'Manual de Visualizacao',
    'cs.elec.d3.title': 'Implantacao em 5 Ondas',
    'cs.elec.d4.label': 'Paralelo',
    'cs.elec.d4.title': 'Nidec: Mesma Metodologia',
    'cs.elec.scale.label': 'Escala e Impacto',
    'cs.elec.scale.h2': 'Da LATAM para <em>padrao global.</em>',
    'cs.elec.sp1.label': 'Implantacao LATAM',
    'cs.elec.sp1.h4': '5 ondas, multiplas areas de negocio',
    'cs.elec.sp2.label': 'Adocao Global',
    'cs.elec.sp2.h4': 'Apresentado ao board, adotado mundialmente',
    'cs.elec.sp3.label': 'Auto-Sustentavel',
    'cs.elec.sp3.h4': 'Times replicam sem precisar de designer',
    'cs.elec.outcomes.h2': 'Resultados mensuraveis, <em>padrao duradouro.</em>',
    'cs.elec.o1.label': 'Padrao adotado pela Electrolux mundialmente apos apresentacao ao board',
    'cs.elec.o2.label': 'Ondas de implantacao concluidas na LATAM, cada uma mais rapida que a anterior',
    'cs.elec.o3.label': 'Clientes atendidos em paralelo com a mesma metodologia, Electrolux e Nidec',

 }
 };

 /* ── ENGINE ────────────────────────────────────────────── */
 function getLang() {
 try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch(e) { return 'en'; }
 }

 function setLang(lang) {
 try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
 applyLang(lang);
 document.documentElement.lang = lang;
 document.querySelectorAll('.lang-btn').forEach(function(btn) {
 btn.classList.toggle('active', btn.dataset.lang === lang);
 });
 }

 function applyLang(lang) {
 var dict = T[lang] || T.en;
 document.querySelectorAll('[data-i18n]').forEach(function(el) {
 var key = el.getAttribute('data-i18n');
 if (dict[key] !== undefined) el.textContent = dict[key];
 });
 document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
 var key = el.getAttribute('data-i18n-html');
 if (dict[key] !== undefined) el.innerHTML = dict[key];
 });
 }


 /* FLAG SVGs - inline, no external dependency */
 var FLAG_US = '<svg width="18" height="13" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg" class="lang-flag" aria-hidden="true"><rect width="18" height="13" fill="#B22234"/><rect y="1" width="18" height="1" fill="#fff"/><rect y="3" width="18" height="1" fill="#fff"/><rect y="5" width="18" height="1" fill="#fff"/><rect y="7" width="18" height="1" fill="#fff"/><rect y="9" width="18" height="1" fill="#fff"/><rect y="11" width="18" height="1" fill="#fff"/><rect width="7" height="7" fill="#3C3B6E"/></svg>';
 var FLAG_BR = '<svg width="18" height="13" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg" class="lang-flag" aria-hidden="true"><rect width="18" height="13" fill="#009C3B"/><polygon points="9,1 17.2,6.5 9,12 0.8,6.5" fill="#FFDF00"/><circle cx="9" cy="6.5" r="2.9" fill="#002776"/><rect x="5.3" y="6.1" width="7.4" height="0.8" rx="0.4" fill="#fff"/></svg>';

 var FLAGS = { en: FLAG_US, pt: FLAG_BR };
 var LANG_LABELS = { en: 'English', pt: 'Português' };
 var LANG_CODES = { en: 'EN', pt: 'PT' };

 /* SWITCHER UI */
 function buildToggleBtn(lang) {
 return FLAGS[lang] +
 '<span class="lang-code">' + LANG_CODES[lang] + '</span>' +
 '<svg class="lang-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 }

 function updateDropdownActive(dropdown, lang) {
 dropdown.querySelectorAll('.lang-option').forEach(function(opt) {
 var isActive = opt.dataset.lang === lang;
 opt.classList.toggle('active', isActive);
 opt.setAttribute('aria-selected', String(isActive));
 });
 }

 function injectSwitcher() {
 var navRight = document.querySelector('.nav-right');
 if (!navRight) return;
 if (navRight.querySelector('.lang-switcher')) return;

 var switcher = document.createElement('div');
 switcher.className = 'lang-switcher';

 var toggleBtn = document.createElement('button');
 toggleBtn.className = 'lang-toggle-btn';
 toggleBtn.setAttribute('aria-haspopup', 'listbox');
 toggleBtn.setAttribute('aria-expanded', 'false');
 toggleBtn.setAttribute('aria-label', 'Select language');
 toggleBtn.innerHTML = buildToggleBtn(getLang());

 var dropdown = document.createElement('div');
 dropdown.className = 'lang-dropdown';
 dropdown.setAttribute('role', 'listbox');
 dropdown.hidden = true;

 ['en', 'pt'].forEach(function(code) {
 var opt = document.createElement('button');
 opt.className = 'lang-option';
 opt.setAttribute('role', 'option');
 opt.dataset.lang = code;
 opt.innerHTML =
 FLAGS[code] +
 '<span class="lang-option-label">' + LANG_LABELS[code] + '</span>' +
 '<svg class="lang-check" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 dropdown.appendChild(opt);
 });

 switcher.appendChild(toggleBtn);
 switcher.appendChild(dropdown);

 toggleBtn.addEventListener('click', function(e) {
 e.stopPropagation();
 var open = !dropdown.hidden;
 dropdown.hidden = open;
 toggleBtn.setAttribute('aria-expanded', String(!open));
 });

 dropdown.addEventListener('click', function(e) {
 var opt = e.target.closest('.lang-option');
 if (!opt) return;
 var lang = opt.dataset.lang;
 setLang(lang);
 toggleBtn.innerHTML = buildToggleBtn(lang);
 updateDropdownActive(dropdown, lang);
 dropdown.hidden = true;
 toggleBtn.setAttribute('aria-expanded', 'false');
 });

 document.addEventListener('click', function() {
 dropdown.hidden = true;
 toggleBtn.setAttribute('aria-expanded', 'false');
 });

 switcher.addEventListener('keydown', function(e) {
 if (e.key === 'Escape') {
 dropdown.hidden = true;
 toggleBtn.setAttribute('aria-expanded', 'false');
 toggleBtn.focus();
 }
 });

 updateDropdownActive(dropdown, getLang());

 var contact = navRight.querySelector('.nav-cta');
 if (contact) navRight.insertBefore(switcher, contact);
 else navRight.appendChild(switcher);
 }

 /* INIT */
 document.addEventListener('DOMContentLoaded', function() {
 injectSwitcher();
 setLang(getLang());
 });

 window.__i18n = { setLang: setLang, getLang: getLang };
})();
