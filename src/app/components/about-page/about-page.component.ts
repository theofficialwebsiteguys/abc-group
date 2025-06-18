import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { DetailSectionComponent } from '../detail-section/detail-section.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { InfoBannerComponent } from '../info-banner/info-banner.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-about-page',
  imports: [CtaComponent, DetailSectionComponent, TestimonialsComponent, ServicesComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {
  testimonial = {
    quote: "Quality is the best business plan.",
    name: "John Lasseter",
    avatar: "assets/john-lasseter.jpeg"
  };
}
