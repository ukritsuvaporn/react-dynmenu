export interface IMenuItemJson {
  id: number;
  label: string;
  link: string;
  dataareaid?: string[];
  roles?: string[];
  children?: IMenuItemJson[];
}
