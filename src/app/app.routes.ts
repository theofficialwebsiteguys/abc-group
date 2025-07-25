import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { WhyPageComponent } from './components/why-page/why-page.component';
import { ImpactPageComponent } from './components/impact-page/impact-page.component';
import { HomeComponent } from './components/home/home.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { MarketsPageComponent } from './components/markets-page/markets-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'markets', component: MarketsPageComponent },
    { path: 'impact', component: ImpactPageComponent },
    { path: 'why', component: WhyPageComponent },
    { path: 'blog', component: BlogPageComponent },
    { path: 'team', component: TeamPageComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'team-member', component: TeamMemberComponent },
    { path: 'blog-detail', component: BlogDetailComponent },
];
