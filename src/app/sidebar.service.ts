import { Injectable } from '@angular/core';

interface MenuItem {
  title: string;
  route?: string;
  subItems?: MenuItem[]; // Submenus
}

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      route: '/dashboard',
    },
    {
      title: 'Products',
      route: '/products',
      subItems: [
        { title: 'New Product', route: '/products/new' },
        { title: 'Manage Products', route: '/products/manage' },
      ],
    },
    {
      title: 'Orders',
      route: '/orders',
    },
    {
      title: 'Settings',
      route: '/settings',
      subItems: [
        { title: 'Profile', route: '/settings/profile' },
        { title: 'Security', route: '/settings/security' },
      ],
    },
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}