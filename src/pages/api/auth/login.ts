import type { APIRoute } from 'astro';
import { signIn } from '../../../utils/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return new Response(JSON.stringify({ 
        error: 'Email and password are required' 
      }), { 
        status: 400 
      });
    }

    const { data, error } = await signIn(email, password);

    if (error) {
      return new Response(JSON.stringify({ 
        error: error 
      }), { 
        status: 401 
      });
    }

    // Set auth cookie
    cookies.set('admin-token', data.token, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict'
    });

    return new Response(JSON.stringify({ 
      success: true 
    }));

  } catch (error) {
    return new Response(JSON.stringify({ 
      error: 'Server error' 
    }), { 
      status: 500 
    });
  }
};