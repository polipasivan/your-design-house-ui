import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfessionComponent } from './confession/confession.component';
import { ConfessionSuccessComponent } from './confession-success/confession-success.component';
import { ReserveSeatComponent } from './reserve-seat/reserve-seat.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reserve-seat', component: ReserveSeatComponent },
  { path: 'confession', component: ConfessionComponent },
  { path: 'confession/success', component: ConfessionSuccessComponent },
  { path: '**', redirectTo: '' }
];
