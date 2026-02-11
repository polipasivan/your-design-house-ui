import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LampLogoComponent } from '../shared/components/lamp-logo/lamp-logo.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-reserve-seat',
  standalone: true,
  imports: [LampLogoComponent, RouterLink],
  templateUrl: './reserve-seat.component.html',
  styleUrl: './reserve-seat.component.css'
})
export class ReserveSeatComponent {
  showTooltip = false;
  calendlyUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.calendlyUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.nhl.com');
  }
}
