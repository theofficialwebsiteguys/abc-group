import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { TeamSectionComponent } from '../team-section/team-section.component';
import { NextStepsComponent } from '../next-steps/next-steps.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, HeroComponent, ServicesComponent, TestimonialsComponent, TeamSectionComponent, NextStepsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  testimonial = {
    quote: "I trained 4 years to run 9 seconds, and people give up when they don't see results in 2 months.",
    name: "Usain Bolt",
    avatar: "assets/usain-bolt.png"
  };

  // Excerpts from the Why ABC? page
  culture = [
    {
      title: 'On Site Training',
      text: 'We provide full pay training on all levels to help one develop skills in business marketing, customer relations, and how to work effectively as a team.',
      image: 'assets/onsite-training/3.jpg'
    },
    {
      title: 'Team Events',
      text: 'We all have a common goal here, find a career that we can excel in but most importantly find a group of individuals we enjoy working with, a true team!',
      image: 'assets/team-events/2.jpg'
    },
    {
      title: 'Travel Opportunities',
      text: 'We believe stepping out of the office from time to time to visit different markets or attend yearly conferences is a great way to uncover multiple avenues of opportunity to network, learn from the best in the business, and increase productivity.',
      image: 'assets/travel-opportunities/3.jpg'
    }
  ];
}
