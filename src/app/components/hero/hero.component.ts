import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private router: Router) {}

  navigateTo(fragment: string) {
    this.router.navigate([], { fragment });
  }
}
