import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="scrolled">
      <a class="logo" routerLink="/home">&lt;AG /&gt;</a>
      <div class="nav-links">
        <a routerLink="/home"     routerLinkActive="active">Home</a>
        <a routerLink="/about"    routerLinkActive="active">About</a>
        <a routerLink="/skills"   routerLinkActive="active">Skills</a>
        <a routerLink="/timeline" routerLinkActive="active">Timeline</a>
        <a routerLink="/projects" routerLinkActive="active">Projects</a>
        <a routerLink="/contact"  routerLinkActive="active">Contact</a>
      </div>
      <div class="nav-status">
        <span class="dot"></span>
        Open to Freelance
      </div>
      <button class="hamburger" (click)="menuOpen=!menuOpen" [class.open]="menuOpen">
        <span></span><span></span>
      </button>
      <div class="mobile-menu" [class.open]="menuOpen" (click)="menuOpen=false">
        <a routerLink="/home"     routerLinkActive="active">Home</a>
        <a routerLink="/about"    routerLinkActive="active">About</a>
        <a routerLink="/skills"   routerLinkActive="active">Skills</a>
        <a routerLink="/timeline" routerLinkActive="active">Timeline</a>
        <a routerLink="/projects" routerLinkActive="active">Projects</a>
        <a routerLink="/contact"  routerLinkActive="active">Contact</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex; justify-content: space-between; align-items: center;
      padding: 1rem 2rem;
      border-bottom: 1px solid var(--border);
      background: rgba(8,12,18,0.92);
      backdrop-filter: blur(12px);
      position: sticky; top: 0; z-index: 100;
      transition: padding .3s;
    }
    .navbar.scrolled { padding: .75rem 2rem; }
    .logo {
      font-family: var(--mono); font-size: 1.1rem;
      color: var(--cyan); font-weight: 500; letter-spacing: .05em;
    }
    .nav-links { display: flex; gap: .2rem; }
    .nav-links a {
      padding: .4rem .9rem;
      font-size: .72rem; text-transform: uppercase; letter-spacing: .08em;
      color: var(--muted); border-radius: 4px;
      transition: all .2s;
    }
    .nav-links a:hover, .nav-links a.active {
      color: var(--cyan); background: rgba(0,229,195,.08);
    }
    .nav-status {
      display: flex; align-items: center; gap: 6px;
      font-size: .68rem; font-family: var(--mono); color: var(--muted);
    }
    .dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: #22c55e; animation: blink 2s infinite;
    }
    .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; padding: 4px; }
    .hamburger span { width: 20px; height: 1.5px; background: var(--text); transition: all .3s; display: block; }
    .hamburger.open span:first-child { transform: rotate(45deg) translate(4px,4px); }
    .hamburger.open span:last-child  { transform: rotate(-45deg) translate(4px,-4px); }
    .mobile-menu { display: none; position: absolute; top: 100%; left: 0; right: 0;
      background: var(--bg2); border-bottom: 1px solid var(--border);
      flex-direction: column; padding: 1.5rem 2rem; gap: 1.2rem; }
    .mobile-menu.open { display: flex; }
    .mobile-menu a { font-size: .9rem; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); }
    .mobile-menu a.active { color: var(--cyan); }
    @media(max-width:700px) { .nav-links,.nav-status{display:none;} .hamburger{display:flex;} }
  `]
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;
  @HostListener('window:scroll') onScroll(){ this.scrolled = window.scrollY > 20; }
}
