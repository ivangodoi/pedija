# Deploy online gratuito (Cloudflare Pages + KV)

Este projeto torna o app acessível pela internet com o backend funcionando, para
você demonstrar ao mercado: pedido feito no celular do cliente aparece no admin
em qualquer lugar (sem depender do mesmo Wi-Fi).

## O que está nesta pasta

- `index.html`, `admin.html`, `app.js`, `xlsx.full.min.js` – a loja e o painel (estáticos)
- `functions/api/estado.js` – o backend/API (`GET` e `POST /api/estado`) que grava no KV
- `wrangler.toml`, `_headers.json` – configurações de apoio

A persistência (produtos + pedidos + config) fica num **Cloudflare KV** (de graça,
100 mil leituras/dia – mais que suficiente para um pitch).

## Passo a passo (primeira vez, ~20 min)

### 1. Criar conta gratuita no Cloudflare
- Acesse https://dash.cloudflare.com/sign-up e crie a conta grátis.

### 2. Criar o namespace KV (uma vez)
- No painel do Cloudflare, em **Workers & Pages** > **KV** > **Create a namespace**.
- Nome: `MERCADO_STATE` (ou outro qualquer). Anote o **ID** do namespace.

### 3. Subir os arquivos num repositório Git (ex.: GitHub)
- Crie um repositório novo (pode ser privado) e envie **todo o conteúdo desta pasta `cloudflare/`**
  para a raiz dele (incluindo a subpasta `functions/`).
- Ex.: `git init`, `git add .`, `git commit`, `git remote add origin <repositorio>`, `git push`.

### 4. Criar o projeto no Cloudflare Pages
- No painel: **Workers & Pages** > **Create application** > aba **Pages** > **Connect to Git**.
- Escolha o repositório.
- Em configuração:
  - **Production branch**: `main`
  - **Build command**: deixe vazio
  - **Build output directory**: `/` (raiz)
- Clique **Save and Deploy**. Ao terminar, terá uma URL tipo `https://xyz.pages.dev`.

### 5. Conectar o KV ao projeto (obrigatório)
- No projeto Pages, vá em **Settings** > **Functions** > **KV namespace bindings** > **Add binding**.
- **Variable name**: `STATE`
- **KV namespace**: selecione o `MERCADO_STATE` criado no passo 2.
- **Save**. Depois faça um novo deploy (ou `git push` vazio) para aplicar.

### 6. Testar
- Abra a URL do projeto e acesse `/admin.html` (painel) em qualquer aparelho e
  `/index.html` (loja) em outro. O primeiro acesso "planta" o catálogo padrão.

## Dica para apresentação
A primeira pessoa que abrir a loja em branco será quem "planta" os produtos padrão.
Para garantir, abra antes o `/admin.html` no seu navegador e verifique o catálogo
carregado antes de demonstrar.

## Limites gratuitos (Folha gratuita)
- Armazenamento KV: até 1 GB.
- Requests de Functions: 100.000/dia.
- Banda de estáticos: ilimitada.
