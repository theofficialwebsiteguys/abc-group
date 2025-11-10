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

  // about.component.ts
aboutServices = [
    {
      icon: 'fa-solid fa-handshake-simple',
      iconType: 'fa',
      title: 'Relationship-Based<br />Marketing',
      description: 'We focus on building meaningful customer relationships that drive loyalty and retention.',
      image: 'assets/services/relationship.png'
    },
    {
      icon: 'fa-solid fa-bullhorn',
      iconType: 'fa',
      title: 'Direct Outreach<br />Strategies',
      description: 'Our hands-on approach bypasses digital noise to reach customers personally and effectively.',
      image: 'assets/services/outreach.jpeg'
    },
    {
      icon: 'fa-solid fa-chart-simple',
      iconType: 'fa',
      title: 'ROI-Focused<br />Campaigns',
      description: 'We tailor each strategy to ensure the highest return on your marketing investment.',
      image: 'assets/services/roi.jpg'
    }
  ];

}
