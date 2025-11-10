import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { ServicesComponent } from '../services/services.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { DetailSectionComponent } from '../detail-section/detail-section.component';
import { CommonModule } from '@angular/common';

interface TeamMember {
  title: string;
  role: string;
  description: string;
  route: string;
  image: string;
  active?: boolean;
}


@Component({
  selector: 'app-team-page',
  imports: [CtaComponent, ServicesComponent, TestimonialsComponent, CommonModule],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss'
})
export class TeamPageComponent {
  testimonial = {
    quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    name: "Maya Angelou",
    avatar: "assets/maya-angelou.png"
  };

  selectedMember: any = null;
  team: TeamMember[] = [
    {
      title: 'Angel Jacome',
      role: 'President & CEO',
      description:
        'Angel is an entrepreneur and business coach. He grew up in Venezuela and moved to Georgia in 2001. He started his first two companies while going to Kennesaw State University and learned he had a passion for business and self-development at an early age.',
      route: '/team-member',
      image: 'assets/team/angel-jacome.png',
      active: false
    },
    {
      title: 'Jesus Jacome',
      role: 'Senior Managing Partner',
      description:
        'Jesus was born in Caracas, Venezuela and spent most of his early years in a small town one hour south of the Venezuelan capital. At the Age of 16, in August of 2001, Jacome’s parents decided to come to the US in search of a better future and to provide their children with superior education and greater opportunities.',
      route: '/team-member',
      image: 'assets/team/jesus-jacome.png',
      active: false
    },
    {
      title: 'Joanna Jacome',
      role: 'Hub & HR Manager',
      description:
        "Joanna is an Atlanta native! Before joining the ABC team, Joanna worked in the retail industry where she gained skills in customer service and leadership. Throughout her experience, she knew that wasn't enough for her. She wanted an opportunity that was challenging, had room for growth, and overall fun!",
      route: '/team-member',
      image: 'assets/team/joanna-jacome.png',
      active: false
    },
    {
      title: 'Maria Urdaneta',
      role: 'Human Resources Recruiter',
      description:
        'María Urdaneta is a Venezuelan professional passionate about business development, fashion and art, which led her to pursue careers in both public accounting and fashion design, earning degrees in both fields.',
      route: '/team-member',
      image: 'assets/team/maria-urdaneta.png',
      active: false
    },
    {
      title: 'Amani Beliveau',
      role: 'Senior Partner',
      description:
        'Amani completed his B.S. in Finance from Palm Beach Atlantic University. He later joined the ABC team in November 2018 and has been moving quickly up the rankings ever since.',
      route: '/team-member',
      image: 'assets/team/amani.png',
      active: false
    },
    {
      title: 'Gabe Ganjura',
      role: 'Senior Partner',
      description: 'Senior Partner Gabe was born and raised in New York City. In 2019, he relocated to Atlanta and pursued a career in the healthcare industry as an optician. In December 2021, Gabe joined the ABC team and has since appreciated the team culture and performance bonuses.',
      route: '/team-member',
      image: 'assets/team/gabe.png',
      active: false
    },
    {
      title: 'Kiara Smith',
      role: 'Junior Partner',
      description: 'Junior Partner, Kiara a Chicago native raised in Atlanta, Kiara’s passion for people has been the foundation of her success. Her dedication to serving others led her from customer service into healthcare, where she honed her servant leadership skills—ultimately paving the way to her current role at ABC joining in February 2023.',
      route: '/team-member',
      image: 'assets/team/kiara.jpg',
      active: false
    }
  ];


  goTo(route: string) {
  if (route) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      // router.navigateByUrl if using Angular Router
      window.location.href = route;
    }, 300);
  }
}

toggleMember(member: TeamMember) {
  this.selectedMember = member; // Always open modal
}


closeModal() {
  const modal = document.querySelector('.bio-modal');
  if (modal) {
    modal.classList.add('closing');
    setTimeout(() => (this.selectedMember = null), 250);
  } else {
    this.selectedMember = null;
  }
}

  handleMemberSelect(member: any) {
    this.selectedMember = member;

    // setTimeout(() => {
    //   const el = document.getElementById('member-details');
    //   if (el) {
    //     const offset = -100; // scroll 100px above the element
    //     const top = el.getBoundingClientRect().top + window.pageYOffset + offset;

    //     window.scrollTo({
    //       top,
    //       behavior: 'smooth'
    //     });
    //   }
    // }, 0);
  }

}
