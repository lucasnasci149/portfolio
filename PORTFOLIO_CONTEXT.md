# Portfólio Lucas Nascimento — Contexto Completo para Migração Angular + Tailwind

## Objetivo desta conversa
Migrar o portfólio pessoal de Lucas Nascimento de HTML estático + CSS vanilla para **Angular + Tailwind CSS**, mantendo 100% da lógica de design, animações, conteúdo e arquitetura de rotas.

---

## Infraestrutura atual

- **Domínio:** `lucasdonascimento.com`
- **Hosting:** GitHub Pages (repo `lucasnasci149/portfolio`, branch `main`)
- **DNS:** Hostinger — CNAME aponta para `lucasnasci149.github.io`
- **Git local:** `C:\Users\Lucas\Documents\Claude Projects\portfolio-main\`
- **Push:** PowerShell no Windows (bash do ambiente sandbox não acessa git por limitação de FUSE mount)

---

## Arquitetura de URLs (CRÍTICA — preservar exatamente)

| URL pública | Arquivo atual | Conteúdo |
|---|---|---|
| `lucasdonascimento.com/` | `index.html` | Listagem pública de trabalhos (Work) |
| `lucasdonascimento.com/project-multipedidos` | `project-multipedidos.html` | Case study raiz — nav mínimo |
| `lucasdonascimento.com/project-included` | `project-included.html` | Case study raiz — nav mínimo |
| `lucasdonascimento.com/project-keepeye` | `project-keepeye.html` | Case study raiz — nav mínimo |
| `lucasdonascimento.com/project-electrolux` | `project-electrolux.html` | Case study raiz — nav mínimo |
| `lucasdonascimento.com/portfolio` | `portfolio/index.html` | Portfólio completo (hero, stats, expertise) |
| `lucasdonascimento.com/portfolio/about` | `portfolio/about.html` | Sobre Lucas |
| `lucasdonascimento.com/portfolio/archives` | `portfolio/archives.html` | Arquivo de projetos |
| `lucasdonascimento.com/portfolio/contact` | `portfolio/contact.html` | Contato |
| `lucasdonascimento.com/portfolio/project-multipedidos` | `portfolio/project-multipedidos.html` | Case study completo — nav full |
| `lucasdonascimento.com/portfolio/project-included` | `portfolio/project-included.html` | Case study completo — nav full |
| `lucasdonascimento.com/portfolio/project-keepeye` | `portfolio/project-keepeye.html` | Case study completo — nav full |
| `lucasdonascimento.com/portfolio/project-electrolux` | `portfolio/project-electrolux.html` | Case study completo — nav full |

### Regra de dois níveis de acesso

**Raiz (`/`):** acesso público, sem senha. Nav mínimo: apenas "Work" + theme toggle. Footer mínimo: apenas "Lucas Nascimento · Lead Product Designer". Sem About Me, Archives, LinkedIn, Contact.

**`/portfolio`:** acesso completo por URL. Nav full: Work / About Me / Archives / Contact + theme toggle. Footer full: logo "Lucas." + links Work / About Me / Archives (com hover idêntico ao header).

Os case studies têm dois arquivos cada: um na raiz (nav mínima, footer mínimo) e um em `/portfolio/` (nav completa, footer completo). O conteúdo do case study em si é idêntico — só o nav/footer muda.

---

## Estrutura de arquivos atual

```
portfolio-main/
├── index.html                    ← raiz pública (Work listing)
├── project-multipedidos.html     ← case study raiz (nav mínimo)
├── project-included.html         ← case study raiz (nav mínimo)
├── project-keepeye.html          ← case study raiz (nav mínimo)
├── project-electrolux.html       ← case study raiz (nav mínimo)
├── about.html                    ← NÃO acessível pela raiz pública
├── archives.html                 ← NÃO acessível pela raiz pública
├── contact.html                  ← NÃO acessível pela raiz pública
├── style.css                     ← CSS global compartilhado
├── transitions.js                ← JS de animações/cursor/curtain
├── 404.html
├── CNAME                         ← "lucasdonascimento.com"
├── assets/
│   ├── icons/favicon.svg
│   ├── logos/ (SVGs das empresas)
│   ├── profile/profile-picture.png
│   ├── about-story/ (fotos 01.jpg até 12.jpg + header.mp4)
│   └── projects/
│       ├── pedir-delivery/ (cover.png, header-image.png, project-screen.png, project-image.png, gestor-mockup.png, pedir-delivery.mp4)
│       ├── included-pixelpunk/ (included-cover.png, included-header.png, included-project.png, included-gif.gif)
│       ├── keepeye/ (keepeye-cover.png, keepeye-header.png, keepeye-screens.png, keepeye-components.png, keepeye-mockup.png, keepeye-wireframe.png)
│       └── electrolux/ (electrolux-cover.png)
└── portfolio/
    ├── index.html                ← portfólio completo (hero, stats, expertise)
    ├── about.html
    ├── archives.html
    ├── contact.html
    ├── project-multipedidos.html ← nav full
    ├── project-included.html     ← nav full
    ├── project-keepeye.html      ← nav full
    └── project-electrolux.html   ← nav full
