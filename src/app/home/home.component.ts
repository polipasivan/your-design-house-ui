import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LampLogoComponent } from '../shared/components/lamp-logo/lamp-logo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LampLogoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
