import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  links = [
    { text: 'About', route: '/about' },
    { text: 'Markets', route: '/markets' },
    { text: 'Impact', route: '/impact' },
    { text: 'Why ABC?', route: '/why' },
    { text: 'Blog', route: '/blog' },
    { text: 'Team', route: '/team' }
  ];

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
