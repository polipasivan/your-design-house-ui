import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { LampLogoComponent } from '../shared/components/lamp-logo/lamp-logo.component';

@Component({
  selector: 'app-confession',
  imports: [FormsModule, CommonModule, LampLogoComponent, RouterLink],
  templateUrl: './confession.component.html',
  styleUrl: './confession.component.css'
})
export class ConfessionComponent {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'https://gle0la2vq9.execute-api.us-east-1.amazonaws.com/prod/writeToDynamo';

  confession: string = '';
  email: string = '';
  isSubmitting: boolean = false;
  submitError: string = '';

  submitConfession(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitError = '';

    const body: { confession: string; email?: string } = {
      confession: this.confession
    };

    if (this.email && this.email.trim() !== '') {
      body.email = this.email;
    }

    this.http.post(this.apiUrl, body).subscribe({
      next: () => {
        this.router.navigate(['/confession/success']);
      },
      error: (err) => {
        console.error('Error submitting confession:', err);
        this.submitError = 'Failed to submit confession. Please try again.';
        this.isSubmitting = false;
      }
    });
  }
}
