# UruBots Docs

Documentación del equipo **UruBots** — equipo de robótica de UTEC — construida con [Docusaurus](https://docusaurus.io/).

**Sitio publicado:** https://urubots.github.io/urubot-docs/

## Contenido

El sitio aloja la documentación del "Portal UruBots":

- **Bienvenida** (`docs/bienvenida/`) — qué es UruBots, normas y seguridad, primera semana, cómo pedir ayuda.
- **Rutas formativas** (`docs/rutas/`) — Git/GitHub, Linux y Python, ROS 2, autos autónomos, RoboCup @Home y documentación de experimentos.
- **Plantillas** (`docs/plantillas/`) — tareas, recursos, actas de reunión y decisiones técnicas.
- **Reuniones** (`docs/reuniones.md`) y **TurtleBots** (`docs/turtlebots-inventario.md`).
- **Blog** (`blog/`) — novedades del equipo.

## Stack

- [Docusaurus](https://docusaurus.io/) 3.10 (classic preset)
- [React](https://react.dev/) 19
- [pnpm](https://pnpm.io/) 10 + Node.js 24 (LTS)
- [Mermaid](https://mermaid.js.org/) para diagramas

## Desarrollo

### Con Dev Container (recomendado)

El repo incluye un `.devcontainer` con Node 24 y pnpm ya configurados. En VS Code: **"Reopen in Container"**.

### Local

```bash
pnpm install   # instala dependencias
pnpm start     # servidor de desarrollo en http://localhost:3000
pnpm build     # build de producción en ./build
pnpm serve     # sirve el build localmente
```

## Internacionalización (i18n)

- **Idioma por defecto:** español (`es`).
- **Inglés (`en`):** habilitado; las traducciones viven en `i18n/en/`.
- Para traducir una página React, usá `translate()` de `@docusaurus/Translate` y agregá la traducción en `i18n/en/code.json`.

## Despliegue

El deploy es automático con **GitHub Actions**:

- Push a `main` → `.github/workflows/deploy.yml` compila y publica en GitHub Pages.
- Pull Request a `main` → `.github/workflows/test-deploy.yml` valida que el sitio compile.

URL: `https://urubots.github.io/urubot-docs/`

> El repo debe mantenerse **público** (GitHub Pages no está disponible para repos privados en el plan free).

## Consumir la documentación con MCP (IA)

La documentación se puede exponer como un **servidor MCP** (Model Context Protocol) para que asistentes de IA (Claude Code, Cursor, VS Code, Codex, Gemini CLI, etc.) la busquen y lean con las herramientas `docs_search` y `docs_fetch`.

Se logra con el plugin [`docusaurus-plugin-mcp-server`](https://github.com/scalvert/docusaurus-plugin-mcp-server) — compatible con este proyecto (Docusaurus 3.x, React 19 y Node ≥ 22).

### Setup

```bash
pnpm add docusaurus-plugin-mcp-server zod
```

```js
// docusaurus.config.js
export default {
  plugins: [
    ['docusaurus-plugin-mcp-server', {server: {name: 'urubot-docs', version: '1.0.0'}}],
  ],
};
```

`pnpm build` genera el índice en `build/mcp/bundle.json`.

### ⚠️ Limitación con GitHub Pages

GitHub Pages es un **host estático**: no ejecuta código, por lo que **no puede responder las peticiones MCP**. Para exponer el endpoint hace falta un serverless:

- **Local (dev):** `createNodeServer` sirviendo `build/mcp`.
- **Producción:** desplegar el endpoint en Cloudflare Workers, Vercel o Netlify, y apuntar `server.url` a ese endpoint (los links de los resultados siguen saliendo de `url`/`baseUrl`, o sea, de GitHub Pages).

Guía oficial: <https://docusaurus-plugin-mcp-server.vercel.app/docs/deploy/static-hosts>

### Conectar un asistente

```bash
claude mcp add --transport http urubot-docs https://<endpoint>/mcp
```

## Estructura

```
docs/          # documentación (es, idioma por defecto)
i18n/en/       # traducciones al inglés
blog/          # blog del equipo
src/           # páginas y componentes React
static/        # assets estáticos (logo, favicon, imágenes)
docusaurus.config.js
sidebars.js
```

## Contribuir

1. Creá una rama y hacé tus cambios.
2. Si tocás contenido, mantené sincronizada la traducción al inglés en `i18n/en/`.
3. Verificá el build con `pnpm build`.
4. Abrí un Pull Request a `main`.
