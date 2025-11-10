import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterModule, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  @Input() sectionLabel: string = '';
  @Input() sectionTitle: string = '';
  @Input() sectionSubtext: string = '';

  @Input() services: {
    icon?: string;
    iconType?: 'image' | 'text' | 'fa'; // default is 'text'
    title: string;
    description: string;
    image?: string;
    route?: string;
    data?: { name: string, role?: string, desc1?: string, desc2?: string , images?: string[] }
  }[] = [];

  @Input() buttonLabel: string = '';
  @Input() buttonLink: string = '/services'; 

  @Output() memberSelected = new EventEmitter<any>();

   constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Run once when view loads
    this.handleScroll();
  }

  ngOnInit() {
    if (this.services.length && this.services[0].data) {
      this.memberSelected.emit(this.services[0].data);
    }
  }

  isImage(path: string): boolean {
    return /\.(jpeg|jpg|gif|png|svg|webp)$/i.test(path);
  }

  onSelect(member: any): void {
    this.memberSelected.emit(member);
  }

 @HostListener('window:scroll')
  handleScroll() {
    const cards: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.service-card');
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach((card, i) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom && !card.classList.contains('visible')) {
        // Stagger animation by index
        setTimeout(() => {
          card.classList.add('visible');
        }, i * 150); // 150ms delay between each card
      }
    });
  }

}