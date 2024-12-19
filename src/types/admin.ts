export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
  lastLogin?: Date;
}

export interface AdminStats {
  totalPosts: number;
  totalViews: number;
  totalComments: number;
  totalSubscribers: number;
}

export interface DashboardPost {
  id: string;
  title: string;
  slug: string;
  status: 'published' | 'draft';
  publishDate?: Date;
  views: number;
}