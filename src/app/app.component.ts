import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    TimelineComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <app-navbar />
    <main>
      <section id="home"><app-hero /></section>
      <section id="about"><app-about /></section>
      <section id="skills"><app-skills /></section>
      <section id="timeline"><app-timeline /></section>
      <section id="projects"><app-projects /></section>
      <section id="contact"><app-contact /></section>
    </main>
  `,
  styles: [`
    section { scroll-margin-top: 65px; }
  `]
})
export class AppComponent {}