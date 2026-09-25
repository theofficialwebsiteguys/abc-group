import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TEAM_MEMBERS } from '../../team-members';

@Component({
  selector: 'app-team-section',
  imports: [CommonModule],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.scss'
})
export class TeamSectionComponent {
  team = TEAM_MEMBERS;

  initials(name: string): string {
    return name.split(' ').map(part => part[0]).join('');
  }
}