```

---

## Design Tokens (CSS Variables)

```css
/* Tipografia */
--font-serif: 'Fraunces', Georgia, serif;   /* weight 300, italic decorativo */
--font-sans: 'Inter', system-ui, sans-serif;

/* Cores — Dark mode (padrão) */
--bg:   #0c0c0c;
--bg-1: #111111;
--bg-2: #161616;
--bg-3: #1c1c1c;
--bg-4: #222222;
--border: rgba(255,255,255,0.08);
--border-hover: rgba(255,255,255,0.16);
--text-1: #f0f0f0;
--text-2: #a0a0a0;
--text-3: #5a5a5a;
--accent: #5AA9FF;          /* blue — botões, destaques */
--accent-text: #5AA9FF;     /* blue — texto sobre dark bg */
--accent-2: #f0a060;        /* laranja secundário */
--hover-overlay: rgba(255,255,255,0.05);

/* Cores — Light mode ([data-theme="light"] no html) */
--bg:   #f9f9f7;
--bg-1: #f2f2ef;
--bg-2: #eaeae6;
--bg-3: #e2e2dd;
--bg-4: #d8d8d2;
--border: rgba(0,0,0,0.08);
--border-hover: rgba(0,0,0,0.16);
--text-1: #111111;
--text-2: #555555;
--text-3: #999999;
--accent: #1A56DB;
--accent-text: #1A56DB;
--accent-2: #c2620a;
--hover-overlay: rgba(0,0,0,0.05);

/* Bordas */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 24px;

/* Transições */
--transition: 0.2s ease;
--ease: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Sistema de Tema (Dark/Light)

- Persiste em `localStorage` com chave `'theme'`
- Aplica `[data-theme="light"]` no elemento `<html>`
- Inicializado via inline script no `<head>` (antes do CSS carregar, para evitar flash):

```js
(function () {
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  } catch (e) {}
})();
```

- Toggle via botão com ícone sol/lua (SVG inline). Função `toggleTheme()`:

```js
function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
  try { localStorage.setItem('theme', isLight ? 'dark' : 'light'); } catch(e) {}
}
```

---

## Fontes

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@1,300&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

- Fraunces: apenas italic weight 300 — usado exclusivamente em `<em>` decorativo nos títulos
- Inter: pesos 300, 400, 500, 600

---

## Navegação

### Nav mínimo (raiz `/`)
```html
<nav class="nav">
  <div class="nav-inner">
    <div class="nav-links">
      <a href="index.html" class="nav-link active">Work</a>
    </div>
    <div class="nav-actions">
      <button class="theme-toggle" ...><!-- sol/lua SVG --></button>
    </div>
  </div>
</nav>
```

