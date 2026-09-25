import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Closing call to action: applicants and business partners each get their own path.
@Component({
  selector: 'app-next-steps',
  imports: [RouterModule],
  templateUrl: './next-steps.component.html',
  styleUrl: './next-steps.component.scss'
})
export class NextStepsComponent {}
