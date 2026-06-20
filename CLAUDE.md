# Lucas — Preferências e Contexto

## Regras de escrita (SEMPRE aplicar)
- **Nunca usar travessão "—" (em-dash)** em nenhum texto, seja em respostas, conteúdo do portfólio, case studies, ou qualquer material criado. Substituir por vírgula, dois-pontos, ponto, ou reescrever a frase.

## Regras de comportamento (SEMPRE aplicar)
- **Nunca mentir sobre ações realizadas.** Se não conseguiu criar uma pasta, arquivo, mover algo ou qualquer outra ação: dizer exatamente o que aconteceu, o que foi possível, o que não foi, e o que requer permissão manual. Jamais confirmar algo como feito se não foi.

---

## Infraestrutura e contas

- **Domínio:** `lucasdonascimento.com`
- **Provedor de domínio (DNS):** Hostinger
- **GitHub:** `lucasnasci149`
- **Repo principal (portfólio):** `lucasnasci149/portfolio` — hospedado em GitHub Pages, aponta para `lucasdonascimento.com`
- **Repo subdomínio de trabalho:** `lucasnasci149/portfolio-work` — hospedado em GitHub Pages, aponta para `work.lucasdonascimento.com`
- **Subdomínio de trabalho:** `work.lucasdonascimento.com` — mostra apenas os 4 case studies, sem nav, sem dados pessoais, noindex. DNS: CNAME `work` → `lucasnasci149.github.io`
- **Git local do portfólio:** `C:\Users\Lucas\Documents\Claude Projects\portfolio-main\` (branch `main`, remote `origin`)
- **Git local do subdomínio:** `C:\Users\Lucas\Documents\Claude Projects\portfolio-work\` (branch `main`, remote `origin`)
- **Sandbox local:** `C:\Users\Lucas\Documents\Claude Projects\portfolio-sandbox\` (sem git, teste local)
- **Pasta Cowork conectada:** `C:\Users\Lucas\Documents\Claude Projects\` (pasta pai com os 3 projetos)
- Push pelo terminal Windows (PowerShell), não pelo bash do Claude (limitação do FUSE mount)

### Estrutura de pastas
```
C:\Users\Lucas\Documents\Claude Projects\
├── portfolio-main\      ← MAIN — lucasdonascimento.com — git: lucasnasci149/portfolio
├── portfolio-work\      ← SUBDOMAIN — work.lucasdonascimento.com — git: lucasnasci149/portfolio-work
└── portfolio-sandbox\   ← SANDBOX — teste local com portão de senha (sem git)
```

### Comandos PowerShell para push
```powershell
# Main (lucasdonascimento.com)
cd "C:\Users\Lucas\Documents\Claude Projects\portfolio-main"
git add .
git commit -m "mensagem"
git push origin main

# Subdomain (work.lucasdonascimento.com)
cd "C:\Users\Lucas\Documents\Claude Projects\portfolio-work"
git add .
git commit -m "mensagem"
git push origin main
```

---

## Perfil
- **Nome:** Lucas
- **Email:** lucas.luizdonascimento@gmail.com
- **Cargo atual:** Product Designer — experiência em B2C e B2B, plataformas de food delivery, SaaS e sistemas de gestão
- **Empresa atual:** Multipedidos (marca Pedir.Delivery)
- **Stack de trabalho:** Figma, design systems, pesquisa com usuários, A/B testing, IA aplicada ao design

---

## Projeto: Portfólio pessoal

### Stack técnico
- HTML estático + `style.css` + `transitions.js`
- Tema dark/light via `[data-theme="light"]` no elemento `html`
- Accent: `#5AA9FF` (dark) / `#1A56DB` (light) — variável `--accent` / `--accent-text`
- `--accent-2: #f0a060` (laranja secundário)
- Fonte serif: **Fraunces** (weight 300, italic para decorativo)
- Fonte sans: **Inter**
- Favicon: `assets/icons/favicon.svg` com fill `#5AA9FF`
- Sem em-dashes em nenhum arquivo do portfólio

