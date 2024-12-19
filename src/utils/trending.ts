import type { TrendingTopic } from '../types/trending';

export function getTrendingTopics(): TrendingTopic[] {
  return [
    {
      title: "Desarrollo Web",
      icon: "🌐",
      stats: "2.5k lecturas",
      trend: "+15%",
      articles: [
        { 
          title: "Primeros Pasos con React", 
          slug: "react-primeros-pasos",
          views: "1.2k"
        },
        { 
          title: "Introducción a HTML y CSS", 
          slug: "tutorial-html-css",
          views: "980"
        }
      ]
    },
    {
      title: "Herramientas",
      icon: "🛠️",
      stats: "1.8k lecturas",
      trend: "+12%",
      articles: [
        { 
          title: "El Mejor Editor de Código", 
          slug: "producto-recomendado",
          views: "850"
        },
        { 
          title: "Las Mejores Herramientas para Desarrollo", 
          slug: "mejores-herramientas-desarrollo",
          views: "720"
        }
      ]
    },
    {
      title: "Hardware",
      icon: "💻",
      stats: "1.2k lecturas",
      trend: "-3%",
      articles: [
        { 
          title: "Las Mejores Laptops para Programación", 
          slug: "mejor-laptop-programacion",
          views: "650"
        }
      ]
    }
  ];
}