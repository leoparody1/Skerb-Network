// sidebar-item.model.ts
export interface SidebarItem {
    title: string;
    icon?: string;
    route?: string;
    submenu?: SidebarItem[]; // for nested submenu items
  }
  