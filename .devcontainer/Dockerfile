# Node 24 LTS sobre Debian (slim)
FROM node:24-slim

# pnpm 10 como gestor de paquetes
RUN npm install --global pnpm@10 \
    && pnpm config set --global store-dir /pnpm/store

# Directorio del store de pnpm (se monta como volumen persistente)
RUN mkdir -p /pnpm/store
