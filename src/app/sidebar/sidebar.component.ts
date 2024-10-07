import { Component, OnInit. Injectable } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.menuItems = this.sidebarService.getMenuItems() as MenuItem[];
    console.log(this.menuItems); // Check if menuItems is being populated correctly
  }

  toggleSubMenu(item: MenuItem) {
    // Implement the logic to toggle the submenu for the given item
    // For example, you can find the item in the menuItems array and toggle its isOpen property
    const foundItem = this.menuItems.find((i) => i.id === item.id);
    if (foundItem) {
      foundItem.isOpen = !foundItem.isOpen;
    }
  }

}