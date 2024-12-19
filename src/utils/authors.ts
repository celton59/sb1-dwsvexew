import type { Author } from '../types/author';

export function getAuthors(): Author[] {
  return [
    {
      name: "Ana García",
      role: "Desarrolladora Frontend",
      bio: "Especialista en React y diseño UI/UX. Apasionada por crear experiencias web excepcionales.",
      avatar: "https://i.pravatar.cc/300?img=1",
      posts: 15,
      views: 25,
      socialLinks: [
        { platform: "GitHub", url: "#", icon: "⌨️" },
        { platform: "Twitter", url: "#", icon: "🐦" },
        { platform: "LinkedIn", url: "#", icon: "💼" }
      ]
    },
    {
      name: "Carlos Ruiz",
      role: "Desarrollador Backend",
      bio: "Experto en Node.js y bases de datos. Enfocado en arquitectura y rendimiento.",
      avatar: "https://i.pravatar.cc/300?img=3",
      posts: 12,
      views: 18,
      socialLinks: [
        { platform: "GitHub", url: "#", icon: "⌨️" },
        { platform: "LinkedIn", url: "#", icon: "💼" }
      ]
    },
    {
      name: "Laura Martínez",
      role: "DevOps Engineer",
      bio: "Especialista en CI/CD y cloud computing. Apasionada por la automatización.",
      avatar: "https://i.pravatar.cc/300?img=5",
      posts: 8,
      views: 15,
      socialLinks: [
        { platform: "GitHub", url: "#", icon: "⌨️" },
        { platform: "Twitter", url: "#", icon: "🐦" },
        { platform: "LinkedIn", url: "#", icon: "💼" }
      ]
    }
  ];
}