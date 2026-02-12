import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LampLogoComponent } from '../shared/components/lamp-logo/lamp-logo.component';

declare const Calendly: any;

@Component({
  selector: 'app-reserve-seat',
  standalone: true,
  imports: [LampLogoComponent, RouterLink],
  templateUrl: './reserve-seat.component.html',
  styleUrl: './reserve-seat.component.css'
})
export class ReserveSeatComponent implements AfterViewInit, OnDestroy {
  @ViewChild('calendlyContainer', { static: false }) calendlyContainer!: ElementRef;
  showTooltip = false;
  private scriptElement: HTMLScriptElement | null = null;

  ngAfterViewInit(): void {
    const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (existingScript) {
      this.initCalendly();
      return;
    }

    this.scriptElement = document.createElement('script');
    this.scriptElement.src = 'https://assets.calendly.com/assets/external/widget.js';
    this.scriptElement.async = true;
    this.scriptElement.onload = () => this.initCalendly();
    document.body.appendChild(this.scriptElement);
  }

  private initCalendly(): void {
    Calendly.initInlineWidget({
      url: 'https://calendly.com/yoursdesignhouse/30min?background_color=f6f1ea&text_color=1f2933&primary_color=3a3f45',
      parentElement: this.calendlyContainer.nativeElement,
    });
  }

  ngOnDestroy(): void {
    if (this.scriptElement) {
      document.body.removeChild(this.scriptElement);
    }
  }
}
