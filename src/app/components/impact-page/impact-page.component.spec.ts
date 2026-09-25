import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ImpactPageComponent } from './impact-page.component';

describe('ImpactPageComponent', () => {
  let component: ImpactPageComponent;
  let fixture: ComponentFixture<ImpactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactPageComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