### Páginas existentes
| Arquivo | Descrição |
|---|---|
| `index.html` | Home = Work (hero, featured projects, stats, expertise) |
| `about.html` | Sobre Lucas (hero scroll-driven, experiência accordion, services) |
| `contact.html` | Página de contato |
| `archives.html` | Arquivo de projetos passados |
| `project-keepeye.html` | Case study Keepeye |
| `project-multipedidos.html` | Case study Multipedidos / Pedir.Delivery |
| `project-included.html` | Case study IncludED/PixelPunk (a criar) |
| `project-electrolux.html` | Case study Electrolux — NDA-aware (a criar) |

### Navegação padrão (presente em todas as páginas)
Links: Work (`index.html`) / About (`about.html`) / Archives (`archives.html`) / Contact (`contact.html`)

### Micro-animações
- `transitions.js` compartilhado: loading bar, `.reveal` com IntersectionObserver, hover em cards
- Classe `.reveal` em todos os elementos que devem animar na entrada
- Classe `.reveal-card` para cards (mesma lógica)
- Classe `.reveal-blur` para pull quotes e headings de impacto (blur + fade + translateY)
- `.case-header-entrance` para elementos above-the-fold (animação CSS pura, sem JS)

### Sistema de curtain (transição de página)
- `html::before` cobre a página no carregamento. JS adiciona `.curtain-reveal` (slide para baixo, 460ms) e depois `.curtain-done` (`display:none`)
- Saída: `#page-curtain` criado via JS, inclui favicon spinner centralizado
- **Bug histórico corrigido:** `transitions.js` não tinha observer para `.reveal` e `.reveal-card`, apenas `.reveal-blur`. Fix: adicionado IIFE separado com `IntersectionObserver` para `'.reveal, .reveal-card'`

### Variáveis CSS principais
```css
--radius-sm: 8px
--radius-md: 16px
--radius-lg: 24px
--accent / --accent-text: #5AA9FF (dark) / #1A56DB (light)
--accent-2: #f0a060
--bg-1, --bg-2, --bg-3, --bg-4 (escala de fundos)
--border (cor de borda)
--text-1, --text-2, --text-3 (escala de texto)
--transition (transição padrão)
```

---

## Padrão de espaçamento dos case studies (DEFINITIVO)

Estabelecido e validado em junho/2025. Aplicar em TODOS os case studies, presentes e futuros.

### Regras base (CSS local em cada página)
```css
.section { padding-block: clamp(4rem, 8vw, 6rem); }
```

### Tipos de padding por contexto

| Contexto | Valor | Quando usar |
|---|---|---|
| Seção padrão | `clamp(4rem, 8vw, 6rem)` | Default via `.section` (não repetir inline) |
| Seção compacta | `clamp(2rem, 4vw, 3rem)` | Seções `bg-tinted`, entre seções conectadas |
| Pull-quote-wrap | `padding-block: clamp(2.5rem, 5vw, 4rem)` | Sempre simétrico |
| Reflection block | `padding-block: clamp(3rem, 6vw, 5rem)` | Próprio do componente |
| Container image spacer | `padding-block: clamp(2rem, 4vw, 3rem)` | `<div class="container">` com imagem |
| Join (colar seções) | `padding-top: 0` ou `padding-bottom: 0` | Para seções adjacentes da mesma bg |

### Regras críticas
1. **A seção APÓS um `.pull-quote-wrap` NÃO deve ter `padding-top:0`** — o pull-quote é um bloco visual independente (com bg e bordas), a seção seguinte precisa do padding-top completo
2. **Seções `bg-tinted` devem ser simétricas** — usar `padding-block: clamp(2rem, 4vw, 3rem)`, nunca `padding-top:0` (colaria o conteúdo na borda superior do bloco)
3. **Join com `0`** só é válido entre seções da mesma cor de fundo que devem se fundir visualmente
4. Nunca usar valores ad-hoc: `2rem`, `2.5rem`, `clamp(3rem,5vw,4rem)` em posições que deveriam seguir o padrão

### CSS de imagem (obrigatório em todos os case studies)
```css
.project-full-image {
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.project-full-image img {
  width: 100%;
  display: block;
}
```
**Atenção:** este CSS deve estar definido no `<style>` local de CADA case study. Sem ele, imagens não terão radius e não serão clipadas.

---

## Case study: project-multipedidos.html

### Produto
Multipedidos — dois produtos principais:
1. **Pedir.Delivery** (plataforma consumer de food delivery, B2C)
2. **Gestor** (plataforma B2B para restaurantes — POS/PDV system)

### Contexto completo da atuação

