export interface TrendingArticle {
  title: string;
  slug: string;
  views?: string;
}

export interface TrendingTopic {
  title: string;
  icon: string;
  stats: string;
  trend: string;
  articles: TrendingArticle[];
}