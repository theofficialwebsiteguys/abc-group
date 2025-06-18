import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta',
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  @Input() title: string = 'Get Started';
  @Input() description: string = '';
  @Input() primaryButtonText?: string;
  @Input() secondaryButtonText?: string;
  @Input() backgroundImage: string = 'assets/cta.jpg';

}
