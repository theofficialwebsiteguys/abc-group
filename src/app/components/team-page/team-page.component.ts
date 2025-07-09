import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { ServicesComponent } from '../services/services.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { DetailSectionComponent } from '../detail-section/detail-section.component';

@Component({
  selector: 'app-team-page',
  imports: [CtaComponent, ServicesComponent, TestimonialsComponent],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {
  testimonial = {
    quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    name: "Maya Angelou",
    avatar: "assets/maya-angelou.png"
  };

  selectedMember: any = null;

  
  handleMemberSelect(member: any) {
    this.selectedMember = member;

    // setTimeout(() => {
    //   const el = document.getElementById('member-details');
    //   if (el) {
    //     const offset = -100; // scroll 100px above the element
    //     const top = el.getBoundingClientRect().top + window.pageYOffset + offset;

    //     window.scrollTo({
    //       top,
    //       behavior: 'smooth'
    //     });
    //   }
    // }, 0);
  }

}
