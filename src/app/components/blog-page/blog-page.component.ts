import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { DetailSectionComponent } from '../detail-section/detail-section.component';

@Component({
  selector: 'app-blog-page',
  imports: [CtaComponent, DetailSectionComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {

}
