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

  selectedState: any = null;
  shouldScrollToState = false;

  scrollToMarket(data: any) {
    // Prefer `data.name`, fallback to title or something else
    const id = this.generateId(data.name || data.title);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  generateId(value: string): string {
    return value.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

 handleMemberSelect(state: any) {
    this.selectedState = state;
    this.shouldScrollToState = true;

    // Delay scroll to let DOM update
    setTimeout(() => {
      if (!this.shouldScrollToState) return;

      const el = document.getElementById('state-details');
      if (el) {
        const offset = -100;
        const top = el.getBoundingClientRect().top + window.pageYOffset + offset;

        window.scrollTo({
          top,
          behavior: 'smooth'
        });

        this.shouldScrollToState = false; // Reset after scroll
      }
    }, 0);
  }
}