**Escopo e volume:**
- +40 demandas durante o período, divididas entre Gestor de Pedidos (POS) e Pedir.Delivery
- Empresa dividida em 6 times com demandas específicas (ex: time de serviços financeiros, time de pedidos)
- Base de +4.000 clientes (restaurantes)
- Único designer na empresa

**Processo de produto (evoluiu ao longo do tempo):**
- Começou com criação de telas e fluxos, evoluiu para processo de produto conciso
- Passou a envolver Engenharia desde o início do processo
- Entrevistas com clientes para entender dores da plataforma e do dia a dia em restaurantes
- Visitas presenciais a clientes para entender fluxo de trabalho
- Testes de usabilidade com protótipos antes de cada nova funcionalidade ou mudança
- Implementou Design Critique: reunia QA, CX, Diretoria, Engenharia e Produto para revisar protótipos, dar feedback, identificar débitos técnicos e fluxos de exceção
- Apenas após o Design Critique as telas eram criadas no Figma e entregues em handoff
- Implementou DEV Mode para handoff e Design System com fundação de tokens e componentes
- Ajudou a criar o documento de produto padronizado alinhado aos cards do Jira

**Principais entregas no Gestor (B2B/POS):**
- **Redesign do cardápio:** O fluxo original forçava o usuário a abandonar o fluxo de criação para criar dependências (ex: criar sabor de frango antes de criar a pizza). Redesenhou o fluxo completo para permitir criação in-context sem abandono do fluxo
- **Redesign do PDV (POS):** Facilitou seleção de clientes, produtos e pagamentos. Adicionou múltiplos pagadores e aprovação de pagamento múltipla (ex: Pix Automático)
- **Redesign de relatórios**
- **Redesign da Sidebar:** melhorou IA (Arquitetura de Informação) e experiência de navegação
- **Gestão de comandas de impressão:** refez o fluxo, incluindo personalização de templates
- **KDS (Kitchen Display System):** nova funcionalidade
- **Cashback:** nova funcionalidade
- **Carteira Multipedidos:** sistema para transações Pix e utilização de saldo
- **Integrações do sistema**
- **Campanhas de promoção**
- **CRM próprio da Multipedidos** para gestão de plataformas
- **Agente de onboarding** para novos usuários
- Fluxos de delivery, entre outros

**Principais entregas no Pedir.Delivery (B2C):**
- Redesign completo da plataforma: melhoria de fluxos, modos de pagamento e entrega
- Criação de múltiplos endereços na plataforma
- Melhoria dos fluxos de entrega e cadastro de endereços
- Modernização do design para adequação ao mercado e melhoria de usabilidade

**IA no processo:**
- Utilizou IA para criar telas mais rapidamente
- Protótipos a partir da documentação padronizada de produto
- Facilitou handoff do time
- Aumentou eficiência operacional geral
- Claude + Figma MCP para geração de specs e documentação: reduziu entrega de 5 para 2 dias

**Escala e complexidade:**
- Todas as mudanças na base do produto eram planejadas com migração cuidadosa
- Qualquer mudança estrutural era planejada em etapas para não impactar +4.000 clientes
- Inovação e manutenção de base ocorrendo em paralelo

### Seções e layouts (na ordem atual)
1. **Context** — 4 cards de números: 10M+ pedidos, 4M+ usuários, 1K+ restaurantes, 40+ cidades
2. **Overview** — grid 2 colunas: Situation + Mandate (texto)
3. **Design System** — texto + 3 `.ds-card` items
4. **Consumer Platform (Pedir.Delivery):**
   - Intro paragraph
   - `.order-funnel` — 5 steps (Menu, Item Selection, Cart, Checkout, Confirmation)
   - `.editorial-grid` — 3 itens numerados (01/02/03), layout aberto sem bordas de card
   - `<hr class="checkout-divider">`
   - "Transactional Flows" + `.checkout-flow` (6 steps diagram)
   - `.payment-grid` 2 colunas (Pay Online / Pay on Delivery)
   - `.checkout-strip` — 3 painéis com top-border colorido (azul/laranja/cinza)
5. **Gestor B2B Platform:**
   - `.gestor-intro` (grid 2 colunas: texto intro)
   - `.gestor-list` — 6 linhas horizontais (label+title fixo esquerda, descrição direita)
