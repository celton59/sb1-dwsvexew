import type { APIContext } from 'astro';

// Mock user for development
const MOCK_USER = {
  id: '1',
  email: 'admin@example.com',
  password: 'admin123',
  name: 'Admin',
  role: 'admin' as const
};

export async function isAuthenticated(context: APIContext) {
  const token = context.cookies.get('admin-token')?.value;
  return token === 'mock-admin-token';
}

export async function signIn(email: string, password: string) {
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    return {
      data: {
        user: MOCK_USER,
        token: 'mock-admin-token'
      },
      error: null
    };
  }

  return {
    data: null,
    error: 'Invalid credentials'
  };
}

export async function signOut() {
  return { error: null };
}