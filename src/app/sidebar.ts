export interface MenuItem {
  label: string;
  icon: string;
  route: string;
  submenu?: MenuItem[];
  isOpen?: boolean; // Add this property
}