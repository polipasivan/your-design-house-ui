import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LampLogoComponent } from '../shared/components/lamp-logo/lamp-logo.component';

@Component({
  selector: 'app-design-details-success',
  standalone: true,
  imports: [LampLogoComponent, RouterLink],
  templateUrl: './design-details-success.component.html',
  styleUrl: './design-details-success.component.css'
})
export class DesignDetailsSuccessComponent {}
