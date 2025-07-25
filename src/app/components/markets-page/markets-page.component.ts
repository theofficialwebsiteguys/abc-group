import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { DetailSectionComponent } from '../detail-section/detail-section.component';
import { ServicesComponent } from '../services/services.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-markets-page',
  imports: [CtaComponent, DetailSectionComponent, TestimonialsComponent, ServicesComponent],
  templateUrl: './markets-page.component.html',
  styleUrl: './markets-page.component.scss'
})
export class MarketsPageComponent {
  testimonial = {
    quote: "Quality is the best business plan.",
    name: "John Lasseter",
    avatar: "assets/john-lasseter.jpeg"
  };
}