### Nav completo (`/portfolio`)
```html
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Lucas<span>.</span></a>
    <div class="nav-links">
      <a href="index.html" class="nav-link">Work</a>
      <a href="about.html" class="nav-link">About Me</a>
      <a href="archives.html" class="nav-link">Archives</a>
      <a href="contact.html" class="nav-link nav-cta">Contact</a>
    </div>
    <div class="nav-right">
      <button class="theme-toggle" ...></button>
    </div>
  </div>
</nav>
```

**Comportamento dos links do nav:**
- Base: padding `0.4rem 0.75rem`, border-radius `8px`, cor `--text-2`
- Hover: background `--hover-overlay`, cor `--text-1`
- Em `@media (pointer: fine)`: gradient text sweep esquerda→direita com `--accent-text`

```css
@media (pointer: fine) {
  .nav-links a:not(.nav-cta) {
    background-image: linear-gradient(to right, var(--accent-text) 50%, var(--text-2) 50%);
    background-size: 200% 100%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: background-position 0.42s var(--ease);
  }
  .nav-links a:not(.nav-cta):hover,
  .nav-links a:not(.nav-cta).active {
    background-position: 0% 0;
    background-color: transparent;
  }
}
```

---

## Footer

### Footer mínimo (raiz `/`)
```html
<footer style="padding: 2rem; text-align: center; border-top: 1px solid var(--border); margin-top: 4rem;">
  <p style="font-size: 0.8rem; color: var(--text-3);">Lucas Nascimento · Lead Product Designer</p>
</footer>
```

### Footer completo (`/portfolio`)
```html
<footer>
  <div class="container footer-inner">
    <a href="index.html" class="footer-logo">Lucas<span>.</span></a>
    <nav class="footer-nav nav-links" aria-label="Footer navigation">
      <a href="index.html">Work</a>
      <a href="about.html">About Me</a>
      <a href="archives.html">Archives</a>
    </nav>
  </div>
</footer>
```

Os links do footer têm a classe `nav-links` aplicada no elemento `<nav>`, fazendo com que herdem **exatamente** o mesmo comportamento de hover do header (incluindo gradient sweep).

---

## Sistema de Animações (transitions.js)

### 1. Curtain de entrada
- `html::before` (CSS) cobre a página no load com um overlay
- JS adiciona `.curtain-reveal` (slide para baixo, 460ms) via `DOMContentLoaded`
- Depois adiciona `.curtain-done` (`display: none`)

### 2. Curtain de saída (ao clicar em links internos)
- JS cria `#page-curtain` dinamicamente
- Inclui spinner com `assets/icons/favicon.svg`
- Path do asset usa `window._ASSET_ROOT` (variável definida antes do script nas páginas em subpasta):
  ```html
  <script>window._ASSET_ROOT = "../";</script>
  <script src="../transitions.js" defer></script>
  ```
  Nas páginas da raiz: sem `_ASSET_ROOT` (default `''`)

### 3. Loading bar
- `<div id="loading-bar">` no topo do body
- Anima de 0% a 100% de width no load

### 4. Scroll reveal (IntersectionObserver)
- `.reveal` — fade + translateY (todos os elementos de conteúdo)
- `.reveal-card` — mesma animação, delay escalonado
- `.reveal-blur` — blur + fade + translateY (pull quotes, headings de impacto)
- `.case-header-entrance` — animação CSS pura (above-the-fold), via `--delay` CSS var

### 5. Custom cursor (apenas `@media (pointer: fine)`)
- `.cursor-dot` (8px) + `.cursor-ring` (36px) — `position: fixed`, `pointer-events: none`
- Em hover sobre `a, button, .case-card, etc.`: dot → 6px azul, ring → 54px + 0.75 opacity
- Em click: dot → 4px laranja (`--accent-2`), ring → 28px laranja
- `cursor: none !important` em todos os elementos interativos em `pointer: fine`

---

## Páginas — Conteúdo e Seções

### `index.html` (raiz — Work listing pública)

Nav mínimo. Uma seção: "Selected Work" com:
- 1 card featured: **Multipedidos** (com métricas: 10M+ accesses, 60% faster delivery)
- Grid 3 colunas: **IncludED**, **Keepeye**, **Electrolux**

Links dos cards apontam para `/project-*.html` (raiz, sem `/portfolio/`).

