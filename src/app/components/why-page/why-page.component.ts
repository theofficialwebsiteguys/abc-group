import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { DetailSectionComponent } from '../detail-section/detail-section.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-why-page',
  imports: [CtaComponent, DetailSectionComponent, TestimonialsComponent],
  templateUrl: './why-page.component.html',
  styleUrl: './why-page.component.scss'
})
export class WhyPageComponent {
  testimonial = {
    quote: "Innovation distinguishes between a leader and a follower",
    name: "Steve Jobs",
    avatar: "assets/steve-jobs.jpg"
  };
}
