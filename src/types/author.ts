export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  posts: number;
  views: number;
  socialLinks: SocialLink[];
}