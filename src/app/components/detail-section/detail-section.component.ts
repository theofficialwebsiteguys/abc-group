import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detail-section',
  imports: [CommonModule, RouterModule],
  templateUrl: './detail-section.component.html',
  styleUrl: './detail-section.component.scss'
})
export class DetailSectionComponent {
  @Input() imageUrls: string[] = [];
  @Input() title: string = 'Our Mission';
  @Input() description: string = '';
  @Input() description2: string = '';
  @Input() ctaLabel: string = '';
  @Input() ctaLink: string = '';
  @Input() imageLeft: boolean = true;
  @Input() background: 'red' | 'blue' | 'dark' | 'light' | 'green' = 'green';

  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    if (this.imageUrls.length > 1) {
      this.intervalId = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
      }, 4000); // Change image every 4s
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
