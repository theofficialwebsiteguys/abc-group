import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CtaComponent } from '../cta/cta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeroComponent, ServicesComponent, TestimonialsComponent, CtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  testimonial = {
    quote: "I trained 4 years to run 9 seconds, and people give up when they don't see results in 2 months.",
    name: "Usain Bolt",
    avatar: "assets/usain-bolt.png"
  };
}