---

### `portfolio/index.html` (portfólio completo)

Nav completo. Seções:
1. **Hero** — nome, título, badge "Currently at Multipedidos", CTA links
2. **Stats strip** — 4 números: 10M+ accesses, 4M+ orders, 1K+ screens, 8.8 satisfaction
3. **Featured Work** — mesmo layout da raiz, mas links apontam para `project-*.html` (relativo ao `/portfolio/`)
4. **Expertise** — grid de cards com ícone + título + descrição
5. **AI banner inline** na seção de expertise

---

### `portfolio/about.html`

1. **Hero** — título scroll-driven com foto
2. **Intro** — grid 2 col: título esquerda, texto maior direita
3. **Story section** — fotos `assets/about-story/` com texto intercalado (scroll-driven)
4. **Experience accordion** — lista de empresas com toggle
5. **Services** — o que Lucas oferece

---

### `portfolio/archives.html`

Grid de projetos passados com links para Behance e outros.

---

### `portfolio/contact.html`

Formulário de contato + links sociais.

---

## Case Studies — Estrutura Comum

Todas as páginas de case study têm:

```html
<header class="case-header">
  <div class="case-header-inner">
    <div class="case-tags">
      <span class="tag accent">Categoria Principal</span>
      <span class="tag">Tag 2</span>
    </div>
    <h1 class="case-header-title case-header-entrance">
      Título<br /><em>Subtítulo em Fraunces italic</em>
    </h1>
    <p class="case-header-subtitle case-header-entrance">...</p>
    <div class="case-meta-grid case-header-entrance">
      <div class="case-meta-item">
        <p class="section-label">Company</p>
        <p class="case-meta-value">Nome<span>Detalhe</span></p>
      </div>
      <!-- Role, Timeline, Stack, Platform -->
    </div>
  </div>
  <div class="case-hero-visual case-header-entrance">
    <img src="..." />
  </div>
</header>
```

**Seções de case study usam `.section` com `padding-block: clamp(4rem, 8vw, 6rem)`.**

Imagens de projeto:
```html
<div class="container" style="padding-block: clamp(2rem, 4vw, 3rem);">
  <div class="project-full-image reveal" style="margin:0;">
    <img src="..." loading="lazy" />
  </div>
</div>
```

---

## Case Study: Multipedidos (`project-multipedidos.html`)

**Tags:** Multipedidos · 2024–2026 | Único designer | B2C + B2B food-tech

**Seções (em ordem):**
1. Context numbers — 10M+, 4M+, 1K+, 40+
2. Overview — grid 2 col: Situation + Mandate
3. [Imagem: project-screen.png]
4. Design System — texto + 3 `.ds-card`
5. [Imagem: project-image.png]
6. Consumer Platform — funnel (5 steps) + editorial grid (3 itens) + checkout flow + payment grid + checkout strip
7. [Vídeo: pedir-delivery.mp4]
8. Gestor B2B — intro + `.focus-callout` "Some Deliveries" (19 tags) + `.gestor-list` (6 linhas)
9. [Imagem: gestor-mockup.png]
10. Process — grid 2x2 com números decorativos
11. AI Highlight — "From 5 days to 2 days"
12. Outcomes — 3 métricas

**Deliveries (foco-callout):**
Kitchen Display System, Checkout & Payment, New Menu Builder, POS Redesign, Multiple Payers, Digital Wallet + PIX, Cashback System, Online Marketplace, Stock, Reports, Print System, CRM, Onboarding Agent, Payments Central, Orders System Redesign, Self-Service Plan Upgrades, New Sidebar, Delivery Routing, Marketing Campaigns

---

## Case Study: Keepeye (`project-keepeye.html`)

**Tags:** Dojo Smart Ways · 2022–2023 | Product Design + UX Research + Front-End | B2B SaaS

**Contexto:** KPI management platform. Lucas foi designer e front-end (Angular + Tailwind). Time de 4. Nota de satisfação 8.8/10.

**Seções:** Overview, Research, Architecture, Design System, Screens, Outcomes

