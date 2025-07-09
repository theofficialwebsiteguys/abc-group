import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
 bgImages: string[] = [
    'assets/banners/hero-banner1.jpg',
    'assets/banners/hero-banner2.jpg',
    'assets/banners/hero-banner3.jpg',
    'assets/banners/hero-banner4.jpg',
    'assets/banners/hero-banner5.jpg',
  ];

testimonials = [
  {
    quote: `Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.`,
    author: '— Pele'
  },
  {
    quote: `Quality is the best business plan.`,
    author: '— John Lasseter'
  },
  {
    quote: `Growth is never by mere chance; it is the result of forces working together.`,
    author: '– James Cash Penny'
  },
  {
    quote: `Innovation distinguishes between a leader and a follower.`,
    author: '— Steve Jobs'
  },
  {
    quote: `Challenge your limits, never miss an opportunity.`,
    author: '– Alston Theodorus'
  }
];

  currentQuoteIndex = 0;
  currentImageIndex = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}


  ngOnInit(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.bgImages.length;
    }, 5000); // every 7 seconds

    setInterval(() => {
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.testimonials.length;
    }, 5000);
  }
}
