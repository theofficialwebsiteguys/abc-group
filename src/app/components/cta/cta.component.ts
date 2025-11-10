import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent implements AfterViewInit {
  @Input() title = 'Get Started';
  @Input() description = '';
  @Input() primaryButtonText?: string;
  @Input() secondaryButtonText?: string;
  @Input() backgroundImage?: string;

  testimonials = [
  {
    quote: `Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.`,
    author: 'Pele'
  },
  {
    quote: `Quality is the best business plan.`,
    author: 'John Lasseter'
  },
  {
    quote: `Growth is never by mere chance; it is the result of forces working together.`,
    author: 'James Cash Penny'
  },
  {
    quote: `Innovation distinguishes between a leader and a follower.`,
    author: 'Steve Jobs'
  },
  {
    quote: `Challenge your limits, never miss an opportunity.`,
    author: 'Alston Theodorus'
  }
];
  currentQuoteIndex = 0;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const fadeItems: HTMLElement[] = Array.from(
      this.el.nativeElement.querySelectorAll('.fade-item')
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fadeItems.forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(this.el.nativeElement);
  }
}
