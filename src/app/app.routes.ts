import { Routes } from '@angular/router';
import { GamesHomeComponent } from './pages/games-home/games-home.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';

export const routes: Routes = [
  {
    path: '',
    component: GamesHomeComponent
  },
  {
    path: 'games',
    component: GamesPageComponent
  }
];
