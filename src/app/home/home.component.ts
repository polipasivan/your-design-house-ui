import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LampLogoComponent } from '../shared/components/lamp-logo/lamp-logo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LampLogoComponent, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private http = inject(HttpClient);
  showModal = false;
  modalView: 'form' | 'success' = 'form';
  name = '';
  email = '';
  isSubmitting: boolean = false;
  submitError: string = '';
  private apiUrl = 'https://gle0la2vq9.execute-api.us-east-1.amazonaws.com/prod/design-details';
  private autoCloseTimer: ReturnType<typeof setTimeout> | null = null;

  openModal(): void {
    this.showModal = true;
    this.modalView = 'form';
    this.name = '';
    this.email = '';
  }

  closeModal(): void {
    this.showModal = false;
    if (this.autoCloseTimer) {
      clearTimeout(this.autoCloseTimer);
      this.autoCloseTimer = null;
    }
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }

  onSubmit(): void {
    this.modalView = 'success';
    const body: { name: string; email?: string } = {
      name: this.name,
    };

    if (this.email && this.email.trim() !== '') {
      body.email = this.email;
    }

    this.http.post(this.apiUrl, body).subscribe({
      next: () => {
        this.autoCloseTimer = setTimeout(() => this.closeModal(), 5000);
      },
      error: (err) => {
        console.error('Error submitting confession:', err);
        this.submitError = 'Failed to submit confession. Please try again.';
        this.isSubmitting = false;
        this.autoCloseTimer = setTimeout(() => this.closeModal(), 5000);
      }
    });
  }
}
