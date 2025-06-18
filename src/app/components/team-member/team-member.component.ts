import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-member',
  imports: [],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.scss'
})
export class TeamMemberComponent {

  data: any;

  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state;
  }
}
