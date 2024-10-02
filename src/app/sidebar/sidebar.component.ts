import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private sidebarService: SidebarService) {}
  ngOnInit(): void {
    this.menuItems = this.sidebarService.getMenuItems();
  }
}