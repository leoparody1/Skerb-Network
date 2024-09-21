import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private siteTitles: { [key: string]: string } = {
    '': 'Skerb Network',
    'games': 'Skerb Games'
  };

  private pageTitles: { [key: string]: string } = {
    '/': 'Home',
    '/games': 'Home'
  };

  getPageTitle(url: string): string {
    return this.pageTitles[url] || 'untitled Page';
  }

  getSiteTitle(url: string): string {
    return this.siteTitles[url] || 'Skerb Network';
  }

  constructor() { }
}
