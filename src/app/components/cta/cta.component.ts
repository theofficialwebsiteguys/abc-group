import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

// Page title banner used at the top of the inner pages.
@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  @Input() title = 'Get Started';
  @Input() description = '';
  @Input() primaryButtonText?: string;
  @Input() secondaryButtonText?: string;
  @Input() backgroundImage?: string;
}
