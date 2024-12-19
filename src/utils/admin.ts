import type { AdminUser, AdminStats, DashboardPost } from '../types/admin';
import type { APIContext } from 'astro';

// Mock admin user
const MOCK_ADMIN: AdminUser = {
  id: '1',
  email: 'admin@example.com',
  name: 'Admin',
  role: 'admin',
  lastLogin: new Date()
};

export async function getAdminUser(context: APIContext): Promise<AdminUser | null> {
  const token = context.cookies.get('admin-token')?.value;
  if (!token || token !== 'mock-admin-token') return null;
  return MOCK_ADMIN;
}

export async function getAdminStats(): Promise<AdminStats> {
  return {
    totalPosts: 24,
    totalViews: 3200,
    totalComments: 142,
    totalSubscribers: 891
  };
}

export async function getRecentPosts(): Promise<DashboardPost[]> {
  return [
    {
      id: '1',
      title: 'Getting Started with React',
      slug: 'getting-started-react',
      status: 'published',
      publishDate: new Date(),
      views: 1200
    },
    {
      id: '2',
      title: 'CSS Grid Layout Guide',
      slug: 'css-grid-guide',
      status: 'published',
      publishDate: new Date(),
      views: 850
    }
  ];
}