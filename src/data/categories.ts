export const categories = [
  {
    title: 'Aplicaciones',
    href: '/categoria/aplicaciones',
    items: [
      { 
        name: 'Compras', 
        href: '/categoria/aplicaciones/compras',
        subcategories: [
          { name: 'AliExpress', href: '/categoria/aliexpress' },
          { name: 'Amazon', href: '/categoria/amazon' }
        ]
      },
      { 
        name: 'Finanzas', 
        href: '/categoria/aplicaciones/finanzas',
        subcategories: [
          { name: 'Binance', href: '/categoria/binance' },
          { name: 'Mercado Pago', href: '/categoria/mercado-pago' }
        ]
      },
      { 
        name: 'Transporte', 
        href: '/categoria/aplicaciones/transporte',
        subcategories: [
          { name: 'DiDi', href: '/categoria/didi' },
          { name: 'Uber', href: '/categoria/uber' }
        ]
      }
    ]
  },
  {
    title: 'Entretenimiento',
    href: '/categoria/entretenimiento',
    items: [
      {
        name: 'Streaming',
        href: '/categoria/entretenimiento/streaming',
        subcategories: [
          { name: 'Netflix', href: '/categoria/netflix' },
          { name: 'Disney+', href: '/categoria/disney-plus' },
          { name: 'HBO Max', href: '/categoria/hbo-max' }
        ]
      },
      {
        name: 'Música',
        href: '/categoria/entretenimiento/musica',
        subcategories: [
          { name: 'Spotify', href: '/categoria/spotify' },
          { name: 'Apple Music', href: '/categoria/apple-music' }
        ]
      }
    ]
  }
];