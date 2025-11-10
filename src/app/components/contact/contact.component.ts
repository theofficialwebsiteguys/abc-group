import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


  onSubmit() {
    // Send this data somewhere or use FormBuilder if preferred
    alert('Message sent!');
  }
}
