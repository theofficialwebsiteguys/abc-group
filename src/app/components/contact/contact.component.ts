import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../email.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  phone = '';
  message = '';

  latitude = 33.8487; // Replace with actual latitude
  longitude = -84.31077; // Replace with actual longitude
  zoom = 14;

  isSubmitting = false;

  constructor(private emailService: EmailService) {}

  onSubmit(form?: any) {
    // Basic validation guard
    if (!this.name || !this.email || !this.message) {
      alert('Please fill out all required fields.');
      return;
    }

    const payload = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    };

    this.isSubmitting = true;

    this.emailService.submitForm(payload).subscribe({
      next: () => {
        alert('Message sent! We’ll be in touch shortly.');

        // Reset form state
        this.name = '';
        this.email = '';
        this.phone = '';
        this.message = '';
        form?.resetForm?.();

        this.isSubmitting = false;
      },
      error: (err) => {
        console.error('Contact form email failed:', err);
        alert('There was an issue sending your message. Please try again.');
        this.isSubmitting = false;
      }
    });
  }
}
