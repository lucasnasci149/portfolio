/* ═══════════════════════════════════════════════════════════════
   i18n: EN / PT-BR

   Translations are embedded (not fetched) so the site also works
   when opened locally via file:// for preview.

   Usage in HTML:
     data-i18n="key"                → replaces textContent
     data-i18n-html="key"           → replaces innerHTML (allows <em>, <br>)
     data-i18n-attr="attr:key,..."  → replaces attributes

   English stays in the HTML as the source of truth: any element
   without a matching PT key simply keeps its original text.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var PT = {
    /* ── Navigation and chrome ── */
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'nav.email_sub': 'Enviar mensagem',
    'nav.linkedin_sub': 'Abrir perfil',
    'nav.resume': 'Currículo',
    'nav.resume_sub': 'Baixar PDF',
    'nav.resume_pdf': 'Currículo PDF',
    'nav.menu_open': 'Abrir menu',
    'nav.menu_close': 'Fechar menu',
    'nav.back_to_top': 'Voltar ao topo',
    'nav.lang_label': 'Selecionar idioma',
    'nav.lang_en': 'Inglês',
    'nav.lang_pt': 'Português',

    /* ── Case studies: shared ── */
    'case.takeaway': 'O que fica',
    'case.more': 'Mais trabalhos',
    'case.card.mp.desc': 'Senior Product Designer em uma plataforma de food tech com mais de 4M de pedidos por mês. Design system, produto consumer e fluxos assistidos por IA.',
    'case.card.mp.meta': 'Product Design · Food Tech',
    'case.card.kp.desc': 'Plataforma de gestão de KPIs para a Dojo Smart Ways. Único UX Engineer: desenhei o produto inteiro e construí os componentes em Angular.',
    'case.card.kp.meta': 'UX Engineering · B2B SaaS',
    'case.card.inc.desc': 'Co-fundador e Lead Product Designer na PixelPunk. Construí uma plataforma SaaS de educação inclusiva do zero aos primeiros clientes pagantes.',
    'case.card.inc.meta': 'Product Design · EdTech SaaS',
    'case.card.elx.desc': 'Identidade visual de dashboards e design system para mercados globais, via Dojo Smart Ways.',
    'case.card.elx.meta': 'Data Viz · Design System',

    /* ── Home: hero ── */
    'hero.headline': '11 anos transformando<br />problemas complexos em<br />experiências que <em>funcionam.</em>',
    'hero.sub': 'Lead Product Designer entre estratégia, UX e código. De produtos do zero a design systems corporativos, com IA no processo.',

    /* ── Home: work grid ── */
    'index.label': 'Trabalhos selecionados',
    'work.multipedidos.type': 'Product Design · Design System',
    'work.included.type': 'Product Design · EdTech SaaS',
    'work.keepeye.type': 'UX Engineering · B2B SaaS',
    'work.electrolux.type': 'Design System · Data Viz · Global',
    'work.archives.name': 'Arquivo',
    'work.archives.type': 'Trabalhos anteriores · Projetos diversos',

    /* ── Archives ── */
    'arch.title': 'Branding, games<br /><em>e outras histórias.</em>',
    'arch.intro': 'Trabalhos pessoais e freelance: branding, identidade visual, game design e outros projetos fora do mundo de product design. Todos hospedados no Behance.',
    'arch.yby.meta': 'Branding · Mercado Imobiliário · 2024',
    'arch.taken.meta': 'Game Design · Branding · 2023',
    'arch.estudio.meta': 'Marca Pessoal · 2018',
    'arch.empty': 'Nenhum projeto nesta categoria.',
    'arch.viewall': 'Ver todos',
    'arch.cta.title': 'Procurando trabalhos de product design?',
    'arch.cta.sub': 'Dá uma olhada nos meus case studies, ou fala comigo sobre um projeto.',
    'arch.cta.work': 'Ver trabalhos selecionados',
    'arch.cta.contact': 'Entrar em contato',

    /* ── Contact ── */
    'ct.badge': 'Disponível para novos projetos',
    'ct.title': 'Vamos construir algo<br /><em>que valha a pena.</em>',
    'ct.intro': 'Seja um projeto de produto completo, a reformulação de um design system ou um desafio estratégico de UX, vou adorar ouvir sobre.',
    'ct.avail.label': 'Disponível atualmente',
    'ct.avail.text': 'Aberto a novos projetos a partir de <strong>junho de 2026</strong>, tanto contrato quanto CLT. Local (Joinville, SC) e global (remoto). Costumo responder em até 24h.',
    'ct.phone': 'Telefone / WhatsApp',
    'ct.cv': 'Baixar CV',
    'ct.loc': 'Joinville, Santa Catarina, Brasil',
    'ct.remote': 'Trabalho remoto com clientes globais',
    'ct.tz': 'GMT-3 (BRT): flexível para outros fusos',
    'ct.langs': 'Português (nativo) · Inglês (fluente)',
    'ct.cta.title': 'Pronto para começar a conversa?',
    'ct.cta.sub': 'Me manda um email, respondo em 24 a 48 horas.',
    'ct.cta.btn': 'Enviar um email',

    /* ── About: hero and intro ── */
    'ab.hero.role': '<strong>Lead Product Designer</strong>, músico e sempre um contador de histórias.',
    'ab.hero.sub': 'Desenho produtos digitais de ponta a ponta, da pesquisa até a interface e o código. Fora do trabalho, música e narrativa são hábitos silenciosos que moldam meu jeito de pensar ritmo e estrutura no design.',
    'ab.intro.title': 'Product Designer,<br /><em>Músico e Storyteller.</em>',
    'ab.intro.subtitle': 'Músico e Storyteller.',
    'ab.intro.label': '...um pouco mais sobre mim',
    'ab.intro.p1': 'Sou designer há <strong>mais de 11 anos</strong>, passando por diversas áreas: Product Design, Visualização de Dados, Branding, Front-End, Audiovisual, Design Systems e outras. Busco sempre juntar conhecimentos que ajudam a tomar decisões mais completas e holísticas no meu processo de Design.',
    'ab.intro.p2': 'Boa parte da minha carreira consistiu em passar por empresas sem (ou com pouca) estrutura de design e construir do zero seus <strong>sistemas e cultura</strong>, que continuam funcionando. Foram três setores de Product Design construídos do zero, Design Systems adotados globalmente e uma empresa de desenvolvimento de software que co-fundei, com o primeiro produto já rodando em escolas pelo Brasil.',
    'ab.intro.p3': 'Para mim, Design é sobre <strong>contar histórias e levar mensagens</strong>: a narrativa de um produto, um dashboard que torna milhões de dados legíveis, um sistema que liga times distantes com uma linguagem em comum. É o mesmo fio que atravessa minha música, meus cases e o jeito como conduzo meu processo.',

    /* ── About: facets ── */
    'ab.imA.designer': 'Sou <em>designer.</em>',
    'ab.imA.musician': 'Sou <em>músico.</em>',
    'ab.imA.storyteller': 'Sou <em>storyteller.</em>',
    'ab.facet.designer': 'É onde passo a maior parte das minhas horas e da minha curiosidade. Gosto de pensar <strong>sistemas antes de telas</strong>: a lógica, os padrões que fazem um produto se manter coerente conforme cresce, os modos de comunicar mensagens e resolver problemas. Entender as dores dos usuários e criar soluções que melhoram a vida deles é o que me motiva todos os dias.',
    'ab.facet.musician': 'Música está comigo há mais da metade da minha vida. Tem algo em praticar um instrumento, a paciência, a repetição, o jeito de se comunicar, que conversa muito com o designer em mim. Sempre tem alguma música tocando por perto, a qualquer hora do dia.',
    'ab.facet.storyteller': 'Um produto, uma música, uma foto, uma marca ou uma conversa: estou sempre atrás da história por trás. Contar histórias é o jeito que uso para andar pelo mundo e para me conectar com as pessoas. Sempre fui fisgado por entender a história de cada um e por encontrar formas de mostrá-la.',

    /* ── About: hobbies ── */
    'ab.hob.travel': 'Planejador profissional de viagens. Taxa de execução: mais ou menos 1 a cada 10.',
    'ab.hob.food': 'Dono do melhor carbonara da minha rua (até segunda ordem).',
    'ab.hob.games': 'Contando histórias com jogos desde que me conheço por gente.',
    'ab.hob.camera': 'Frequentemente avistado atrás de uma câmera, documentando em silêncio coisas que ninguém pediu.',
    'ab.hob.festival': 'Se não estou em casa, tem boa chance de eu estar em algum festival.',
    'ab.hob.music': 'Sou músico há mais da metade da minha vida. Começou como hábito e nunca parou.',
    'ab.hob.community': 'Parte ativa da cena local de música e audiovisual, para o bem ou para o mal.',
    'ab.hob.audio': 'Sempre buscando formas de conectar fotografia, música e design.',
    'ab.hob.frame': 'Sempre procurando outro ângulo no comum, um quadro por vez.',
    'ab.hob.compose': 'Compondo, escrevendo e passando um tempo irracional pensando sobre tempo.',
    'ab.hob.arch': 'Fã de arquitetura. Do tipo que anda devagar na frente de prédios que os outros passam correndo.',
    'ab.hob.medieval': 'Sinceramente obcecado por cultura medieval, história e toda a estética daquela era.',

    /* ── About: section titles ── */
    'ab.exp.title': 'Onde construí,<br /><em>liderei e entreguei.</em>',
    'ab.svc.title': 'Como posso<br /><em>ajudar seu time.</em>',
    'ab.cta.title': 'Vamos construir<br /><em>algo</em> juntos.',
    'ab.cta.sub': 'Se você procura um Product Designer capaz de assumir um problema de ponta a ponta, da pesquisa a uma interface funcionando, vou adorar ouvir sobre.',
    'ab.cta.btn1': 'Entrar em contato',
    'ab.cta.btn2': 'Ver meu trabalho',

    /* ── About: section labels, roles and dates ── */
    'ab.exp.label': 'Experiência',
    'ab.svc.label': 'Serviços',
    'ab.exp.pixelpunk.role': 'Co-fundador e Lead Product Designer <span class="exp-current"><span aria-hidden="true">●</span> Atual</span>',
    'ab.exp.pixelpunk.date': 'Out 2024 – Atual',
    'ab.exp.multi.role': 'Senior Product Designer',
    'ab.exp.multi.date': 'Jan 2024 – Jun 2026',
    'ab.exp.dojo.role': 'UX Engineer',
    'ab.exp.dojo.date': 'Jun 2022 – Dez 2023',
    'ab.exp.estudio.role': 'Designer Freelance',
    'ab.exp.estudio.date': 'Fev 2018 – Jun 2024 · paralelo',
    'ab.exp.lepper.role': 'Product Designer',
    'ab.exp.lepper.date': 'Fev 2016 – Jun 2022',
    'ab.exp.pronto.role': 'Designer Gráfico',
    'ab.exp.pronto.date': 'Jun 2015 – Jan 2016',

    /* ── About: service titles ── */
    'ab.svc.figma.title': 'Figma: sistemas e protótipos',
    'ab.svc.ai.title': 'Design com IA',
    'ab.svc.research.title': 'Pesquisa e estratégia de UX',
    'ab.svc.product.title': 'Product Design (ponta a ponta)',
    'ab.svc.ds.title': 'Design Systems',
    'ab.svc.dataviz.title': 'Visualização de dados',

    /* ── About: experience bullets ── */
    'ab.b1': 'Construí o Design System antes das telas, garantindo consistência desde o primeiro dia',
    'ab.b2': 'Desenhei todos os fluxos com acessibilidade como requisito, não como funcionalidade extra',
    'ab.b3': 'Criei o branding completo do IncludED: logo, identidade visual e materiais de apoio',
    'ab.b4': 'Usei IA ao longo do processo para prototipar e gerar documentação mais rápido',
    'ab.b5': 'Criei o Design System da empresa: mais de 40 demandas e 1.000 telas responsivas para mobile e web',
    'ab.b6': 'Reduzi a entrega de protótipos de 5 para 2 dias (60% mais rápido) com prototipação assistida por IA usando Claude, MCP e os tokens do design system',
    'ab.b7': 'Implementei Design Critiques com devs, QA, CX, comercial e diretoria, alinhando todo mundo antes de entregar',
    'ab.b8': 'Trouxe testes de usabilidade e critiques com clientes externos para dentro do processo',
    'ab.b9': 'Introduzi testes A/B, avaliação SEQ e decisões de produto guiadas por OKRs',
    'ab.b10': 'Implementei o Figma DEV Mode para todos os devs, permitindo implementação fiel direto dos tokens',
    'ab.b11': 'Liderei o design do Keepeye de ponta a ponta: pesquisa, arquitetura da informação, UI, biblioteca de componentes e handoff, com nota 8,2/10 nos testes de usabilidade. Também colaborei na implementação front-end em Angular e Tailwind junto ao time',
    'ab.b12': 'Criei a identidade visual e o padrão de construção de dashboards da Electrolux, adotado primeiro na LATAM e depois aprovado pelo board global para toda a empresa',
    'ab.b13': 'Criei o branding e a identidade visual do Keepeye: logo, diretrizes de marca e linguagem visual do produto',
    'ab.b14': 'Desenvolvi padrões de dashboard para a Nidec na LATAM e depois fui contratado direto pela Nidec Motor (EUA) como consultor independente',
    'ab.b15': 'Aprendi Power BI em uma semana e já estava em projetos reais de cliente na segunda',
    'ab.b16': 'Conduzi sessões de Business Understanding com analistas e engenheiros de dados para definir regras, KPIs e estratégias de visualização',
    'ab.b17': 'Desenhei e desenvolvi produtos digitais e aplicações web de ponta a ponta',
    'ab.b18': 'Criei identidades de marca e sistemas visuais para clientes variados',
    'ab.b19': 'Produzi fotografia de lifestyle, produto e eventos, além de trabalhos audiovisuais',
    'ab.b20': 'Atuei como contratado da Nidec Motor (EUA) em projetos de visualização de dados',
    'ab.b21': 'Cuidei do ciclo completo do produto: da pesquisa de mercado e do briefing de conceito até o design, o acompanhamento da produção, o lançamento e o desempenho da coleção',
    'ab.b22': 'Dominei a separação de cores para estamparia rotativa e serigrafia, um processo técnico e cross-functional em que decisões de design tinham consequência direta no chão de fábrica, e onde um erro custava centenas em regravação',
    'ab.b23': 'Criei o "Manual da Criação", guia oficial do processo de criação e separação de cores, adotado por toda a empresa no onboarding de designers e no briefing de parceiros externos. Foi minha primeira experiência criando documentação feita para durar mais que minha passagem pelo cargo',
    'ab.b24': 'Mentorei 5 designers ao longo de 6 anos em separação de cores e nos padrões de design da empresa',
    'ab.b25': 'Propus uma iniciativa de embalagem sustentável, apresentada à diretoria completa',
    'ab.b26': 'Participei de eventos de marca e convenções de vendas representando as linhas licenciadas',
    'ab.b27': 'Preparei arquivos para offset, serigrafia, laser e facas especiais de corte',
    'ab.b28': 'Desenvolvi logotipos, identidades visuais, flyers, banners e materiais de evento sob prazos apertadíssimos',
    'ab.b29': 'Ganhei conhecimento prático de equipamentos, materiais e de todo o processo de produção gráfica',

    /* ── About: experience ── */
    'ab.exp.pixelpunk.desc': 'Co-fundei uma software house com dois sócios e montei todo o ecossistema de design do zero. Liderei o design da IncludED de ponta a ponta, um SaaS alinhado à BNCC para criar e gerir PEIs (Planos Educacionais Individualizados) de alunos de inclusão. Foi construído lado a lado com uma neuropsicóloga e uma consultora pedagógica que somam mais de 20 anos dentro de escolas. Hoje já roda em escolas pelo Brasil.',
    'ab.exp.multi.desc': 'Único designer de uma empresa de food-tech com dois produtos: o Gestor de Pedidos, que os restaurantes usam para tocar a operação, e o Pedir.Delivery, o cardápio online com mais de 10M de acessos e 4M de pedidos por mês. Entrei como freelancer pelo Estúdio 149 em janeiro de 2024 e virei contratado fixo em junho. Construí o setor de product design do zero e coloquei design dentro do fluxo de engenharia.',
    'ab.exp.dojo.desc': 'Entrei como primeiro product designer da empresa e construí o setor do zero. Liderei o design do Keepeye, um SaaS de gestão de KPIs, em um time pequeno: dois desenvolvedores e uma dev front-end em transição para UX/UI. Cuidei de todas as camadas de design e ainda ajudei na implementação front-end em Angular e Tailwind. Também cuidei da visualização de dados para clientes globais como Electrolux e Nidec.',
    'ab.exp.estudio.desc': 'Estúdio independente que rodou em paralelo aos trabalhos fixos. Passou por produtos digitais, identidades visuais, branding, fotografia e audiovisual para clientes locais e de fora, incluindo o freelance que acabou virando o contrato com a Multipedidos.',
    'ab.exp.lepper.desc': 'Seis anos em uma das maiores têxteis do Brasil, fundada em 1907, cuidando do ciclo completo de produto para coleções licenciadas e próprias. Entre as licenças: Marvel, Disney, Dragon Ball (Toei), Warner e PlayStation. Um ambiente cheio de restrições e de gente de todas as áreas, onde uma decisão de design chegava direto no chão de fábrica. Foi ali que entendi na prática o que é entregar um produto do começo ao fim.',
    'ab.exp.pronto.desc': 'Primeiro trabalho, numa gráfica expressa de ritmo acelerado. Passavam centenas de jobs por semana pelas minhas mãos entre fechamento de arquivo, preparação para impressão e criação. Muita logo entregue em menos de uma hora e kit completo de evento (cartão, flyer e folder) em duas.',

    /* ── About: services ── */
    'ab.svc.figma.desc': 'Figma usado como plataforma de design system, não só como prancheta. Variáveis, tokens, dev mode, componentes complexos e protótipos interativos que os devs realmente conseguem usar.',
    'ab.svc.ai.desc': 'IA e Vibe Coding como parte do processo: da síntese de pesquisa e da documentação de handoff até protótipos funcionais com Claude e Lovable. Mais velocidade, sem abrir mão da qualidade.',
    'ab.svc.research.desc': 'Discovery, entrevistas, jobs-to-be-done, análise de concorrentes e a tradução de tudo isso em uma estratégia de produto que os stakeholders comprem junto.',
    'ab.svc.product.desc': 'Arquitetura da informação, design de interação e protótipos de baixa a alta fidelidade, equilibrando o que o usuário precisa, o que o negócio quer e o que dá para construir.',
    'ab.svc.ds.desc': 'Bibliotecas de componentes e design tokens que aproximam design e engenharia, cortando inconsistência, retrabalho e atrito na entrega entre os times.',
    'ab.svc.dataviz.desc': 'Dashboards e produtos de dados que deixam informação complexa fácil de ler e de agir em cima, juntando UX, ferramentas de visualização e narrativa com dados.',

    /* ── Case study: Keepeye ── */
    'kp.1': 'Case Study',
    'kp.2': 'Keepeye<br /><em>Plataforma de Gestão de KPIs</em>',
    'kp.3': 'A Dojo vivia de projeto em projeto e queria um produto próprio. Conduzi a pesquisa, desenhei a plataforma, escrevi parte do front-end em Angular e mentorei uma desenvolvedora em transição para design. Os testes de usabilidade da ferramenta pronta deram nota 8,2 de 10.',
    'kp.4': 'Empresa',
    'kp.5': 'Dojo Smart Ways<span>Produto interno · SaaS</span>',
    'kp.6': 'Papel',
    'kp.7': 'UX Engineer<span>Design + Front-End</span>',
    'kp.8': 'Período',
    'kp.9': '2023<span>Construído do zero</span>',
    'kp.10': 'Stack',
    'kp.11': 'Figma, Angular<span>Tailwind CSS</span>',
    'kp.12': 'Contexto',
    'kp.13': 'Uma consultoria apostando no <em>seu primeiro produto.</em>',
    'kp.14': 'O caso de negócio',
    'kp.15': 'A Dojo Smart Ways vivia inteiramente de projetos: quando um projeto acabava, a receita parava junto. O objetivo do Keepeye era claro: criar o primeiro produto da empresa e tirar o foco de projetos de dados para produtos.',
    'kp.16': 'E havia um candidato: uma ferramenta interna de métricas que a Dojo já tinha construído para um projeto de cliente, e à qual os usuários respondiam bem.',
    'kp.17': 'O problema do usuário',
    'kp.18': 'As empresas com quem conversamos não tinham um lugar único para olhar seus KPIs. Planilhas de Excel, Google Sheets e dashboards de Power BI espalhados, cada um mantido por um time, cada um calculando a mesma métrica do seu jeito.',
    'kp.19': 'Quando a liderança pedia um número, a resposta dependia de para quem se perguntava. As pessoas passavam reuniões inteiras reconciliando relatórios em vez de agir sobre eles.',
    'kp.20': 'Todo mundo tinha os dados. <em>Ninguém confiava na própria versão deles.</em>',
    'kp.21': 'Os objetivos',
    'kp.22': 'Dois objetivos definidos <em>antes de qualquer tela.</em>',
    'kp.23': 'Criar o primeiro produto da empresa',
    'kp.24': 'Construir uma solução capaz de atrair novos clientes e mudar o foco da Dojo de projetos de dados para produtos, abrindo uma linha de receita recorrente ao lado do trabalho por projeto.',
    'kp.25': 'Automatizar os dados',
    'kp.26': 'Substituir o preenchimento manual por uma plataforma robusta e fácil de usar: entradas mais seguras, métricas automatizadas e um dia melhor para quem cuida delas.',
    'kp.27': 'O processo',
    'kp.28': 'Um Duplo Diamante, <em>quatro etapas.</em>',
    'kp.29': 'Descobrir',
    'kp.30': 'Brainstorming com a diretoria<br>Proto-personas<br>Benchmarking de mercado<br>Survey com mais de 40 profissionais<br>Entrevistas + testes de usabilidade',
    'kp.31': 'Definir',
    'kp.32': 'Jornada do usuário<br>Nuvem de palavras<br>UX Canvas<br>Priorização RICE',
    'kp.33': 'Desenvolver',
    'kp.34': 'Design system Blue Squid<br>Wireframes<br>Baixa a alta fidelidade<br>Identidade visual<br>Build em Angular + Tailwind',
    'kp.35': 'Entregar',
    'kp.36': 'Lançamento do MVP<br>Testes de usabilidade<br>Monitoramento de métricas<br>Feedback + roadmap',
    'kp.37': '01 · Descobrir',
    'kp.38': 'Ouvindo quem <em>vive de KPIs.</em>',
    'kp.39': 'Entendendo o problema por dentro',
    'kp.40': 'A ferramenta que já existia era um ponto de partida, não uma resposta. O discovery começou com sessões de brainstorming envolvendo o time de desenvolvimento e a diretoria da Dojo, conectando o que o negócio esperava às dores que o produto precisava resolver. O quadro registrou objetivos, reclamações de clientes e as funcionalidades que as pessoas esperavam, tudo antes de existir uma única tela.',
    'kp.41': 'Brainstorming',
    'kp.42': 'Benchmarking',
    'kp.43': '↑ O quadro de brainstorming com o time de desenvolvimento e a diretoria da Dojo: objetivos, dores e expectativas',
    'kp.44': 'Dando rosto ao usuário',
    'kp.45': 'Com os valores do produto definidos, as proto-personas mostraram para quem estávamos desenhando: engenheiros de produção que viraram gestores, analistas que vivem dentro de planilhas. Elas mantiveram a base de usuários concreta para todo o time em cada decisão seguinte.',
    'kp.46': 'Proto-personas',
    'kp.47': '↑ Proto-personas construídas a partir das sessões de discovery',
    'kp.48': 'Valores do produto definidos nos brainstormings',
    'kp.49': 'agregar',
    'kp.50': 'valor, propósito e praticidade',
    'kp.51': 'conectar',
    'kp.52': 'pessoas, dados e metas',
    'kp.53': 'simplificar',
    'kp.54': 'o dia a dia em torno das métricas',
    'kp.55': 'Validando em escala o que ouvimos',
    'kp.56': 'Entrevistas trazem profundidade, mas podem enganar. Por isso enviamos um survey para mais de 40 profissionais que usam ferramentas de métricas no dia a dia, perguntando sobre seus métodos de gestão, as plataformas atuais e onde elas falhavam. Depois rodamos entrevistas e testes de usabilidade na ferramenta existente, vendo usuários reais esbarrarem exatamente nas paredes que o survey descrevia.',
    'kp.57': 'Survey',
    'kp.58': 'Teste de usabilidade',
    'kp.59': '↑ Entrevista e teste de usabilidade na ferramenta de KPIs existente, feitos remotamente com usuários reais',
    'kp.60': 'Descobrir · O que aprendemos',
    'kp.61': 'Três descobertas que <em>redefiniram o produto.</em>',
    'kp.62': 'Uma métrica, várias versões',
    'kp.63': 'A descoberta mais consistente: o mesmo KPI produzia números diferentes conforme o sistema ou a exportação de onde vinha. Não porque as fórmulas fossem diferentes, mas porque os dados por baixo nunca eram os mesmos. A inconsistência era estrutural.',
    'kp.64': 'Feito para analistas, não para gestores',
    'kp.65': 'A maioria das ferramentas de KPI exigia configuração técnica ou um analista para gerar um dashboard utilizável. Ou seja, o gestor que precisava do número dependia de outra pessoa para ter a visão. A brecha era uma ferramenta que o próprio gestor pudesse operar, sem SQL e sem especialista em BI.',
    'kp.66': 'Dado ruim gera paralisia, não decisão errada',
    'kp.67': 'Quando o profissional não confia em um número, ele não age, ele investiga. Reuniões viram sessões de reconciliação e as decisões esperam. Isso redefiniu o que estávamos construindo: não um dashboard mais bonito, mas uma fonte única de verdade. A calculadora de fórmulas nasceu direto dessa descoberta.',
    'kp.68': '02 · Definir',
    'kp.69': 'Transformando pesquisa <em>em decisões.</em>',
    'kp.70': 'Jornada do usuário',
    'kp.71': 'Durante os testes de usabilidade mapeamos cada passo e cada interação do usuário com a ferramenta, do início ao fim. A jornada mostrou não só onde as pessoas travavam, mas onde o produto as perdia de vez.',
    'kp.72': 'Nuvem de palavras',
    'kp.73': 'As respostas quantitativas foram destiladas em uma nuvem de palavras que evidenciou as dores e necessidades mais repetidas. Ela manteve os maiores problemas à vista do time, em vez de enterrados numa planilha.',
    'kp.74': 'UX Canvas',
    'kp.75': 'Com os problemas entendidos, consolidei tudo em um UX Canvas: um documento dizendo o que a experiência do produto precisava entregar. Toda decisão posterior foi checada contra ele.',
    'kp.76': 'Priorização RICE',
    'kp.77': 'Com as soluções esboçadas e o esforço de desenvolvimento estimado, a matriz RICE ordenou as prioridades de forma analítica em vez de intuitiva. Com quatro pessoas e uma janela fixa, foi ela que definiu o que entrava e o que ficava de fora do MVP.',
    'kp.78': '03 · Desenvolver',
    'kp.79': 'Primeiro um design system, <em>depois cada tela.</em>',
    'kp.80': 'O desenvolvimento começou pelo Blue Squid, um design system criado para padronizar componentes e carregar uma identidade visual que os produtos futuros da Dojo pudessem herdar. Com o sistema e a arquitetura da informação definidos, desenhei os wireframes de todas as telas do produto.',
    'kp.81': 'As telas passaram de baixa para média e depois alta fidelidade, validadas a cada etapa. A marca se apoiou em três pilares: segurança, robustez e simplicidade. Construí os componentes e as telas em TypeScript, Angular e Tailwind, e lançamos o MVP para uso real.',
    'kp.82': '↑ Wireframes cobrindo todas as telas, desenhados sobre o Blue Squid e a arquitetura da informação',
    'kp.83': '↑ Componentes do Blue Squid, depois implementados em TypeScript, Angular e Tailwind',
    'kp.84': '03 · Desenvolver · Identidade visual',
    'kp.85': 'Uma marca construída sobre três pilares',
    'kp.86': 'A construção do logotipo partiu dos pilares conceituais definidos para a marca: segurança e robustez na forma como o produto se apresenta, alinhadas à simplicidade que a ferramenta oferece ao usuário. A identidade atravessa todas as telas, a começar pelo login.',
    'kp.87': '↑ A tela de login carregando a nova identidade',
    'kp.88': 'A solução',
    'kp.89': 'Quatro funcionalidades, <em>cada uma ligada a uma descoberta.</em>',
    'kp.90': 'O exercício de RICE moldou o conjunto de funcionalidades diretamente. O que pontuou mais alto nem sempre foi o esperado, mas a pesquisa apontava sempre para as mesmas necessidades: centralização, consistência de fórmulas e autonomia do gestor.',
    'kp.91': 'Monitoramento',
    'kp.92': 'Dashboards de KPIs',
    'kp.93': 'Todos os KPIs ativos em uma visão: status, tendência e meta. A primeira tela responde "como estamos?" sem exigir um clique. O detalhamento existe, mas o resumo se sustenta sozinho.',
    'kp.94': 'Confiança nos dados',
    'kp.95': 'Calculadora de fórmulas',
    'kp.96': 'A funcionalidade mais bem pontuada no RICE e a que atacou o déficit de confiança de frente. Cada métrica se conecta a uma fonte de dados centralizada com uma única fórmula, então todo departamento lê o mesmo número. Sem exportações divergentes, sem planilhas paralelas.',
    'kp.97': 'Configuração',
    'kp.98': 'Gestão de KPIs e métricas',
    'kp.99': 'Criar, editar, categorizar e ligar KPIs às métricas que os alimentam. A pesquisa mostrou que os times acompanham de 15 a 40 KPIs ativos, cada um com responsável, cadência e fonte diferentes. A tela de gestão precisava absorver essa complexidade sem virar uma planilha.',
    'kp.100': 'Governança',
    'kp.101': 'Área do usuário e controle de acesso',
    'kp.102': 'Alguns usuários configuram, outros monitoram, outros só leem. Papéis, permissões e escopo de dados definem quem vê métricas de chão de fábrica e quem vê o resultado consolidado. A definição de papéis veio cedo e moldou a hierarquia de informação de todo o produto.',
    'kp.103': '↑ Telas de alta fidelidade do produto entregue: dashboards, gestão de métricas e área do usuário',
    'kp.104': '↑ Telas centrais do MVP: home com opções de KPI, dashboards, gestão de métricas e área do usuário',
    'kp.105': 'O papel',
    'kp.106': 'Fiquei até <em>a implementação.</em>',
    'kp.107': 'UX Engineering',
    'kp.108': 'Depois do handoff entrei na construção como desenvolvedor front-end, escrevendo os componentes do design system e as telas em TypeScript, Angular e Tailwind junto ao time. Desenhar e implementar o mesmo produto elimina a camada de tradução: quando um componente não sobrevivia ao contato com dados reais, eu ajustava o design na origem.',
    'kp.109': 'Também significou entender as restrições antes que virassem bloqueios. Quando o time esbarrou em um problema de complexidade de componente, eu já estava na sala.',
    'kp.110': 'Mentoria em transição',
    'kp.111': 'Uma desenvolvedora do time estava migrando de front-end para UX/UI Design. Revisei o trabalho dela durante todo o projeto, mostrei o raciocínio por trás das decisões e dei feedback estruturado sobre suas escolhas de interface.',
    'kp.112': 'Explicar por que um padrão funciona obriga a articular princípios que a gente normalmente aplica no instinto. Afiou meu próprio pensamento tanto quanto o dela.',
    'kp.113': '04 · Entregar',
    'kp.114': '8,2 de 10 <em>e como medimos isso.</em>',
    'kp.115': 'A entrega não acabou no lançamento. Continuamos coletando: testes de usabilidade na ferramenta pronta, monitoramento das métricas-chave e um backlog de ideias de integração vindo direto do feedback dos usuários.',
    'kp.116': '8,2<span style="font-size:1.6rem;">/10',
    'kp.117': 'Satisfação média dos usuários nos testes de usabilidade pós-entrega, com pequenos ajustes aplicados a partir dos achados',
    'kp.118': 'Pessoas no time, incluindo uma designer mentorada durante sua transição de carreira',
    'kp.119': 'MVP',
    'kp.120': 'Lançado como o primeiro produto da Dojo, abrindo uma linha de receita de produto ao lado do trabalho por projeto',
    'kp.121': 'O Keepeye comprimiu o ciclo inteiro em um projeto só: pesquisa, priorização, design, código e mentoria. Confirmou uma regra que sigo até hoje: o que você pula no discovery, você paga na entrega.',

    /* ── Case study: Multipedidos ── */
    'mp.1': 'Case Study',
    'mp.2': 'Multipedidos<br /><em>Design System &amp; Produto</em>',
    'mp.3': 'Dois produtos, seis times e mais de 4.000 restaurantes clientes, com um designer na sala. Construí o design system e a prática de product design enquanto entregava mais de 40 funcionalidades.',
    'mp.4': 'Empresa',
    'mp.5': 'Multipedidos<span>Food Tech · SaaS</span>',
    'mp.6': 'Papel',
    'mp.7': 'Senior Product Designer<span>Único designer</span>',
    'mp.8': 'Período',
    'mp.9': 'Jan 2024 – Jun 2026<span>2 anos</span>',
    'mp.10': 'Stack',
    'mp.11': 'Figma, DEV Mode<span>Claude + MCP</span>',
    'mp.12': 'Contexto',
    'mp.13': 'Um designer, <em>dois produtos, seis times.</em>',
    'mp.14': 'A situação',
    'mp.15': 'Entrei na Multipedidos em janeiro de 2024, primeiro como freelancer pelo Estúdio 149 e depois como contratado fixo. Eu era o primeiro e único designer da empresa. As telas saíam do pedido para a produção sem passar por ninguém cujo trabalho fosse questioná-las.',
    'mp.16': 'O produto tinha duas frentes: o Gestor de Pedidos, sistema B2B em que os restaurantes tocam a operação, e o Pedir.Delivery, a plataforma de pedidos que os clientes deles usam. Os dois cresciam rápido, e cada release somava um débito de design que ninguém acompanhava.',
    'mp.17': 'O mandato',
    'mp.18': 'Meu trabalho era tornar o design algo em que o negócio pudesse confiar: um sistema de componentes que a engenharia consumisse direto, um processo que pegasse problemas antes da produção e, no fim, a prova de que decisões de design mexem em métricas de negócio.',
    'mp.19': 'A parte difícil era o timing: seis times pedindo telas ao mesmo tempo e nenhuma pausa no ritmo de entrega para montar a infraestrutura antes.',
    'mp.20': '10M<span style="font-size:1.6rem;">+',
    'mp.21': 'Acessos mensais no Pedir.Delivery',
    'mp.22': '4M<span style="font-size:1.6rem;">+',
    'mp.23': 'Pedidos processados por mês',
    'mp.24': '1K<span style="font-size:1.6rem;">+',
    'mp.25': 'Telas desenvolvidas',
    'mp.26': '40<span style="font-size:1.6rem;">+',
    'mp.27': 'Demandas de produto geridas no design system',
    'mp.28': 'Eu precisava construir a fundação embaixo de um produto que nunca parava de andar.',
    'mp.29': '↑ Gestor de Pedidos, o sistema B2B em que os restaurantes tocam a operação inteira',
    'mp.30': 'A fundação',
    'mp.31': 'Por que os tokens vieram <em>antes das telas.</em>',
    'mp.32': 'Com seis times pedindo telas, o caminho tentador era simplesmente desenhá-las. Comecei pelos tokens: cor, espaçamento, tipografia, raio e elevação. Custou velocidade nas primeiras semanas e devolveu esse tempo em cada tela desde então.',
    'mp.33': 'Tokens antes dos componentes',
    'mp.34': 'Uma camada completa de tokens com modo escuro e claro desde o início. O Ant Design deu a estrutura de componentes; os tokens deram a identidade. Uma mudança no nível do token se propaga para todas as telas dos dois produtos.',
    'mp.35': 'Integração com o DEV Mode',
    'mp.36': 'Configurei o Figma DEV Mode para que cada componente aponte para uma referência de código. Os devs inspecionam a especificação real em vez de adivinhar a partir de uma imagem chapada. A fidelidade da implementação melhorou já na primeira sprint em que rodamos.',
    'mp.37': 'Responsivo por padrão',
    'mp.38': 'O Pedir.Delivery vive no celular. O Gestor roda em desktops e tablets atrás de um balcão. Cada componente foi construído para os dois contextos, e é por isso que o sistema esticou para mais de 1.000 telas sem se dividir.',
    'mp.39': '01 · Produto consumer',
    'mp.40': 'Desenhando o pedido, <em>do primeiro toque à entrega.</em>',
    'mp.41': 'Pesquisa antes de redesenhar',
    'mp.42': 'O redesign começou com benchmarking de concorrentes e entrevistas com restaurantes da base: o que esperavam de um cardápio online, o que sentiam falta e quais partes da rotina doíam.',
    'mp.43': 'A partir daí assumi o funil inteiro, dos fluxos de pedido e visualização de itens ao carrinho, pagamento e entrega ou retirada. Cada decisão servia a um objetivo: mais pedidos concluídos, porque o abandono não escolhe em qual tela acontece.',
    'mp.44': 'Benchmarking',
    'mp.45': 'Entrevistas com usuários',
    'mp.46': '↑ A experiência consumer redesenhada, reconstruída para o mercado em que compete',
    'mp.47': 'Cardápio',
    'mp.48': 'Navegação por categoria, cards de item, busca, informações do restaurante',
    'mp.49': 'Seleção de item',
    'mp.50': 'Itens genéricos, montagem de pizza, seleção de combo, modificadores',
    'mp.51': 'Carrinho',
    'mp.52': 'Revisão, edição de quantidade, prévia de pontos de fidelidade, CTA',
    'mp.53': 'Checkout',
    'mp.54': 'Dados de entrega, forma de pagamento, cashback, cupons',
    'mp.55': 'Confirmação',
    'mp.56': 'Pedido confirmado, previsão de entrega, acompanhamento de pagamento assíncrono',
    'mp.57': 'Três fluxos de pedido em um',
    'mp.58': 'O cardápio tem três tipos de item estruturalmente diferentes. Um item genérico precisa de modificadores simples. Uma pizza precisa de tamanho, massa, coberturas e validação de meio a meio. Um combo caminha por grupos de escolha, cada um com suas opções. Três modelos de dados que precisavam parecer um produto só.',
    'mp.59': 'Reduzindo o abandono em cada etapa',
    'mp.60': 'Redesenhei o fluxo com o abandono como briefing explícito. Os pontos de fidelidade aparecem no carrinho, antes do checkout, então o cliente vê o que ganha antes de se comprometer. A personalização mostra primeiro as escolhas obrigatórias e esconde o resto. Do carrinho ao checkout é um toque, com o preço confirmado ali mesmo.',
    'mp.61': 'Login, conta e sistema de fidelidade',
    'mp.62': 'Também assumi login, criação de conta, recuperação de senha e a interface de fidelidade: saldo de pontos, regras de resgate e ganhos visíveis ao longo do fluxo de pedido. Uma recompensa visível é um motivo para terminar o pedido.',
    'mp.63': '01 · Produto consumer · Transações',
    'mp.64': 'Responsabilidade completa por <em>checkout e pagamento.</em>',
    'mp.65': 'O checkout é onde o pedido se completa ou morre. Assumi toda a camada transacional: seis formas de pagamento em dois contextos, cashback, cupons, três modos de entrega e testes A/B rodando no fluxo em produção.',
    'mp.66': 'Revisão<br />do carrinho',
    'mp.67': 'Dados<br />de entrega',
    'mp.68': 'Escolha do<br />pagamento',
    'mp.69': 'Descontos<br />&amp; cashback',
    'mp.70': 'Pedido<br />confirmado',
    'mp.71': 'Acompanhamento<br />do pagamento',
    'mp.72': 'Pagar online',
    'mp.73': 'Transferência instantânea · Fluxo assíncrono para QR e Pix automático',
    'mp.74': 'Créditos de fidelidade da plataforma',
    'mp.75': 'PicPay, Mercado Pago, Stripe, Zelle, Pagseguro',
    'mp.76': 'Pagar na entrega',
    'mp.77': 'Com cálculo de troco (dois layouts testados em A/B)',
    'mp.78': 'Cartão salvo com edição rápida',
    'mp.79': 'Pagamento presencial na maquininha',
    'mp.80': 'Cashback e cupons',
    'mp.81': 'O saldo de cashback fica no topo do checkout: total, valor disponível, validade e um toque para aplicar. Os cupons ficam no mesmo grupo, então as decisões de desconto acontecem juntas, antes do pagamento.',
    'mp.82': 'Três contextos de entrega',
    'mp.83': 'Endereço para delivery, mesa para consumo no local, identificação do carro para retirada no drive. Cada contexto pede campos e estados de confirmação diferentes, e os três tinham que caber em uma estrutura só de checkout em vez de virar três fluxos.',
    'mp.84': 'Estados de pagamento assíncrono <span class="ab-badge">A/B</span>',
    'mp.85': 'Pix e Mercado Pago criam um estado intermediário: pedido confirmado, pagamento pendente. Três telas cuidam de Pix QR, Pix automático e Mercado Pago. Os testes A/B no layout de confirmação rodaram direto no checkout em produção.',
    'mp.86': '↑ Pedir.Delivery em uso: navegação, personalização de item, carrinho e checkout',
    'mp.87': '02 · Plataforma B2B',
    'mp.88': 'A outra metade: <em>tudo o que faz um restaurante funcionar.</em>',
    'mp.89': 'O primeiro designer a olhar para aquilo',
    'mp.90': 'O Gestor de Pedidos é o sistema que donos e equipe de restaurante usam para receber pedidos, gerenciar o cardápio, cobrar no balcão e fechar o dia. A maioria dos fluxos nunca tinha passado por um designer, então cada redesign começava observando como o restaurante realmente opera.',
    'mp.91': 'O escopo ia da infraestrutura central (cardápio, KDS, navegação) aos pagamentos (PDV, múltiplos pagadores, PIX, carteira, cashback), passando pelo ferramental operacional (fila de impressão, relatórios, integrações) até o crescimento (CRM, agente de onboarding). Toda mudança estrutural subia em etapas, porque um erro na base atingiria mais de 4.000 restaurantes ativos de uma vez.',
    'mp.92': '↑ Gestor de Pedidos: recebimento de pedidos, cardápio, PDV e fechamento do dia em um sistema só',
    'mp.93': 'Algumas entregas',
    'mp.94': 'Kitchen Display System',
    'mp.95': 'Novo cardápio',
    'mp.96': 'Redesign do PDV',
    'mp.97': 'Múltiplos pagadores',
    'mp.98': 'Carteira digital + PIX',
    'mp.99': 'Sistema de cashback',
    'mp.100': 'Relatórios',
    'mp.101': 'CRM',
    'mp.102': 'Agente de onboarding',
    'mp.103': 'Nova sidebar',
    'mp.104': 'Operação da cozinha',
    'mp.105': 'Implementação do KDS',
    'mp.106': 'Um painel de pedidos em tempo real para as estações da cozinha, substituindo as comandas impressas: estados do pedido, agrupamento de itens, indicadores de tempo e roteamento entre estações. Cozinha é barulhenta e mão suja, então tudo precisava ser legível de relance e difícil de errar.',
    'mp.107': 'Ponto de venda',
    'mp.108': 'Redesign do PDV',
    'mp.109': 'Seleção de cliente, busca de produto, montagem do pedido e roteamento de pagamento, tudo reconstruído. O novo fluxo lida com pagamento dividido entre vários pagadores e dá ao Pix Automático um estado de aprovação nativo, então ninguém fica na dúvida se o pagamento entrou.',
    'mp.110': 'Nova funcionalidade',
    'mp.111': 'Múltiplos pagadores',
    'mp.112': 'Um pedido, vários pagadores, cada um com sua forma de pagamento. Desenhei o cálculo da divisão, os estados de confirmação individuais e o estado pendente de quando parte da mesa já pagou e parte não.',
    'mp.113': 'Integração de pagamento',
    'mp.114': 'PIX + carteira digital',
    'mp.115': 'O fluxo de PIX presencial de ponta a ponta: geração de QR, verificação de status, confirmação e recuperação de falha. A Carteira Digital dá ao restaurante um lugar único para gerir as transferências PIX processadas por parceiros como a Asaas.',
    'mp.116': 'Navegação',
    'mp.117': 'Sidebar + arquitetura da informação',
    'mp.118': 'As páginas tinham sido adicionadas na ordem em que foram lançadas, não em nenhuma ordem que fizesse sentido para o operador. Auditei o conjunto de funcionalidades, mapeei como cada perfil percorre o sistema e reconstruí a navegação em torno disso. Uma nova função de Favoritos deixa cada operador fixar as páginas que a operação dele realmente usa.',
    'mp.119': 'Deep dive · Novo cardápio',
    'mp.120': 'O cardápio <em>perdia o usuário no meio da tarefa.</em>',
    'mp.121': 'A correção mais pedida no Gestor era também a mais estrutural. Criar um item do cardápio exigia que toda dependência já existisse: para montar uma pizza de frango, o operador saía do fluxo da pizza, criava o sabor frango, voltava e começava de novo. Conduzi o ciclo completo de produto da nova versão: discovery, testes de usabilidade com usuários na primeira versão, Design Critiques com os times internos, prototipação e desenvolvimento, reconstruindo o fluxo em torno de um princípio: nada que esteja faltando deveria te expulsar do que você está fazendo. Enquanto o novo cardápio tomava forma, orquestrei em paralelo a estratégia de migração, para que o rollout estivesse pronto no dia em que o produto estivesse.',
    'mp.122': 'Antes: saídas forçadas',
    'mp.123': 'Começa a criar a pizza',
    'mp.124': 'O sabor ainda não existe. <span class="mb-exit">Sai do fluxo</span>',
    'mp.125': 'Cria o sabor em outra tela',
    'mp.126': 'Volta e começa a pizza de novo',
    'mp.127': 'Falta o tipo de massa. <span class="mb-exit">Sai outra vez</span>',
    'mp.128': 'Várias sessões para terminar um item',
    'mp.129': 'Depois: criação no contexto',
    'mp.130': 'Começa a criar a pizza',
    'mp.131': 'Falta o sabor? Cria em um painel, no meio do fluxo',
    'mp.132': 'O mesmo vale para massas, coberturas e modificadores',
    'mp.133': 'O progresso nunca se perde',
    'mp.134': 'Uma sessão, um item pronto',
    'mp.135': '6,9<span style="font-size:1.6rem;">&#8594;</span>8,8',
    'mp.136': 'Nota SEQ de satisfação após o redesign, um ganho de 1,9 ponto sobre o cardápio antigo',
    'mp.137': 'Contas migradas em um rollout orquestrado com Marketing, Customer Success e Implementation Success',
    'mp.138': '100<span style="font-size:1.6rem;">%',
    'mp.139': 'Da base migrada, o que permitiu à empresa descontinuar de vez a versão antiga',
    'mp.140': 'A prática',
    'mp.141': 'Uma prática de design que <em>a empresa inteira podia integrar.</em>',
    'mp.142': 'Design Critiques',
    'mp.143': 'Critiques semanais com desenvolvedores, QA, CX, comercial e diretoria. Qualquer pessoa com interesse no produto podia questionar um fluxo antes dele subir, não depois.',
    'mp.144': 'Design Critiques',
    'mp.145': 'Cross-functional',
    'mp.146': 'Testes de usabilidade',
    'mp.147': 'Operadores de restaurante reais testavam os fluxos antes do lançamento. Os achados moldavam as iterações em vez de virarem post-mortem.',
    'mp.148': 'Testes de usabilidade',
    'mp.149': 'Avaliação SEQ',
    'mp.150': 'Testes A/B',
    'mp.151': 'Os testes A/B no Pedir.Delivery ligaram decisões de design a números de conversão, o que tornou a qualidade mais fácil de defender nas discussões de roadmap.',
    'mp.152': 'Testes A/B',
    'mp.153': 'OKRs',
    'mp.154': 'Handoff assistido por IA',
    'mp.155': 'O Claude conectado ao Figma via MCP gera specs direto dos tokens do arquivo. O handoff caiu de 5 dias para 2.',
    'mp.156': 'Claude + MCP',
    'mp.157': 'Figma DEV Mode',
    'mp.158': 'Discovery de produto e técnico',
    'mp.159': 'Construí processos independentes de discovery de produto e discovery técnico, com documentação própria, para os seis times sob minha responsabilidade, e integrei os dois à rotina ágil. O tempo de pré-desenvolvimento caiu 30% e o retrabalho, mais de 80%.',
    'mp.160': 'Processo de discovery',
    'mp.161': 'Documentação',
    'mp.162': 'Gestão de squads',
    'mp.163': 'Gestão técnica das squads multidisciplinares ligadas aos projetos de produto: atividades, acompanhamento de métricas, OKRs, documentação e diagramas e fluxos de apoio. Também fiz o onboarding dos novos contratados de Produto e participei das entrevistas técnicas da área.',
    'mp.164': 'OKRs',
    'mp.165': 'Onboarding',
    'mp.166': '60<small>%</small>',
    'mp.167': 'De 5 dias<br />para <em>2 dias.</em>',
    'mp.168': 'A entrega de protótipo e handoff levava cinco dias úteis: desenhar as telas, documentar as interações, escrever specs por componente, alinhar com os devs e revisar.',
    'mp.169': 'Conectei o Claude ao arquivo do Figma via MCP. Specs de componente, descrições de interação e documentação pronta para desenvolvimento agora saem direto dos tokens do arquivo. Cinco dias viraram dois, e o tempo recuperado vai para pesquisa e iteração.',
    'mp.170': 'Claude',
    'mp.171': 'Figma MCP',
    'mp.172': 'Design Tokens',
    'mp.173': 'DEV Mode',
    'mp.174': 'Resultados',
    'mp.175': 'Onde <em>está hoje.</em>',
    'mp.176': '30<span style="font-size:1.6rem;">%',
    'mp.177': 'Menos tempo de pré-desenvolvimento depois que discovery de produto e técnico entraram na rotina ágil',
    'mp.178': 'Times entregando por um processo só: critique semanal, testes de usabilidade e experimentos A/B',
    'mp.179': '80<span style="font-size:1.6rem;">%+',
    'mp.180': 'De redução na taxa de retrabalho entre os seis times sob minha responsabilidade',
    'mp.181': 'O trabalho de maior alavancagem na Multipedidos nunca foi uma tela. Foi o sistema de tokens, o ritual de critique e o pipeline de handoff: a infraestrutura que permitiu a um designer só manter coerente o software por trás de mais de 4.000 restaurantes.',

    /* ── Case study: IncludED ── */
    'inc.1': 'Case Study',
    'inc.2': 'IncludED<br /><em>Plataforma de Educação Inclusiva</em>',
    'inc.3': 'Todo estudante de inclusão no Brasil tem direito legal a um plano educacional individualizado. Quase nenhuma escola tem as ferramentas para produzir um. Desenhei a IncludED com uma neuropsicóloga, uma consultora pedagógica e dois desenvolvedores. Seis meses após o lançamento, roda em 25 escolas com mais de 1.000 estudantes cadastrados.',
    'inc.4': 'Empresa',
    'inc.5': 'PixelPunk',
    'inc.6': 'Papel',
    'inc.7': 'Lead Product Designer',
    'inc.8': 'Stack',
    'inc.9': 'Figma, BNCC<span>Acessibilidade em primeiro lugar</span>',
    'inc.10': 'Plataforma',
    'inc.12': 'Contexto',
    'inc.13': 'Um direito legal sem <em>a infraestrutura para existir.</em>',
    'inc.14': 'O mandato legal',
    'inc.15': 'Todo estudante com deficiência, transtorno global do desenvolvimento ou altas habilidades tem direito legal a um PEI, o Plano Educacional Individualizado: metas pedagógicas, adaptações curriculares e registro de progresso ao longo do tempo. Mais de 1,7 milhão de estudantes da educação básica brasileira têm esse direito hoje. A lei é clara.',
    'inc.16': 'A prática são arquivos de Word, planilhas e cadernos, cada professor com seu formato e sua gaveta. Sem estrutura compartilhada, sem colaboração entre professores, sem rastreabilidade para a gestão.',
    'inc.17': 'O custo humano',
    'inc.18': 'Quem absorve o atrito é o professor. Um PEI em conformidade, alinhado à BNCC e revisado com especialistas, leva horas por estudante, multiplicado por cada aluno de inclusão da turma. Sob essa carga, muitos PEIs acabam cumprindo a forma e perdendo a função: um documento que existe no papel, sem profundidade pedagógica.',
    'inc.19': 'A IncludED existe para dar ao professor a estrutura de produzir um PEI que faça sentido em uma fração do tempo.',
    'inc.20': 'O problema não é a lei. O problema é que ninguém deu ao professor a infraestrutura para cumpri-la.',
    'inc.21': 'A origem',
    'inc.22': 'Por que este foi <em>nosso primeiro produto.</em>',
    'inc.23': 'A neurociência molda meu jeito de projetar há anos: carga cognitiva, atenção, o modo como os limites da memória de trabalho se traduzem em decisões de interface. Então, quando fundamos a PixelPunk em outubro de 2024 e precisamos escolher um primeiro produto, uma plataforma para alunos de inclusão não foi escolha aleatória. Ela fica exatamente no encontro entre neurociência educacional, pedagogia e design.',
    'inc.24': 'E carrega peso. Atrás de cada PEI criado na plataforma existe uma criança cujo direito legal ao apoio depende daquele documento ser real. Construímos com isso em mente.',
    'inc.25': 'O processo',
    'inc.26': 'O trabalho antes <em>do primeiro wireframe.</em>',
    'inc.27': 'Accio: o Design System que viabilizou todo o resto',
    'inc.28': 'Antes da primeira tela de produto, construímos o Accio, o design system da PixelPunk: componentes acessíveis por padrão, documentados no Storybook. Com dois desenvolvedores e um público de educadores, não dava para corrigir acessibilidade tela a tela. Os componentes documentados também aceleraram o desenvolvimento assistido por IA: cada tela seguinte nasceu mais rápido e consistente.',
    'inc.29': 'Design System Accio',
    'inc.30': 'Storybook',
    'inc.31': 'Acessibilidade em primeiro lugar',
    'inc.32': 'Semanas de estudo estruturado antes de um único wireframe',
    'inc.33': 'Passamos semanas estudando o domínio com duas especialistas que somam mais de 20 anos dentro de escolas: legislação de inclusão, arquitetura da BNCC em todas as etapas de ensino, como os professores montam PEIs hoje, como os laudos clínicos chegam às salas de aula e o que a regulamentação do AEE exige dos profissionais de apoio.',
    'inc.34': 'Pesquisa de domínio',
    'inc.35': 'Mapeamento da BNCC',
    'inc.36': 'Análise de fluxo de trabalho',
    'inc.37': 'Revisão regulatória',
    'inc.38': 'Mapeando o que existia e onde exatamente falhava',
    'inc.39': 'Auditamos ERPs escolares, modelos de Word, construtores de PEI em planilha e plataformas de edtech. A categoria foi feita para administração escolar, não para inclusão: nada de escrita de metas alinhada à BNCC, nada de fluxo de AEE, nada de tradução do clínico para o pedagógico. A auditoria definiu os requisitos exatos que a IncludED precisava atender para ser útil em vez de abandonado.',
    'inc.40': 'Pesquisa de mercado',
    'inc.41': 'Análise competitiva',
    'inc.42': 'Mapeamento de oportunidades',
    'inc.43': 'Telas + IA, mais rápido porque a fundação estava pronta',
    'inc.44': 'Com o design system e o conhecimento de domínio no lugar, a produção de telas andou rápido. Os desenvolvedores, a consultora e a neuropsicóloga revisaram protótipos, apontaram problemas de terminologia e validaram fluxos contra a rotina real de sala de aula. O MVP foi testado em um colégio de São Paulo com 45 usuários e cerca de 60 estudantes antes do rollout maior.',
    'inc.45': 'Design colaborativo',
    'inc.46': 'Integração de IA',
    'inc.47': 'Iteração rápida',
    'inc.48': 'A pesquisa',
    'inc.49': 'As pessoas que <em>nos mantiveram honestos.</em>',
    'inc.50': '↑ Cada sessão produzia um artefato: uma decisão documentada, uma regra de produto, uma escolha de terminologia',
    'inc.51': 'Consultora pedagógica',
    'inc.52': 'Mais de 20 anos em escolas, dentro da sala',
    'inc.53': 'Ela definiu a separação entre PEI e PAEE, a estrutura de metas por etapa da BNCC e os registros comportamentais mantidos à parte dos objetivos pedagógicos. Juntar o que precisa ficar separado teria deixado o produto fora de conformidade.',
    'inc.54': 'Neuropsicóloga',
    'inc.55': 'A lente clínica, traduzida',
    'inc.56': 'Laudos clínicos chegam em uma linguagem sobre a qual a maioria dos professores não consegue agir. Ela definiu como a IncludED os traduz, preservando a precisão diagnóstica enquanto reformula o conteúdo em orientação pedagógica. O Conselho de Adaptação é a contribuição direta dela ao produto.',
    'inc.57': 'Auditoria de mercado',
    'inc.58': 'A lacuna que o mercado confirmou',
    'inc.59': 'As plataformas escolares no Brasil foram feitas para administração. Nenhuma tinha fluxo de PEI alinhado à BNCC, escrita de metas assistida por IA ou colaboração multi-perfil. O espaço que a IncludED ocupa estava vazio.',
    'inc.60': 'A plataforma',
    'inc.61': 'Seis módulos, <em>um documento em conformidade.</em>',
    'inc.62': 'Criação e gestão do PEI',
    'inc.63': 'O coração da plataforma. O administrador abre um período letivo e o sistema gera um PEI por estudante ativo. A criação roda como um wizard de quatro etapas (informações do estudante, repertório, comportamento e adaptações curriculares), então o professor nunca encara uma página em branco. Cada professor contribui na sua disciplina e a coordenação enxerga o todo. Todo PEI é exportado como um único PDF em conformidade, com todas as contribuições, objetivos, comportamentos e o PAEE.',
    'inc.64': 'Mapeamento de metas na BNCC com IA',
    'inc.65': 'O professor liga objetivos a descritores da BNCC, com o glossário completo indexado para navegação e todos os componentes cobertos, incluindo Ensino Religioso e Computação. Para cada descritor, a IA redige uma meta no formato SMART adaptada ao perfil do estudante. O professor edita; a IA começa. A escrita de metas ficou mais rápida e o alinhamento à BNCC mais preciso ao mesmo tempo.',
    'inc.66': 'Acompanhamento da evolução do estudante',
    'inc.67': 'Os objetivos se desdobram em atividades acompanhadas de forma quantitativa ou qualitativa, com cada avanço registrado com quem registrou, quando e quanto. A plataforma agrega o progresso por objetivo, disciplina e período, e o registro sobrevive ao ano letivo: quando a turma ou o professor mudam, o histórico do estudante continua inteiro.',
    'inc.68': 'Processamento de laudos clínicos',
    'inc.69': 'O administrador sobe laudos de neurologistas, psicólogos e fonoaudiólogos. O OCR cuida dos documentos digitalizados e a IA traduz a linguagem médica em orientação de sala de aula. Só os laudos aceitos alimentam o Conselho de Adaptação, um portão de qualidade que desenhamos com a neuropsicóloga.',
    'inc.70': 'PAEE: Plano de Atendimento Educacional Especializado',
    'inc.71': 'Um módulo exclusivo dos profissionais de AEE. O PAEE captura eixos de trabalho (comunicação, cognição, autonomia, habilidades motoras) com objetivos, estratégias, frequência e duração das sessões. A IA sugere objetivos e indicadores por eixo com base no perfil do estudante.',
    'inc.72': 'Colaboração multi-perfil',
    'inc.73': 'A coordenação vê tudo, o professor de matemática vê a própria contribuição, o profissional de AEE vê uma lista fixa de estudantes atribuídos, independente de turma. As regras são estruturais: os papéis de administrador e AEE são mutuamente exclusivos, e o professor só alcança um estudante passando por dois portões independentes, permissão de disciplina e matrícula. A conformidade com a LGPD foi desenhada desde o início: base legal documentada, registro de consentimento, audit log e regras de retenção.',
    'inc.74': 'IA no produto',
    'inc.75': 'A IA rascunha. <em>O professor decide.</em>',
    'inc.76': 'A IA na IncludED funciona como assistente do professor, não como substituta do julgamento dele. Cada integração tem uma função, uma saída definida e um portão de revisão humana, e o conteúdo gerado fica restrito ao material da própria escola.',
    'inc.77': 'Clínico',
    'inc.78': 'Tradução de laudos e OCR',
    'inc.79': 'A linguagem médica dos laudos é reescrita em termos pedagógicos sobre os quais o professor consegue agir. O OCR cuida dos documentos digitalizados. O professor lê, edita e aceita antes de o conteúdo afetar qualquer orientação sobre o estudante.',
    'inc.80': 'Planejamento',
    'inc.81': 'Sugestão de metas e atividades',
    'inc.82': 'Quando o professor seleciona um descritor da BNCC, a IA redige um texto de meta. Ao definir uma atividade, a IA sugere uma descrição com base no objetivo e no perfil do estudante. O professor sempre edita e confirma antes de qualquer coisa ser salva.',
    'inc.83': 'Síntese',
    'inc.84': 'Conselho de Adaptação e resumo do PEI',
    'inc.85': 'Os laudos aceitos são consolidados pela IA em um Conselho de Adaptação: orientação prática de sala de aula para todos os professores daquele estudante. A IA também gera um resumo completo do PEI sob demanda, para revisão da coordenação e exportação em PDF.',
    'inc.86': 'O piloto',
    'inc.87': 'O MVP conheceu uma escola real <em>antes de conhecer o mercado.</em>',
    'inc.88': 'Testamos o MVP em um colégio de São Paulo: 45 usuários e cerca de 60 estudantes de Educação Infantil, Fundamental I e II. O teste cobriu o fluxo completo de criação do PEI, as contribuições do período e a gestão dos planos.',
    'inc.89': 'As sessões também definiram o roadmap. O acompanhamento da evolução do estudante, o glossário da BNCC como ferramenta de apoio e a gestão de planos entraram no produto como resposta direta ao que vimos professores e coordenadores fazerem durante o piloto. Desde então, cada funcionalidade segue o mesmo ciclo: reunião de entendimento, protótipo, design critique com desenvolvedores e consultoras, teste com usuários e lançamento.',
    'inc.90': 'Resultados',
    'inc.91': 'Como são seis meses <em>em produção.</em>',
    'inc.92': 'Escolas no ecossistema IncludED',
    'inc.93': '1.000<span style="font-size:1.6rem;">+',
    'inc.94': 'Estudantes cadastrados na plataforma',
    'inc.95': '30<span style="font-size:1.6rem;">min',
    'inc.96': 'Tempo médio para criar um PEI completo',
    'inc.97': 'A IncludED juntou o conhecimento das especialistas ao entendimento de produto e usabilidade para facilitar a vida de professores e instituições. No fim, o que ela devolve é tempo: horas que voltam para o que realmente importa na rotina de quem ensina.',

    /* ── Case study: Electrolux ── */
    'elx.1': 'Case Study',
    'elx.2': 'Electrolux<br /><em>Sistema de Visualização de Dados</em>',
    'elx.3': 'A Electrolux lia a própria operação através de planilhas desconectadas e dashboards sem padrão. Desenhei um sistema de visualização de dados em Power BI: três contextos de dashboard, templates reutilizáveis e um manual que qualquer time podia seguir sem designer. O board adotou como padrão global.',
    'elx.4': '<strong>Case study com NDA.</strong> Este projeto está protegido por acordo de confidencialidade. O conteúdo visual foi abstraído. O que segue foca em processo, metodologia e resultados, não em dados proprietários ou telas internas.',
    'elx.5': 'Empresa',
    'elx.6': 'Dojo Smart Ways<span>Cliente: Electrolux</span>',
    'elx.7': 'Papel',
    'elx.8': 'Designer de Visualização de Dados<span>Power BI + Design de Sistema</span>',
    'elx.9': 'Escopo',
    'elx.10': '5 waves<span>LATAM, rollout global</span>',
    'elx.11': 'Stack',
    'elx.12': 'Power BI, Figma<span>+ Documentação</span>',
    'elx.13': 'Dez pessoas podiam ler a mesma métrica e chegar a dez números diferentes. O dado não era o problema. O que faltava era uma <em>linguagem comum</em> para exibi-lo.',
    'elx.14': 'Contexto',
    'elx.15': 'Dez versões <em>da verdade.</em>',
    'elx.16': 'A situação',
    'elx.17': 'Cada time da Electrolux cuidava dos próprios relatórios do seu jeito: Excel aqui, Google Sheets ali, dashboards de Power BI feitos sem padrão. Todo time tinha uma versão da verdade, e nenhuma batia com a outra.',
    'elx.18': 'A liderança não conseguia consolidar uma visão entre regiões, e os analistas gastavam o tempo reformatando em vez de analisar.',
    'elx.19': 'A Dojo foi contratada para construir dashboards a partir de um Data Lake centralizado. O briefing: conectar os dados e torná-los legíveis. Eu vi espaço para algo mais permanente.',
    'elx.20': 'O mandato',
    'elx.21': 'Entreguei o briefing em cinco waves na LATAM, uma por área de negócio: dashboards em Power BI conectados ao Data Lake, dando aos times uma forma unificada de ler seus dados operacionais e estratégicos.',
    'elx.22': 'Mas o briefing tinha um buraco. Se cada dashboard fosse feito sob medida, a fragmentação voltaria no instante em que a Dojo saísse. Os times divergiriam de novo.',
    'elx.23': 'Então, junto com os dashboards, construí um sistema de templates e um manual de documentação: um padrão que qualquer time da Electrolux pudesse replicar sem um designer na sala. Foi essa decisão que fez o trabalho sobreviver ao fim do contrato.',
    'elx.24': 'Os três contextos',
    'elx.25': 'Executivo, operacional, analítico: <em>uma linguagem visual.</em>',
    'elx.26': 'Nem todo público precisa da mesma visão. O sistema foi desenhado em torno de três contextos distintos de dashboard, cada um com propósito, hierarquia visual e profundidade de interação definidos.',
    'elx.27': '<em>Executivo</em>',
    'elx.28': 'Atingimento de metas, performance regional e KPIs estratégicos de relance. Pouca interação por decisão: a primeira tela responde à pergunta principal sem exigir detalhamento.',
    'elx.29': 'Visão resumida',
    'elx.30': 'Baixa densidade',
    'elx.31': 'Acompanhamento de metas',
    'elx.32': '<em>Operacional</em>',
    'elx.33': 'Monitoramento diário para líderes de time: produção por período, eficiência de processo e sinalizações de desvio que aparecem antes do problema crescer.',
    'elx.34': 'Séries temporais',
    'elx.35': 'Alertas de desvio',
    'elx.36': 'Cadência diária',
    'elx.37': '<em>Analítico</em>',
    'elx.38': 'Visões de aprofundamento para analistas: distribuição de variação, quebras cruzadas entre dimensões e análise de tendência. Feito para exploração, com alta profundidade de interação.',
    'elx.39': 'Análise de variação',
    'elx.40': 'Cruzamento de dimensões',
    'elx.41': 'Alta interação',
    'elx.42': 'A decisão central',
    'elx.43': 'Tratar dashboards <em>como um design system.</em>',
    'elx.44': 'Um guia de estilo seria a resposta óbvia, e teria morrido dentro de uma pasta. Encarei o padrão do jeito que se encara um design system: como componentes com comportamento definido, vivendo nas ferramentas em que as pessoas já trabalham. Um mesmo padrão precisava servir a três destinos ao mesmo tempo, senão só seria seguido por quem o escreveu.',
    'elx.45': 'Croqui no Figma',
    'elx.46': 'Qualquer pessoa consegue esboçar um dashboard no Figma usando componentes de visualização de dados que se comportam e se leem exatamente como o resultado final. O que você desenha é o que vai ao ar.',
    'elx.47': 'Construção no Power BI',
    'elx.48': 'Os mesmos componentes existem como visuais de Power BI seguindo o padrão. Criar um dashboard novo é posicionar componentes e conectá-los ao Data Lake, não redesenhar do zero.',
    'elx.49': 'Documentado globalmente',
    'elx.50': 'Todo padrão vive em um documento oficial, válido para a empresa no mundo inteiro. O sistema não é conhecimento tribal: é algo que um time novo consegue adotar sem nunca ter falado comigo.',
    'elx.51': 'Layouts como componentes, não como arquivos',
    'elx.52': 'A biblioteca cobre as situações de layout que um dashboard realmente encontra: um gráfico dominante, uma faixa de KPIs sobre uma tabela de detalhe, comparações lado a lado, quebras que precisam de três painéis de peso igual. Cada um codifica as decisões que ninguém deveria precisar tomar duas vezes: grid, estrutura de header, posição da faixa de KPIs e quais slots aceitam cada tipo de visualização.',
    'elx.53': 'Escolher um layout virou uma pergunta sobre o público, e não um exercício de design. De quanto detalhe esse leitor precisa, e com que rapidez? Um executivo escaneando atingimento e um analista caçando uma variação recebem estruturas diferentes do mesmo sistema, então os números seguem comparáveis em todas as telas da empresa.',
    'elx.54': 'Como a estrutura idêntica existe no Figma e no Power BI, um croqui e um dashboard publicado se encaixam sem tradução. Um analista de negócio pode propor uma visão de manhã e tê-la construída no padrão no mesmo dia, sem um designer no meio do caminho.',
    'elx.55': 'Sistema de layouts',
    'elx.56': 'Slots de componente',
    'elx.57': 'Do Figma ao Power BI',
    'elx.58': '↑ Uma amostra dos templates de layout. Dados e conteúdo removidos por NDA; a estrutura é a entrega',
    'elx.59': 'Cada dashboard entregue com sua documentação',
    'elx.60': 'Cada entrega incluía um documento listando seus KPIs, a fonte de dados real por trás de cada um e o motivo de estar ali. Quem lesse um número conseguia rastrear de onde ele vinha e por que existia.',
    'elx.61': 'E com os meios para repetir',
    'elx.62': 'Também construí os documentos e processos padrão para replicar essa documentação em qualquer dashboard novo, para que a prática sobrevivesse sem depender de eu escrever cada uma delas.',
    'elx.63': 'O processo · 5 waves pela LATAM',
    'elx.64': 'O processo que <em>se repetiu cinco vezes.</em>',
    'elx.65': 'Business Understanding',
    'elx.66': 'Toda wave começava com reuniões estruturadas com stakeholders para capturar as regras por trás dos números: o que cada métrica significa, quem é o dono dela, que decisão ela habilita e qual limite dispara uma ação. Pular essa etapa produz dashboards consistentes que respondem às perguntas erradas.',
    'elx.67': 'Entrevistas com stakeholders',
    'elx.68': 'Mapeamento de KPIs',
    'elx.69': 'Regras de negócio',
    'elx.70': 'Alinhamento de dados',
    'elx.71': 'Com as regras capturadas, trabalhei com analistas de dados da Dojo e da Electrolux para mapear o que o Data Lake realmente conseguia entregar: campos disponíveis, transformações necessárias e as lacunas entre o que o negócio esperava e o que o dado permitia. Isso trouxe os problemas de qualidade à tona cedo, antes de virarem retrabalho.',
    'elx.72': 'Análise do Data Lake',
    'elx.73': 'Colaboração com analistas',
    'elx.74': 'Análise de lacunas',
    'elx.75': 'Design dos templates',
    'elx.76': 'Em vez de construir cada dashboard do zero, desenhei primeiro o sistema de templates: grid, semântica de cores, escala tipográfica e padrões de componente. Cada dashboard passou a aplicar o template ao seu contexto. Foi a decisão que tornou o sistema escalável.',
    'elx.77': 'Sistema visual',
    'elx.78': 'Padrões de componente',
    'elx.79': 'Templates reutilizáveis',
    'elx.80': 'Construção e validação',
    'elx.81': 'Os dashboards foram construídos no Power BI, conectados ao Data Lake e validados com os times de negócio e de dados. A validação ia além do visual: os números eram conferidos contra as regras definidas na primeira fase, os filtros testados e a visão checada contra a pergunta original que o stakeholder trouxe na primeira reunião.',
    'elx.82': 'Power BI',
    'elx.83': 'Conexão de dados',
    'elx.84': 'Validação com stakeholders',
    'elx.85': 'Entregas',
    'elx.86': 'O que ficou depois <em>do fim do contrato.</em>',
    'elx.87': 'O trabalho produziu mais que dashboards. Produziu um sistema que qualquer pessoa dentro da Electrolux consegue pegar e continuar sem precisar da Dojo na sala.',
    'elx.88': 'Templates',
    'elx.89': 'Templates reutilizáveis de dashboard',
    'elx.90': 'Três templates base, um por contexto, com grids definidos, componentes de referência e camadas de anotação. Qualquer time podia adaptar um deles a uma nova área de negócio sem redesenhar a lógica visual e sem pedir um designer.',
    'elx.91': 'Documentação',
    'elx.92': 'Manual de visualização',
    'elx.93': 'Um guia cobrindo semântica de cores, escolha de gráfico por tipo de dado e regras de layout por contexto, com instruções passo a passo de replicação. Escrito para um analista de negócio com noções básicas de Power BI, sem precisar de apoio de design.',
    'elx.94': 'Rollout',
    'elx.95': 'Implantação em 5 waves',
    'elx.96': 'Cada wave cobriu uma área de negócio diferente na LATAM. Como design e construção seguiam o padrão estabelecido, cada wave saiu mais rápido que a anterior; o entendimento do negócio virou a única variável real.',
    'elx.97': 'O resultado',
    'elx.98': 'O board tornou o padrão <em>global.</em>',
    'elx.99': 'Cinco waves, velocidade acumulada',
    'elx.100': 'Cinco waves de implantação pela LATAM, cada uma cobrindo uma área de negócio. O entendimento do negócio era a única variável que reiniciava a cada wave: template e construção seguiam o padrão estabelecido, então cada wave saiu mais rápido que a anterior.',
    'elx.101': 'Uma apresentação mudou o escopo',
    'elx.102': 'O contrato da Dojo era LATAM. Quando o padrão foi apresentado ao board global da Electrolux, ele foi aprovado como o padrão de visualização de dados da empresa inteira e estendido às operações do grupo no mundo todo.',
    'elx.103': 'Um sistema, não só três visões',
    'elx.104': 'A entrega foram os dashboards executivo, operacional e analítico, e também o sistema por baixo deles: planilhas espalhadas substituídas por uma fonte única de verdade no Data Lake, e um padrão que os analistas internos estendem sozinhos, muito depois da saída da consultoria.',
    'elx.105': 'O briefing descrevia uma entrega. O problema real era um sistema. Dashboards sem padrão teriam atendido ao pedido e preservado a fragmentação, então resolvi pelo padrão. É por isso que o trabalho segue em uso.',

  };

  var DICT = { pt: PT, en: {} };
  var STORAGE_KEY = 'lang';
  var current = 'en';

  function detect() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === 'pt' || saved === 'en') return saved;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    return nav.toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en';
  }

  /* Caches the original English so switching back needs no reload. */
  function original(el, kind, attr) {
    var slot = '__i18n_' + kind + (attr ? '_' + attr : '');
    if (el[slot] === undefined) {
      el[slot] = kind === 'html' ? el.innerHTML
               : kind === 'attr' ? el.getAttribute(attr)
               : el.textContent;
    }
    return el[slot];
  }

  function apply(lang) {
    var dict = DICT[lang] || {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      /* Guard: data-i18n replaces textContent, which would wipe out any child
         markup. If the element has element children, skip it and report the key
         so it can be re-tagged on the right node (or switched to data-i18n-html). */
      if (el.children.length) {
        if (window.console && console.warn) {
          console.warn('[i18n] skipped "' + el.getAttribute('data-i18n') +
            '": element has child markup. Use data-i18n-html or tag the inner node.');
        }
        return;
      }
      el.textContent = dict[el.getAttribute('data-i18n')] || original(el, 'text');
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = dict[el.getAttribute('data-i18n-html')] || original(el, 'html');
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var bits = pair.split(':');
        var attr = bits[0].trim();
        var key = (bits[1] || '').trim();
        el.setAttribute(attr, dict[key] || original(el, 'attr', attr));
      });
    });

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang-btn') === lang);
    });
    /* Trigger shows only the active language */
    document.querySelectorAll('[data-lang-current]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lang-current') !== lang;
    });

    current = lang;
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  function set(lang) {
    if (lang !== 'pt' && lang !== 'en') return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply(lang);
  }

  /* Helper for inline scripts that build strings at runtime. */
  window.t = function (key, fallback) {
    return (DICT[current] || {})[key] || fallback || key;
  };
  window.setLang = set;
  window.getLang = function () { return current; };

  function closeAllPanels() {
    document.querySelectorAll('.lang-panel.open').forEach(function (p) {
      p.classList.remove('open');
      var btn = p.parentNode.querySelector('.lang-menu-btn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  function init() {
    apply(detect());

    document.addEventListener('click', function (e) {
      if (!e.target.closest) return;

      /* Toggle the dropdown */
      var trigger = e.target.closest('.lang-menu-btn');
      if (trigger) {
        e.stopPropagation();
        var panel = trigger.parentNode.querySelector('.lang-panel');
        var willOpen = panel && !panel.classList.contains('open');
        closeAllPanels();
        if (willOpen) {
          panel.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
        return;
      }

      /* Pick a language */
      var opt = e.target.closest('[data-lang-btn]');
      if (opt) {
        e.preventDefault();
        set(opt.getAttribute('data-lang-btn'));
        closeAllPanels();
        return;
      }

      closeAllPanels();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAllPanels();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
