import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  blogPosts = [
    {
      image: 'assets/blog/1.jpg',
      heading: 'Journey of Dedication',
      subheading: "Angel’s path to commitment.",
    },
    {
      image: 'assets/blog/2.jpg',
      heading: 'Navigating Challenges',
      subheading: "How Angel overcame obstacles & his advice to you.",
    },
    {
      image: 'assets/blog/3.jpg',
      heading: "Family & Foundations",
      subheading: "Angel’s must-haves & how his family shaped who he is.",
    }
  ];

  goBack() {
    history.back();
  }

}
