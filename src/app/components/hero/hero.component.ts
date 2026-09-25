import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APPLY_URL } from '../../apply-link';

@Component({
  selector: 'app-hero',
  imports: [RouterModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  applyUrl = APPLY_URL;

  bgImages: string[] = [
    'assets/banners/hero-banner1.jpg',
    'assets/banners/hero-banner6.png',
    'assets/banners/hero-banner2.jpg',
    'assets/banners/hero-banner3.jpg',
    'assets/banners/hero-banner4.jpg',
    'assets/banners/hero-banner7.jpg',
    'assets/banners/hero-banner5.jpg',
  ];

  currentImageIndex = 0;
  private slideTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.slideTimer = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.bgImages.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.slideTimer);
  }
}
