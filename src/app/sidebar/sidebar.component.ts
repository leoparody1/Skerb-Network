import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  title: string;
  route: string;
  subItems?: MenuItem[];
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  expandedItem: MenuItem | null = null;

  constructor(private sidebarService: SidebarService) {}
  ngOnInit(): void {
    this.menuItems = this.sidebarService.getMenuItems();
  }

  toggleSubmenu(item: MenuItem): void {
    // If the clicked item is already expanded, collapse it; otherwise, expand it
    this.expandedItem = this.expandedItem === item ? null : item;
  }
}