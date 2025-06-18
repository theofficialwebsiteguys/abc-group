import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { DetailSectionComponent } from '../detail-section/detail-section.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-impact-page',
  imports: [CtaComponent, TestimonialsComponent, DetailSectionComponent, ServicesComponent],
  templateUrl: './impact-page.component.html',
  styleUrl: './impact-page.component.scss'
})
export class ImpactPageComponent {
  testimonial = {
    quote: "Growth is never by mere chance; it is the result of forces working together",
    name: "James Cash Penny",
    avatar: "assets/james-cash-penny.jpeg"
  };
}
