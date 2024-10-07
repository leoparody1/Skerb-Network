import { Injectable } from '@angular/core';

interface MenuItem {
  title: string;
  route?: string;
  subItems?: MenuItem[]; // Submenus
}
@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  getMenuItems(): MenuItem[] {
    // Implement the logic to retrieve the menu items from the backend or a data source
    // For example, you can fetch the menu items from an API or a local data file
    const menuItems: MenuItem[] = [
      {
        title: 'Item 1',
        route: '/item1',
        subItems: [
          {
            title: 'Subitem 1.1',
            route: '/item1/subitem1.1'
          },
          {
            title: 'Subitem 1.2',
            route: '/item1/subitem1.2'
          }
        ]
      },
      {
        title: 'Item 2',
        route: '/item2',
        subItems: [
          {
            title: 'Subitem 2.1',
            route: '/item2/subitem2.1'
          },
          {
            title: 'Subitem 2.2',
            route: '/item2/subitem2.2'
          }
        ]
      }
    ];
    return menuItems;
  }
}