6. **Process** — `.process-grid` 2x2, cada card com número decorativo grande (::before)
7. **AI Highlight** — callout 60% improvement
8. **Outcomes** — 3 metric cards

### Status atual dos case studies
Todos os 4 case studies estão completos e publicados:
- `project-multipedidos.html` — completo
- `project-keepeye.html` — completo
- `project-included.html` — completo (IncludED / PixelPunk, co-fundador)
- `project-electrolux.html` — completo (NDA-aware, visualizações abstratas CSS)

### Princípio de layout do portfólio
**Cada seção deve ter um layout estruturalmente diferente.** Padrões disponíveis e já utilizados:
- Grid de cards com borda (`--bg-2`, `border: 1px solid var(--border)`)
- Lista horizontal rows (`.gestor-list`)
- Grid editorial aberto com números decorativos (`.editorial-grid`)
- Strip com top-border colorido (`.checkout-strip`)
- Grid 2x2 com número de fundo decorativo via `::before` (`.process-grid`)
- Diagrama de flow horizontal (`.checkout-flow`, `.order-funnel`)
- Grid de métricas / números grandes

Ao criar novos case studies, **nunca usar o mesmo layout estrutural em duas seções consecutivas.** Variar entre estas abordagens.

---

## Case study: project-keepeye.html — Keepeye (Dojo)

### Contexto do projeto
- **Empresa:** Dojo (agência/consultoria onde Lucas trabalhava)
- **Cliente-base:** Nidec (a ferramenta original foi criada para um projeto da Nidec)
- **Objetivo do negócio:** Dojo queria sair de trabalho 100% por projetos (receita variável, mão de obra constante) para ter um produto SaaS próprio com receita mais estável
- **Produto:** Keepeye — plataforma SaaS de métricas e KPIs com dashboard e calculadora interna

### O que o Keepeye resolve
- Empresas que não tinham confiança nos próprios dados, usando múltiplas planilhas desconectadas
- Baixa confiabilidade e rastreabilidade dos dados de performance
- Keepeye centralizava métricas, calculava fórmulas customizadas e exibia em dashboards

### Processo de design
- Entrevistas com profissionais de mercado que usavam KPIs no dia a dia (teste de ferramenta + levantamento de dores)
- Survey enviado para participantes do mercado: coletou feedback sobre uso de ferramentas de métricas
- Benchmarking de ferramentas concorrentes
- Análise de oportunidades internas e externas
- Priorização por RICE
- Desenvolvimento de componentes e todas as telas do sistema
- Entrevistas internas e externas de validação ao final do projeto

### Time e papel de Lucas
- Liderou o produto como designer
- Também atuou ativamente como **Front-End Developer** (Angular + Tailwind CSS)
- Time: 3 desenvolvedores + Lucas (total 4 pessoas)
- Uma das devs estava migrando de Front-End para UI/UX: **Lucas a mentorou no processo**

### Resultado
- **Nota de satisfação: 8.8/10** em entrevistas internas e externas pós-lançamento
- Produto SaaS funcional e lançado no mercado

---

## Case study: project-included.html — IncludED / PixelPunk

### Contexto do projeto
- **Empresa:** PixelPunk (co-fundada por Lucas em outubro/2024)
- **Produto:** IncludED — plataforma SaaS para criação e gestão de PEIs (Planos Educacionais Individualizados) para alunos de inclusão, BNCC-compliant
- **Colaboradores-chave:** neuropsicóloga + consultora pedagógica (com 20+ anos em escolas)
- **Stack:** Produto digital, Design System, IA aplicada à educação

### O que o IncludED resolve
- Lei Brasileira de Inclusão (Lei 13.146/2015) exige PEI para todo aluno com deficiência, mas professores não têm infraestrutura para criar e gerir esses documentos
- Relatórios clínicos chegam em linguagem que professores não conseguem aplicar
- Plataformas de gestão escolar no Brasil são feitas para administração, não para inclusão

### Diferenciais do produto
- PEI creation ligado ao BNCC (mapeamento de habilidades por etapa)
- IA para sugerir objetivos pedagógicos baseados no perfil do aluno
- Adaptation Council: feature gerada da pesquisa com neuropsicóloga — traduz linguagem clínica para orientação pedagógica
- Multi-role: professor, AEE, coordenador, cada um com escopo de dados correto
- Exporta PDF consolidado (PEI + PAEE) conforme Lei

