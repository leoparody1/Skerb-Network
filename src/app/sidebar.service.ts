// sidebar.service.ts
import { Injectable } from '@angular/core';
import { SidebarItem } from './sidebar-item';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarItems: SidebarItem[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard_icon',
      route: '/dashboard',
    },
    {
      title: 'Settings',
      icon: 'settings_icon',
      submenu: [
        { title: 'Profile', route: '/settings/profile' },
        { title: 'Account', route: '/settings/account' },
      ],
    },
    {
      title: 'Reports',
      icon: 'reports_icon',
      submenu: [
        { title: 'Sales', route: '/reports/sales' },
        { title: 'Expenses', route: '/reports/expenses' },
      ],
    },
  ];

  getSidebarItems(): SidebarItem[] {
    return this.sidebarItems;
  }
}
