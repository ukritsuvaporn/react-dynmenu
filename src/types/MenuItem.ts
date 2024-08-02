// src/types/MenuItem.ts
export interface MenuItem {
  id: number;
  label: string;
  link: string;
  children?: MenuItem[];
}
