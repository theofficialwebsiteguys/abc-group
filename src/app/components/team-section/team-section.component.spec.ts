import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamSectionComponent } from './team-section.component';
import { TEAM_MEMBERS } from '../../team-members';

describe('TeamSectionComponent', () => {
  let component: TeamSectionComponent;
  let fixture: ComponentFixture<TeamSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders one card per member with only a name and title', () => {
    const cards: HTMLElement[] = Array.from(fixture.nativeElement.querySelectorAll('.team-card'));
    expect(cards.length).toBe(TEAM_MEMBERS.length);

    cards.forEach((card, i) => {
      expect(card.querySelector('h3')?.textContent?.trim()).toBe(TEAM_MEMBERS[i].name);
      expect(card.querySelectorAll('p').length).toBe(TEAM_MEMBERS[i].title ? 1 : 0);
    });
  });

  it('builds initials for members without a photo', () => {
    expect(component.initials('Blake Clemens')).toBe('BC');
  });
});
