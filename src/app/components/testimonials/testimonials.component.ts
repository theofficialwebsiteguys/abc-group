import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  @Input() quote: string = '';
  @Input() name: string = '';
  @Input() title?: string;
  @Input() company?: string;
  @Input() avatar: string = 'assets/default-avatar.png';

  testimonials = [
    {
      quote: "If you can dream it, you can do it.",
      name: "Walt Disney",
      title: "Director, Market Solutions",
      company: "Webflow",
      avatar: "assets/walt-disney.jpeg"
    },
    {
      quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
      name: "Maya Angelou",
      title: "Manager, Growth Partners",
      company: "Webflow",
      avatar: "assets/maya-angelou.png"
    }
  ];
}
