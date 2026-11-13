# AGENTS.md

Guía para agentes de IA (y contribuyentes) que trabajan en este repositorio.

## Qué es este proyecto

Sitio de documentación del equipo **UruBots** (robótica, UTEC), construido con **Docusaurus 3.10**.

- **Idioma por defecto:** español (`es`), con traducciones al inglés (`en`).
- **URL:** https://urubots.github.io/urubot-docs/

## Stack y herramientas

- Node.js 24 (LTS) y pnpm 10.
- Docusaurus 3.10 (classic preset) + React 19.
- Mermaid para diagramas (habilitado en `markdown.mermaid`).
- MCP opcional: `docusaurus-plugin-mcp-server` para exponer los docs como servidor MCP.
- Deploy automático a GitHub Pages vía GitHub Actions.

## Comandos

```bash
pnpm install   # instala dependencias (actualiza pnpm-lock.yaml)
pnpm start     # servidor de desarrollo en http://localhost:3000
pnpm build     # build de producción en ./build
pnpm serve     # sirve el build localmente
```

## Reglas importantes

1. **Usá pnpm** (no npm ni yarn). El lockfile es `pnpm-lock.yaml`.
2. **No edites `node_modules/`, `build/` ni `.docusaurus/`** (están ignorados).
3. **`onBrokenLinks: 'throw'`** está activo: cualquier enlace roto rompe el build. Verificá los enlaces.
4. **i18n siempre sincronizado:** el contenido por defecto (`es`) vive en `docs/`, `blog/` y `src/`. Cada cambio de contenido debe reflejarse en:
   - `i18n/en/docusaurus-plugin-content-docs/current/` (docs)
   - `i18n/en/docusaurus-plugin-content-blog/` (blog)
   - `i18n/en/code.json` (strings de React vía `translate()`)
5. **Registro npm público:** `.npmrc` apunta a `registry.npmjs.org`. No lo cambies.
6. **Build scripts de pnpm:** `@swc/core` y `core-js` están permitidos en `pnpm-workspace.yaml` (`onlyBuiltDependencies`). No los quites.

## Estructura de contenido

- `docs/` — documentación en español. Secciones: `bienvenida/`, `rutas/`, `plantillas/`, más `reuniones.md` y `turtlebots-inventario.md`.
- `docs/*/_category_.json` — etiqueta y orden de cada sección en la sidebar.
- `sidebars.js` — sidebar autogenerada (`docsSidebar`).
- `blog/` — posts del equipo (front matter: `slug`, `authors`, `tags`).
- `i18n/en/` — traducciones al inglés.
- `docusaurus.config.js` — i18n, navbar, footer, colorMode, mermaid y presets.
- `.devcontainer/` — devcontainer con Node 24 + pnpm.
- `.github/workflows/` — deploy y test-deploy.

## Convenciones de front matter (docs)

```yaml
---
sidebar_position: N   # orden dentro de la sección
nivel: inicial        # inicial | general
areas:                # áreas temáticas
  - General
  - Bienvenida
estado: borrador      # estado del contenido
---
```

## Enlaces internos

- Dentro de `docs/`: usar rutas relativas con extensión `.md` (ej. `../bienvenida/que-es-urubots.md`).
- Desde `blog/` hacia `docs/`: usar rutas absolutas de sitio (ej. `/docs/intro`). **No** usar rutas relativas de archivo (`../../docs/...`) porque el checker de enlaces del blog las marca como rotas.

## Estilo

- Tipografía Inter, color primario `#4A6CF7`, modo oscuro por defecto.
- Tema y estilos globales en `src/css/custom.css`.
- Botones píldora y gradiente azul→cian replicando `urubots.uy`.

## Despliegue

- Push a `main` → deploy automático a GitHub Pages (`.github/workflows/deploy.yml`).
- PR a `main` → build de verificación (`.github/workflows/test-deploy.yml`).
- El repo debe mantenerse **público** (GitHub Pages no funciona en repos privados del plan free).

## MCP (opcional)

- El plugin `docusaurus-plugin-mcp-server` (si está instalado) expone los docs como MCP; `pnpm build` genera `build/mcp/bundle.json`.
- Herramientas expuestas: `docs_search` (búsqueda BM25) y `docs_fetch` (página/sección como Markdown).
- **GitHub Pages es estático:** no puede servir el endpoint MCP. En producción requiere un serverless (Cloudflare Workers/Vercel/Netlify) con `server.url` apuntando a ese endpoint; en local se usa `createNodeServer`.

## Checklist antes de terminar una tarea

- [ ] `pnpm build` pasa para `es` y `en`.
- [ ] Si cambiaste contenido, actualizaste `i18n/en/`.
- [ ] No hay enlaces rotos (`onBrokenLinks: 'throw'`).
- [ ] No tocaste `node_modules/` ni `build/`.
- [ ] (Si usás MCP) el bundle `build/mcp/bundle.json` se generó correctamente.
