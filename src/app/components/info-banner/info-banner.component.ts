import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-banner',
  imports: [CommonModule, RouterModule],
  templateUrl: './info-banner.component.html',
  styleUrl: './info-banner.component.scss'
})
export class InfoBannerComponent {
  @Input() title: string = 'Be a Part';
  @Input() description: string = 'Vivacity Management is a company that believes in its employees and their potential. A mutually beneficial relationship allows us to reach new heights of success every day. Apply to become part of this amazing team.';
  @Input() ctaLabel: string = 'Apply Now';
  @Input() ctaLink: string = '/apply';
  @Input() imageUrl: string | null = null;
  @Input() imageAlt: string = 'Info banner image';

}
