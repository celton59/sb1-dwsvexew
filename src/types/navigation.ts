export interface SubCategory {
  name: string;
  href: string;
}

export interface CategoryItem {
  name: string;
  href: string;
  subcategories?: SubCategory[];
}

export interface Category {
  title: string;
  href: string;
  items: CategoryItem[];
}