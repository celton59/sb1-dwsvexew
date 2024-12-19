// Utility functions for handling image paths
export const defaultImages = {
  tutorial: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
  review: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop',
  afiliacion: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
};

export const getImagePath = (category: keyof typeof defaultImages): string => {
  return defaultImages[category] || defaultImages.tutorial;
};