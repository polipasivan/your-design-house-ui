import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LampLogoComponent } from '../shared/components/lamp-logo/lamp-logo.component';

@Component({
  selector: 'app-design-details',
  standalone: true,
  imports: [FormsModule, CommonModule, LampLogoComponent, RouterLink],
  templateUrl: './design-details.component.html',
  styleUrl: './design-details.component.css'
})
export class DesignDetailsComponent {
  private router = inject(Router);

  name: string = '';
  email: string = '';

  onSubmit(): void {
    this.router.navigate(['/design-details/success']);
  }
}
