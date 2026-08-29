window.MERCADO = (() => {
  const KEYS = {
    produtos: 'mercado.produtos.v1',
    pedidos: 'mercado.pedidos.v1',
    config: 'mercado.config.v1',
    cesta: 'mercado.cesta.v1',
  };

  const CATEGORIA_EMOJI = {
    'Hortifrúti': '🥕',
    'Açougue': '🥩',
    'Laticínios': '🥛',
    'Padaria': '🥖',
    'Mercearia': '🌾',
    'Bebidas': '🥤',
    'Higiene': '🧼',
    'Limpeza': '🧴',
    'Casa': '🏠',
    'Pets': '🐾',
    'Snacks': '🍪',
    'Congelados': '🧊',
  };

  const PRODUTOS_PADRAO = [
    { id: 'p01', nome: 'Banana Prata', categoria: 'Hortifrúti', preco: 4.99, unidade: 'kg', emoji: '🍌', descricao: 'Resistente e doce' },
    { id: 'p02', nome: 'Maçã Fuji', categoria: 'Hortifrúti', preco: 6.49, unidade: 'kg', emoji: '🍎', descricao: 'Crocante e suculenta' },
    { id: 'p03', nome: 'Tomate Italiano', categoria: 'Hortifrúti', preco: 7.90, unidade: 'kg', emoji: '🍅', descricao: 'Fresco selecionado' },
    { id: 'p04', nome: 'Batata', categoria: 'Hortifrúti', preco: 3.99, unidade: 'kg', emoji: '🥔', descricao: 'Ideal para purê e fritura' },
    { id: 'p05', nome: 'Cebola', categoria: 'Hortifrúti', preco: 4.49, unidade: 'kg', emoji: '🧅', descricao: 'Cebola amarela' },
    { id: 'p06', nome: 'Alface Americana', categoria: 'Hortifrúti', preco: 2.99, unidade: 'un', emoji: '🥬', descricao: 'Crocante e fresca' },
    { id: 'p07', nome: 'Cenoura', categoria: 'Hortifrúti', preco: 3.49, unidade: 'kg', emoji: '🥕', descricao: 'Fresca e firme' },
    { id: 'p08', nome: 'Abacaxi Pérola', categoria: 'Hortifrúti', preco: 6.99, unidade: 'un', emoji: '🍍', descricao: 'Doce e maduro' },

    { id: 'p09', nome: 'Patinho Moído', categoria: 'Açougue', preco: 28.90, unidade: 'kg', emoji: '🥩', descricao: 'Magro, ideal para molhos' },
    { id: 'p10', nome: 'Frango Inteiro', categoria: 'Açougue', preco: 12.49, unidade: 'kg', emoji: '🍗', descricao: 'Resfriado' },
    { id: 'p11', nome: 'Picanha', categoria: 'Açougue', preco: 62.90, unidade: 'kg', emoji: '🥩', descricao: 'Fatiada para churrasco' },
    { id: 'p12', nome: 'Coxa e Sobrecoxa', categoria: 'Açougue', preco: 13.90, unidade: 'kg', emoji: '🍗', descricao: 'Com osso' },

    { id: 'p13', nome: 'Leite Integral 1L', categoria: 'Laticínios', preco: 4.79, unidade: 'un', emoji: '🥛', descricao: 'Caixinha 1 litro' },
    { id: 'p14', nome: 'Queijo Mussarela', categoria: 'Laticínios', preco: 34.90, unidade: 'kg', emoji: '🧀', descricao: 'Fatiado' },
    { id: 'p15', nome: 'Ovos Brancos', categoria: 'Laticínios', preco: 11.90, unidade: 'dz', emoji: '🥚', descricao: 'Dúzia' },
    { id: 'p16', nome: 'Manteiga com Sal', categoria: 'Laticínios', preco: 8.49, unidade: 'un', emoji: '🧈', descricao: '200g' },
    { id: 'p17', nome: 'Iogurte Natural', categoria: 'Laticínios', preco: 6.90, unidade: 'un', emoji: '🥛', descricao: 'Pote 170g' },

    { id: 'p18', nome: 'Pão Francês', categoria: 'Padaria', preco: 12.90, unidade: 'kg', emoji: '🥖', descricao: 'Assado na hora' },
    { id: 'p19', nome: 'Pão de Forma Integral', categoria: 'Padaria', preco: 7.49, unidade: 'un', emoji: '🍞', descricao: 'Fatiado 450g' },
    { id: 'p20', nome: 'Bolo Caseiro de Fubá', categoria: 'Padaria', preco: 15.90, unidade: 'un', emoji: '🍰', descricao: 'Feito na padaria' },
    { id: 'p21', nome: 'Croissant de Manteiga', categoria: 'Padaria', preco: 6.50, unidade: 'un', emoji: '🥐', descricao: 'Fofo e amanteigado' },

    { id: 'p22', nome: 'Arroz Tipo 1', categoria: 'Mercearia', preco: 27.90, unidade: '5kg', emoji: '🌾', descricao: 'Saco 5 kg' },
    { id: 'p23', nome: 'Feijão Carioca', categoria: 'Mercearia', preco: 9.90, unidade: '1kg', emoji: '🫘', descricao: 'Saco 1 kg' },
    { id: 'p24', nome: 'Macarrão Espaguete', categoria: 'Mercearia', preco: 4.99, unidade: 'un', emoji: '🍝', descricao: 'Pacote 500g' },
    { id: 'p25', nome: 'Óleo de Soja', categoria: 'Mercearia', preco: 7.49, unidade: 'un', emoji: '🫙', descricao: 'Garrafa 900ml' },
    { id: 'p26', nome: 'Açúcar Cristal', categoria: 'Mercearia', preco: 4.29, unidade: '1kg', emoji: '🍬', descricao: 'Saco 1 kg' },
    { id: 'p27', nome: 'Café Torrado e Moído', categoria: 'Mercearia', preco: 14.90, unidade: 'un', emoji: '☕', descricao: 'Pacote 500g' },
    { id: 'p28', nome: 'Farinha de Trigo', categoria: 'Mercearia', preco: 4.99, unidade: '1kg', emoji: '🌾', descricao: 'Saco 1 kg' },

    { id: 'p29', nome: 'Refrigerante Cola 2L', categoria: 'Bebidas', preco: 10.49, unidade: 'un', emoji: '🥤', descricao: 'Garrafa 2 litros' },
    { id: 'p30', nome: 'Refrigerante Guaraná 2L', categoria: 'Bebidas', preco: 9.49, unidade: 'un', emoji: '🥤', descricao: 'Garrafa 2 litros' },
    { id: 'p31', nome: 'Água Mineral 500ml', categoria: 'Bebidas', preco: 2.49, unidade: 'un', emoji: '💧', descricao: 'Sem gás' },
    { id: 'p32', nome: 'Suco de Laranja 1L', categoria: 'Bebidas', preco: 8.90, unidade: 'un', emoji: '🧃', descricao: 'Caixinha 1 litro' },
    { id: 'p33', nome: 'Cerveja Lata 350ml', categoria: 'Bebidas', preco: 3.99, unidade: 'un', emoji: '🍺', descricao: 'Gelada (unidade)' },
    { id: 'p34', nome: 'Cerveja Long Neck', categoria: 'Bebidas', preco: 6.90, unidade: 'un', emoji: '🍺', descricao: '330ml' },

    { id: 'p35', nome: 'Papel Higiênico', categoria: 'Higiene', preco: 17.90, unidade: 'pct', emoji: '🧻', descricao: 'Pacote com 4 rolos' },
    { id: 'p36', nome: 'Sabonete', categoria: 'Higiene', preco: 2.99, unidade: 'un', emoji: '🧼', descricao: '90g' },
    { id: 'p37', nome: 'Shampoo', categoria: 'Higiene', preco: 15.90, unidade: 'un', emoji: '🧴', descricao: '300ml' },
    { id: 'p38', nome: 'Creme Dental', categoria: 'Higiene', preco: 4.99, unidade: 'un', emoji: '🪥', descricao: '90g' },

    { id: 'p39', nome: 'Detergente', categoria: 'Limpeza', preco: 2.79, unidade: 'un', emoji: '🧴', descricao: '500ml' },
    { id: 'p40', nome: 'Sabão em Pó', categoria: 'Limpeza', preco: 15.90, unidade: 'un', emoji: '🧺', descricao: 'Pacote 1 kg' },
    { id: 'p41', nome: 'Água Sanitária 1L', categoria: 'Limpeza', preco: 4.49, unidade: 'un', emoji: '🧴', descricao: 'Garrafa 1 litro' },
    { id: 'p42', nome: 'Esponja de Limpeza', categoria: 'Limpeza', preco: 2.29, unidade: 'un', emoji: '🧽', descricao: 'Unidade' },

    { id: 'p43', nome: 'Ração para Cães', categoria: 'Pets', preco: 29.90, unidade: '1kg', emoji: '🐶', descricao: 'Sabor carne' },
    { id: 'p44', nome: 'Ração para Gatos', categoria: 'Pets', preco: 26.90, unidade: '1kg', emoji: '🐱', descricao: 'Sabor peixe' },

    { id: 'p45', nome: 'Biscoito Recheado', categoria: 'Snacks', preco: 3.99, unidade: 'un', emoji: '🍪', descricao: 'Sabor chocolate' },
    { id: 'p46', nome: 'Barra de Chocolate', categoria: 'Snacks', preco: 6.90, unidade: 'un', emoji: '🍫', descricao: '90g' },
    { id: 'p47', nome: 'Salgadinho', categoria: 'Snacks', preco: 8.49, unidade: 'un', emoji: '🥨', descricao: 'Pacote 118g' },
  ];

  const CONFIG_PADRAO = {
    nomeMercado: 'Mercado Bom Preço',
    slogan: 'Tudo o que você precisa, entregue na sua porta',
    taxaEntrega: 6.99,
    freteGratisAcima: 99.0,
    pedidoMinimo: 20.0,
    whatsapp: '',
    horario: 'Todos os dias, das 7h às 22h',
  };

  const chiclete = {
    carregar(key, padrao) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return JSON.parse(JSON.stringify(padrao));
        return JSON.parse(raw);
      } catch (e) {
        return JSON.parse(JSON.stringify(padrao));
      }
    },
    salvar(key, valor) {
      try {
        localStorage.setItem(key, JSON.stringify(valor));
      } catch (e) {
        log('Erro ao salvar dados: ' + e.message);
      }
    },
  };

  /* ---------- Sincronizacao via servidor (API) ----------
     Quando o app e servido por servidor.ps1, os dados sao
     salvos num arquivo compartilhado (dados.json) no PC, para
     que a loja e o admin funcionem em aparelhos diferentes.
     Sem servidor, usa apenas o localStorage do navegador. */
  const viaAPI = typeof location !== 'undefined' &&
    (location.protocol === 'http:' || location.protocol === 'https:');

  function apiCarregarEstado() {
    return fetch('api/estado', { cache: 'no-store' })
      .then(r => { if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
      .catch(e => { log('API indisponivel (costuma ser ao abrir via file://): ' + e.message); return null; });
  }

  function apiSalvarEstado(estado) {
    const corpo = JSON.stringify(estado);
    return fetch('api/estado', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: corpo })
      .catch(e => { log('API salvar falhou: ' + e.message); throw e; });
  }

  function lerEstadoLocal() {
    return {
      produtos: carregar(KEYS.produtos, PRODUTOS_PADRAO),
      pedidos: carregar(KEYS.pedidos, []),
      config: carregar(KEYS.config, CONFIG_PADRAO),
    };
  }

  function salvarEstadoLocal(estado) {
    salvar(KEYS.produtos, estado.produtos);
    salvar(KEYS.pedidos, estado.pedidos);
    salvar(KEYS.config, estado.config);
  }

  /* cache em memoria sincronizado com o servidor */
  let memoria = null;

  function carregarEstadoPromise() {
    if (!viaAPI) return Promise.resolve(null);
    return apiCarregarEstado().then(est => {
      if (!est) return null;
      if (!Array.isArray(est.pedidos)) est.pedidos = [];
      if (!Array.isArray(est.produtos)) est.produtos = [];

      /* primeira inicializacao no servidor: planta os produtos padrao */
      if ((!est.produtos || est.produtos.length === 0) && !est.config) {
        est.produtos = JSON.parse(JSON.stringify(PRODUTOS_PADRAO));
        est.config = JSON.parse(JSON.stringify(CONFIG_PADRAO));
        salvarEstadoLocal({ produtos: est.produtos, pedidos: est.pedidos, config: est.config });
        apiSalvarEstado({ produtos: est.produtos, pedidos: est.pedidos, config: est.config });
      } else {
        salvarEstadoLocal({ produtos: est.produtos, pedidos: est.pedidos, config: est.config });
      }
      memoria = est;
      return est;
    });
  }

  function atualizarParte(campo, valor, tipo) {
    if (viaAPI && memoria) {
      memoria[campo] = valor;
      apiSalvarEstado(memoria);
    }
    if (tipo) localStorageRemove(campo);
  }

  function localStorageRemove(campo) {
    const k = campo === 'produtos' ? KEYS.produtos : campo === 'pedidos' ? KEYS.pedidos : campo === 'config' ? KEYS.config : null;
    if (k) { try { localStorage.removeItem(k); } catch (e) {} }
  }

  function log(msg) {
    if (window.console && console.info) console.info('[MercadoApp] ' + msg);
  }

  const carregar = (key, padrao) => chiclete.carregar(key, padrao);
  const salvar = (key, valor) => chiclete.salvar(key, valor);

  function categorias() {
    const mapa = {};
    produtos().forEach(p => {
      if (!mapa[p.categoria]) mapa[p.categoria] = { nome: p.categoria, emoji: emojiCategoria(p.categoria) };
    });
    return Object.values(mapa).sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  }

  function emojiCategoria(nome) {
    return CATEGORIA_EMOJI[nome] || '🛒';
  }

  function produtos() {
    if (viaAPI && memoria && Array.isArray(memoria.produtos)) return memoria.produtos;
    if (viaAPI) return (memoria && memoria.produtos) ? memoria.produtos : carregar(KEYS.produtos, PRODUTOS_PADRAO);
    return carregar(KEYS.produtos, PRODUTOS_PADRAO);
  }

  function salvarProdutos(lista) {
    if (viaAPI && memoria) { memoria.produtos = lista; apiSalvarEstado(memoria); }
    else salvar(KEYS.produtos, lista);
  }

  function pedidos() {
    if (viaAPI && memoria && Array.isArray(memoria.pedidos)) return memoria.pedidos;
    if (viaAPI) return (memoria && memoria.pedidos) ? memoria.pedidos : carregar(KEYS.pedidos, []);
    return carregar(KEYS.pedidos, []);
  }

  function salvarPedidos(lista) {
    if (viaAPI && memoria) { memoria.pedidos = lista; apiSalvarEstado(memoria); }
    else salvar(KEYS.pedidos, lista);
  }

  function config() {
    if (viaAPI && memoria && memoria.config) return Object.assign(JSON.parse(JSON.stringify(CONFIG_PADRAO)), memoria.config);
    return Object.assign(JSON.parse(JSON.stringify(CONFIG_PADRAO)), carregar(KEYS.config, CONFIG_PADRAO));
  }

  function salvarConfig(nova) {
    const completa = Object.assign(JSON.parse(JSON.stringify(CONFIG_PADRAO)), nova);
    if (viaAPI && memoria) { memoria.config = completa; apiSalvarEstado(memoria); }
    else salvar(KEYS.config, completa);
  }

  function formatarPreco(valor) {
    return (Number(valor) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function agoraISO() {
    return new Date().toISOString();
  }

  function gerarCodigoPedido() {
    const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    let codigo = 'P-';
    for (let i = 0; i < 5; i++) codigo += chars[Math.floor(Math.random() * chars.length)];
    return codigo;
  }

  const STATUS = [
    { id: 'novo', rotulo: 'Novo', cor: '#f59e0b' },
    { id: 'confirmado', rotulo: 'Confirmado', cor: '#2563eb' },
    { id: 'em_preparo', rotulo: 'Em preparo', cor: '#7c3aed' },
    { id: 'em_transito', rotulo: 'Em trânsito', cor: '#0891b2' },
    { id: 'entregue', rotulo: 'Entregue', cor: '#16a34a' },
    { id: 'cancelado', rotulo: 'Cancelado', cor: '#dc2626' },
  ];

  function statusInfo(id) {
    return STATUS.find(s => s.id === id) || STATUS[0];
  }

  function ordernarPedidos(lista) {
    const ordem = { novo: 0, confirmado: 1, em_preparo: 2, em_transito: 3, entregue: 4, cancelado: 5 };
    return lista.slice().sort((a, b) => {
      const ia = ordem[a.status] ?? 9, ib = ordem[b.status] ?? 9;
      if (ia !== ib) return ia - ib;
      return new Date(b.criadoEm) - new Date(a.criadoEm);
    });
  }

  function lerCesta() {
    return carregar(KEYS.cesta, []);
  }
  function salvarCesta(cesta) {
    salvar(KEYS.cesta, cesta);
  }
  function cestaQtdTotal(cesta) {
    return cesta.reduce((s, i) => s + i.qtd, 0);
  }
  function calcularTotais(cesta) {
    const prod = produtos();
    let subtotal = 0;
    const itens = cesta.map(i => {
      const p = prod.find(pp => pp.id === i.id) || { nome: 'Produto', preco: 0 };
      const linha = {
        produtoId: i.id,
        nome: p.nome,
        emoji: p.emoji || '🛒',
        qtd: i.qtd,
        precoUnit: Number(p.preco) || 0,
        subtotal: (Number(p.preco) || 0) * i.qtd,
      };
      subtotal += linha.subtotal;
      return linha;
    });
    const cfg = config();
    const entrega = subtotal > 0 && subtotal >= cfg.freteGratisAcima ? 0 : cfg.taxaEntrega;
    return { itens, subtotal, entrega, total: subtotal + (subtotal > 0 ? entrega : 0) };
  }

  function criarPedido(dados) {
    const lista = pedidos();
    let codigo = gerarCodigoPedido();
    while (lista.some(p => p.codigo === codigo)) codigo = gerarCodigoPedido();
    const pedido = {
      codigo,
      itens: dados.itens,
      subtotal: dados.subtotal,
      entrega: dados.entrega,
      total: dados.total,
      cliente: dados.cliente,
      pagamento: dados.pagamento,
      status: 'novo',
      criadoEm: agoraISO(),
      historico: [{ status: 'novo', em: agoraISO() }],
    };
    lista.push(pedido);
    salvarPedidos(lista);
    return pedido;
  }

  function atualizarStatus(codigo, novoStatus) {
    const lista = pedidos();
    const pedido = lista.find(p => p.codigo === codigo);
    if (!pedido) return false;
    pedido.status = novoStatus;
    pedido.historico = pedido.historico || [];
    pedido.historico.push({ status: novoStatus, em: agoraISO() });
    salvarPedidos(lista);
    return true;
  }

  function buscarPedido(codigo) {
    return pedidos().find(p => p.codigo === (codigo || '').trim().toUpperCase());
  }

  /* inicializacao: carrega o estado compartilhado do servidor
     (quando viaAPI). Retorna uma Promise que resolve quando pronto. */
  function iniciar() {
    if (!viaAPI) return Promise.resolve();
    return carregarEstadoPromise();
  }

  /* re-busca o estado do servidor para refletir mudancas
     feitas em OUTRO aparelho (ex.: pedido novo na loja). */
  function sincronizar() {
    if (!viaAPI) return Promise.resolve(false);
    return apiCarregarEstado().then(est => {
      if (!est) return false;
      memoria = est;
      return true;
    });
  }

  function viaServidor() {
    return viaAPI;
  }

  return {
    iniciar,
    sincronizar,
    viaServidor,
    categorias,
    emojiCategoria,
    produtos,
    salvarProdutos,
    pedidos,
    salvarPedidos,
    config,
    salvarConfig,
    formatarPreco,
    gerarCodigoPedido,
    statusInfo,
    STATUS,
    ordernarPedidos,
    lerCesta,
    salvarCesta,
    cestaQtdTotal,
    calcularTotais,
    criarPedido,
    atualizarStatus,
    buscarPedido,
    agoraISO,
  };
})();