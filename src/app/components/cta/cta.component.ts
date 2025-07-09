import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  imports: [CommonModule, RouterModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  @Input() title: string = 'Get Started';
  @Input() description: string = '';
  @Input() primaryButtonText?: string;
  @Input() secondaryButtonText?: string;
  @Input() backgroundImage?: string;

}
