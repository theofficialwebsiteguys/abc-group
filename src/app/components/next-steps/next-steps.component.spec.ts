import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NextStepsComponent } from './next-steps.component';

describe('NextStepsComponent', () => {
  let component: NextStepsComponent;
  let fixture: ComponentFixture<NextStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextStepsComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('never sends an Apply button to the contact form', () => {
    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('a'));
    const apply = links.filter(a => /apply/i.test(a.textContent || ''));

    apply.forEach(a => expect(a.getAttribute('href')).not.toBe('/contact'));
    expect(apply.length).toBe(component.applyUrl ? 1 : 0);
  });

  it('keeps Schedule Call on the contact page', () => {
    const schedule = Array.from<HTMLAnchorElement>(fixture.nativeElement.querySelectorAll('a'))
      .find(a => /schedule call/i.test(a.textContent || ''));

    expect(schedule?.getAttribute('href')).toBe('/contact');
  });
});
