const CHAVE = 'estado.v2';

function mergeEstado(atual, novo) {
  const mapPedidos = new Map();
  if (Array.isArray(atual.pedidos)) for (const p of atual.pedidos) if (p && p.codigo) mapPedidos.set(String(p.codigo), p);
  if (Array.isArray(novo.pedidos)) for (const p of novo.pedidos) if (p && p.codigo) mapPedidos.set(String(p.codigo), p);
  const mapProd = new Map();
  if (Array.isArray(atual.produtos)) for (const p of atual.produtos) if (p && p.id) mapProd.set(String(p.id), p);
  if (Array.isArray(novo.produtos)) for (const p of novo.produtos) if (p && p.id) mapProd.set(String(p.id), p);
  return {
    produtos: Array.from(mapProd.values()),
    pedidos: Array.from(mapPedidos.values()),
    config: (novo && novo.config) || (atual && atual.config) || null,
  };
}

async function carregar(env) {
  try {
    const raw = await env.STATE.get(CHAVE);
    if (!raw) return { produtos: [], pedidos: [], config: null };
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.produtos)) parsed.produtos = [];
    if (!Array.isArray(parsed.pedidos)) parsed.pedidos = [];
    return parsed;
  } catch (e) {
    return { produtos: [], pedidos: [], config: null };
  }
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (!url.pathname.endsWith('/api/estado')) return context.next();

  if (context.request.method === 'GET') {
    const estado = await carregar(context.env);
    return json(estado);
  }

  if (context.request.method === 'POST') {
    let body;
    try { body = await context.request.json(); } catch (e) { return json({ ok: false, erro: 'json invalido' }, 400); }
    const atual = await carregar(context.env);
    const merged = mergeEstado(atual, body);
    await context.env.STATE.put(CHAVE, JSON.stringify({ produtos: merged.produtos, pedidos: merged.pedidos, config: merged.config }));
    return json({ ok: true, pedidos: merged.pedidos.length, produtos: merged.produtos.length });
  }

  return json({ ok: false, erro: 'metodo nao suportado' }, 405);
}
