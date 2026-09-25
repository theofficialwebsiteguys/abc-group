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

  const linkTo = (label: RegExp) =>
    Array.from<HTMLAnchorElement>(fixture.nativeElement.querySelectorAll('a'))
      .find(a => label.test(a.textContent || ''))?.getAttribute('href');

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sends applicants to the contact form', () => {
    expect(linkTo(/apply today/i)).toBe('/contact');
  });

  it('keeps Schedule Call on the contact page', () => {
    expect(linkTo(/schedule call/i)).toBe('/contact');
  });
});
