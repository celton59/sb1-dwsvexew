import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ cookies }) => {
  cookies.delete('admin-token', { path: '/' });
  
  return new Response(JSON.stringify({ 
    success: true 
  }));
};