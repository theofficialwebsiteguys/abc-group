import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { TeamSectionComponent } from '../team-section/team-section.component';
import { NextStepsComponent } from '../next-steps/next-steps.component';

@Component({
  selector: 'app-team-page',
  imports: [CtaComponent, TestimonialsComponent, TeamSectionComponent, NextStepsComponent],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {
  testimonial = {
    quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    name: "Maya Angelou",
    avatar: "assets/maya-angelou.png"
  };
}
