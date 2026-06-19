# Assets do site — guia de organização

Esta pasta é o ponto de entrada para todas as imagens, ícones e SVGs do portfólio.
Cada subpasta corresponde a um lugar específico do site. Coloque os arquivos
dentro da subpasta correspondente, de preferência já com os nomes sugeridos
abaixo (assim eu consigo referenciar direto sem precisar perguntar onde está
cada um). Se usar outros nomes, é só me avisar qual arquivo é qual.

Formatos: `.jpg` / `.png` para fotos, `.svg` para ícones/logos. Pode mandar em
alta resolução, eu ajusto compressão/otimização se precisar.

---

## profile/
Foto de perfil usada no hero da página About e na seção About da home.
- `lucas-profile.jpg` — foto principal (about.html hero + index.html About)

## about-story/
Fotos da seção "I'm a designer / musician / storyteller" (about.html, coluna
de fotos rolável). 4 fotos por bloco, na ordem em que aparecem:
- `designer-1.jpg` a `designer-4.jpg`
- `musician-1.jpg` a `musician-4.jpg`
- `storyteller-1.jpg` a `storyteller-4.jpg`

## projects/
Uma subpasta por projeto. Cada uma recebe um `cover.jpg` (capa usada nos
cards da home e de work.html) e, quando fizer sentido, screenshots extras
(`screenshot-1.jpg`, `screenshot-2.jpg`, ...) para a página de case study.

- `projects/keepeye/` → KPI Management Platform (card destaque na home,
  card em work.html, e hero + telas em project-keepeye.html)
- `projects/included-pixelpunk/` → IncludED (PixelPunk, card ♿ na home)
- `projects/electrolux/` → Electrolux Global Dashboard System (card ⚡ na
  home e em work.html)
- `projects/pedir-delivery/` → Food Ordering Platform (card 🛵 em work.html)
- `projects/yby/` → YBY Real Estate Branding (card 🏛 em work.html)
- `projects/taken/` → Game Design: Taken (card 🎮 em work.html)
- `projects/estudio149/` → Estúdio 149 Personal Branding (card 🎨 em
  work.html)

## testimonials/
Fotos de avatar para os depoimentos (index.html).
- `person-1.jpg`, `person-2.jpg` (adicione mais se houver mais depoimentos)

## icons/
Ícones/SVGs customizados que não sejam emojis (ex: ícones de redes sociais,
logos de empresas para o marquee, ícones de ferramentas). Pode usar nomes
descritivos, ex: `linkedin.svg`, `electrolux-logo.svg`.

## logos/
Logos de empresas/clientes, caso queira substituir o marquee em texto
("Companies & Clients" na home) por logos.

---

### Como vamos usar
Depois de colocar os arquivos, é só me avisar (ou simplesmente dizer "pode
usar os assets que coloquei") que eu localizo tudo, troco os placeholders
(emojis e divs cinza) pelas imagens reais e ajusto o `alt text` de cada uma
para acessibilidade.
