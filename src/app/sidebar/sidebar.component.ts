import { Component } from '@angular/core';
import { SidebarItem } from '../sidebar-item';
import { SidebarService } from '../sidebar.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarItems: SidebarItem[] = [];
  activeSubmenus: { [key: number]: boolean } = {}; // To keep track of open submenus

  constructor(private sidebarService: SidebarService) {
    this.sidebarItems = this.sidebarService.getSidebarItems();
  }

  toggleSubmenu(index: number): void {
    this.activeSubmenus[index] = !this.activeSubmenus[index];
  }

  isSubmenuActive(index: number): boolean {
    return !!this.activeSubmenus[index];
  }
}