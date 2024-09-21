import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DetailsService } from '../details.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit { 
  siteTitle: string = '';
  pgTitle: string = '';

  constructor(
    private router: Router, 
    private DetailsService: DetailsService, 
    private title: Title
  ){}

  ngOnInit() {
    this.siteTitle = this.DetailsService.getSiteTitle(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pgTitle = this.DetailsService.getPageTitle(this.router.url);
        this.title.setTitle(`${this.siteTitle} - ${this.pgTitle}`);

      }
    });
  }
}