---

## Case Study: IncludED (`project-included.html`)

**Tags:** PixelPunk · 2024–2026 | EdTech | Product Design + Design System + Accessibility

**Contexto:** SaaS para criação de PEIs (Planos Educacionais Individualizados). BNCC-compliant. Co-fundado em out/2024.

**Atenção:** Na versão pública (raiz `/project-included.html`), **NÃO mencionar Co-Founder** — apenas Lead Product Designer. A info de co-fundador aparece somente em `/portfolio/project-included.html`.

**Seções:** Problem, Solution, Research, Design System, Key Features, Outcomes

---

## Case Study: Electrolux (`project-electrolux.html`)

**Tags:** Electrolux · 2022–2023 | Design System + Data Viz + Global | NDA-aware

**Contexto:** Sistema de dashboards (Executive, Operational, Analytical). Adotado mundialmente. NDA ativo — sem dados reais ou telas internas.

**Nota:** O elemento visual abstrato dos dashboards (`.abstract-visual`) está com `display:none` temporariamente.

---

## Componentes CSS Reutilizáveis (classes principais)

```
Layout:
.container          — max-width centralizado com padding
.section            — padding-block: clamp(4rem, 8vw, 6rem)
.bg-tinted          — fundo levemente diferente (--bg-2)

Cards de Work:
.case-card          — card de projeto com visual + body
.case-card.featured — card grande em destaque (grid 2 col)
.case-card-visual   — área da imagem
.case-card-body     — conteúdo (tags, meta, título, desc, metrics, link)
.case-tags          — flex wrap de tags
.tag                — chip de categoria
.tag.accent         — chip em cor accent
.case-metrics       — grid de métricas numéricas
.case-link          — link "View Case Study" com ícone →

Case Study:
.case-header        — hero section do case study
.case-meta-grid     — grid de metadados (Company, Role, Timeline...)
.case-meta-item     — item individual do grid de meta
.case-meta-value    — valor + span (detalhe secundário)
.pull-quote-wrap    — citação de impacto centralizada
.focus-callout      — box "Some Deliveries" com tags pill
.focus-callout-items — flex wrap de spans

Seções específicas do Multipedidos:
.order-funnel       — steps horizontal (1-5)
.editorial-grid     — grid 3 col com números 01/02/03
.checkout-flow      — diagrama de flow (6 steps)
.payment-grid       — 2 col (online / presencial)
.checkout-strip     — 3 painéis com top-border colorido
.gestor-intro       — grid 2 col intro do Gestor
.gestor-list        — lista de linhas (label+title + descrição)
.gestor-row         — linha individual do gestor-list
.process-grid       — grid 2x2 com número decorativo via ::before
.ds-card            — card do Design System

Animação:
.reveal             — fade + translateY no scroll
.reveal-card        — idem com delay escalonado
.reveal-blur        — blur + fade + translateY
.case-header-entrance — animação CSS pura above-the-fold (usa --delay CSS var)
```

---

## Regras de Conteúdo

- **Nunca usar em-dash "—"** em nenhum texto. Substituir por vírgula, dois-pontos, ponto, ou reescrever.
- **PDV → POS** (sigla correta em inglês para Point of Sale)
- **Co-Founder:** visível apenas em `/portfolio/project-included`, nunca em `/project-included` (raiz pública)

---

## Arquivos do HTML atual (para referência na migração)

Os arquivos estão em `C:\Users\Lucas\Documents\Claude Projects\portfolio-main\`. O agente de migração deve ler os arquivos HTML diretamente para extrair o conteúdo exato de cada seção antes de recriar em Angular.

**Arquivos mais importantes para ler:**
- `style.css` — todos os tokens, componentes e animações CSS
- `transitions.js` — lógica completa de curtain, cursor, scroll reveal
- `portfolio/index.html` — home completa
- `portfolio/project-multipedidos.html` — case study mais complexo
- `portfolio/about.html` — página mais elaborada
- `project-multipedidos.html` — versão raiz (para comparar nav mínimo vs completo)
