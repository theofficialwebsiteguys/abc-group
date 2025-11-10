import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { DetailSectionComponent } from '../detail-section/detail-section.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  imports: [CtaComponent, DetailSectionComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {
    constructor(private router: Router) {}

    
 goToPost() {
    const postData = {
      date: 'June 25, 2024',
      title: 'Unlocking Potential: Angel’s Journey to Organizational Consultant',
      intro: "Read more about Angel’s story and what inspired him to get promoted to Organizational Consultant!",
      posts: [
        {
          image: 'assets/blog/1.jpg',
          heading: 'Journey of Dedication',
          subheading: "Angel’s path to commitment."
        },
        {
          image: 'assets/blog/2.jpg',
          heading: 'Navigating Challenges',
          subheading: "How Angel overcame obstacles & his advice to you."
        },
        {
          image: 'assets/blog/3.jpg',
          heading: 'Family & Foundations',
          subheading: "Angel’s must-haves & how his family shaped who he is."
        }
      ]
    };

    this.router.navigate(['/blog-detail'], { state: { postData } });
  }
}
