import { Component } from '@angular/core';
import { LampLogoComponent } from '../shared/components/lamp-logo/lamp-logo.component';

@Component({
  selector: 'app-confession-success',
  standalone: true,
  imports: [LampLogoComponent],
  templateUrl: './confession-success.component.html',
  styleUrl: './confession-success.component.css'
})
export class ConfessionSuccessComponent {}
