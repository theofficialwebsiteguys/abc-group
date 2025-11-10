import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  date = '';
  title = '';
  intro = '';
  blogPosts: any[] = [];

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state as any;
    if (state?.postData) {
      this.date = state.postData.date;
      this.title = state.postData.title;
      this.intro = state.postData.intro;
      this.blogPosts = state.postData.posts;
    }
  }

  goBack() {
    history.back();
  }
}
