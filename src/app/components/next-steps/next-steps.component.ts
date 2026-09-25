import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APPLY_URL } from '../../apply-link';

// Closing call to action: applicants and business partners each get their own path.
@Component({
  selector: 'app-next-steps',
  imports: [CommonModule, RouterModule],
  templateUrl: './next-steps.component.html',
  styleUrl: './next-steps.component.scss'
})
export class NextStepsComponent {
  applyUrl = APPLY_URL;
}
