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

  menuItems = [
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

  constructor() { }

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  toggleSubMenu(item: any) {
    item.expanded = !item.expanded;
  }

}