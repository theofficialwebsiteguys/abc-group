import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMobileMenuOpen = false;
scrolled = false;
  isLightRoute = false;
  
    constructor(private router: Router) {}
    
  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  ngOnInit() {
  this.updateNavbarStyle();
  window.addEventListener('scroll', this.updateNavbarStyle.bind(this));
  this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        console.log(event.url)
        const lightRoutes = ['/contact']; // add any light-background pages
        this.isLightRoute = lightRoutes.some(r => event.url.includes(r));
      });
}

updateNavbarStyle() {
  const navbar = document.querySelector('.navbar');
  const triggerSection = document.querySelector('.contact-section, .markets-showcase, .testimonial-banner');
  const navHeight = navbar?.clientHeight || 80;

  if (triggerSection) {
    const triggerTop = triggerSection.getBoundingClientRect().top;
    if (triggerTop <= navHeight) {
      navbar?.classList.add('light-nav');
    } else {
      navbar?.classList.remove('light-nav');
    }
  }
}


  
// @HostListener('window:scroll')
// onScroll(){
//   this.scrolled = (window.scrollY || window.pageYOffset) > 6;
// }
}