### Processo de design
- Pesquisa com neuropsicóloga e consultora pedagógica antes de qualquer tela
- Cada sessão produziu artefatos: decisão de produto, regra, escolha de terminologia
- Auditoria de mercado: nenhum concorrente tinha fluxo BNCC + PEI + IA + multi-role
- Design System desde o início
- Papel de Lucas: co-fundador e único designer

---

## Case study: project-electrolux.html — Electrolux (NDA-aware)

### Contexto do projeto
- **Empresa:** Dojo (consultoria)
- **Cliente:** Electrolux (global) + Nidec
- **NDA:** Pode mostrar processo, metodologia e aprendizados. Não expor dados proprietários, telas reais ou métricas internas da Electrolux

### O problema
- Electrolux consumia dados via Excel, Google Sheets, Power BI sem nenhum padrão unificado, espalhado por toda a empresa
- Lucas foi contratado para trabalhar visualização de dados a partir de um Data Lake centralizado

### O que Lucas fez
- Criou dashboards em Power BI para diferentes contextos: Executivo, Operacional e Analítico
- Identificou oportunidade de padronização: criou templates reutilizáveis de dashboards
- Criou um sistema de visualização de dados com padrão único, adaptável a diferentes KPIs
- Criou um **manual de utilização** para que todos os times pudessem replicar os padrões sem depender de designers
- Implementou em todos os dashboards das **5 waves** do projeto (LATAM)
- O padrão foi apresentado ao board global e **implementado mundialmente** nas empresas da Electrolux

### Processo de trabalho
- Reuniões de **Business Understanding** com stakeholders: captação de regras de negócio, métricas, entendimento dos dados e dos times usuários
- Alinhamento com analistas de dados da Dojo e da Electrolux para entender as regras antes de construir
- Criação dos dashboards e processo de binding dos dados
- Validação com os times

### Nidec (projeto paralelo/relacionado)
- Também desenvolveu dashboards para Nidec no mesmo período
- Criou sistema de padronização e manual de criação de dashboards para Nidec
- Mesma metodologia: Business Understanding → analistas → criação → validação

### Posicionamento para o portfólio
- Foco no impacto de escala: padrão adotado globalmente pela Electrolux
- Foco no processo sistemático: templates, manual, diferentes contextos visuais
- Não mostrar dados reais: usar visualizações fictícias ou redacted

---

## Subdomínio work.lucasdonascimento.com

### Estrutura
- Repo local: `C:\Users\Lucas\Documents\Claude\portfolio-work\`
- Contém: `index.html` + cópias dos 4 case studies + `CNAME`
- **Não tem** `style.css` nem `transitions.js` locais — usa URLs absolutas do domínio principal

### Referências absolutas obrigatórias nos arquivos do subdomínio
```html
<link rel="stylesheet" href="https://lucasdonascimento.com/style.css" />
<script src="https://lucasdonascimento.com/transitions.js" defer></script>
<link rel="icon" href="https://lucasdonascimento.com/assets/icons/favicon.svg" />
<!-- imagens: src="https://lucasdonascimento.com/assets/..." -->
<!-- nav links: href="https://lucasdonascimento.com/index.html" etc. -->
```

### Links que ficam RELATIVOS no subdomínio
- Links entre case studies: `href="project-keepeye.html"` etc. (ficam no subdomínio)

### Workflow de sincronização
Sempre que atualizar case studies no portfólio principal, sincronizar o subdomínio:
```powershell
# Para cada arquivo atualizado:
# 1. Copiar de "Cowork Playground\" para "portfolio-work\"
# 2. Substituir style.css relativo por absoluto
# 3. Substituir transitions.js relativo por absoluto
# 4. Substituir src="assets/ por src="https://lucasdonascimento.com/assets/
# 5. Substituir hrefs de nav por absolutos
# 6. Manter hrefs entre case studies como relativos
```

---

## Tarefas em aberto (do projeto portfólio)
- Atualizar CLAUDE.md com o padrão de espaçamento quando aprovado (feito)

---

## Outros projetos / contextos que podem surgir
- **Curriculum (CV):** atualização com projetos e métricas reais do portfólio
- **LinkedIn:** atualização de perfil alinhado ao portfólio e posicionamento
