import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="scrolled">
      <div class="logo" (click)="scrollTo('home')">&lt;AG /&gt;</div>

      <div class="nav-links">
        <button
          *ngFor="let item of navItems"
          class="nav-btn"
          [class.active]="activeSection === item.id"
          (click)="scrollTo(item.id)">
          {{ item.label }}
        </button>
      </div>

      <div class="nav-status">
        <span class="dot"></span>
        Open to Freelance
      </div>

      <button class="hamburger" (click)="menuOpen = !menuOpen" [class.open]="menuOpen">
        <span></span>
        <span></span>
      </button>

      <div class="mobile-menu" [class.open]="menuOpen">
        <button
          *ngFor="let item of navItems"
          class="mob-btn"
          [class.active]="activeSection === item.id"
          (click)="scrollTo(item.id); menuOpen = false">
          {{ item.label }}
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      border-bottom: 1px solid var(--border);
      background: rgba(8, 12, 18, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: padding 0.3s ease;
    }
    .navbar.scrolled { padding: 0.7rem 2rem; }

    .logo {
      font-family: var(--mono);
      font-size: 1.1rem;
      color: var(--cyan);
      font-weight: 500;
      letter-spacing: 0.05em;
      cursor: pointer;
      user-select: none;
    }
    .logo:hover { opacity: 0.8; }

    .nav-links { display: flex; gap: 0.1rem; }

    .nav-btn {
      padding: 0.4rem 0.9rem;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      background: transparent;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-family: var(--font);
      transition: all 0.2s ease;
    }
    .nav-btn:hover { color: var(--cyan); background: rgba(0, 229, 195, 0.08); }
    .nav-btn.active { color: var(--cyan); background: rgba(0, 229, 195, 0.1); }

    .nav-status {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.68rem;
      font-family: var(--mono);
      color: var(--muted);
    }
    .dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #22c55e;
      animation: blink 2s infinite;
    }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      padding: 4px;
      cursor: pointer;
    }
    .hamburger span {
      width: 20px; height: 1.5px;
      background: var(--text);
      transition: all 0.3s;
      display: block;
    }
    .hamburger.open span:first-child { transform: rotate(45deg) translate(4px, 4px); }
    .hamburger.open span:last-child  { transform: rotate(-45deg) translate(4px, -4px); }

    .mobile-menu {
      display: none;
      position: absolute;
      top: 100%; left: 0; right: 0;
      background: var(--bg2);
      border-bottom: 1px solid var(--border);
      flex-direction: column;
      padding: 1.5rem 2rem;
      gap: 0.5rem;
    }
    .mobile-menu.open { display: flex; }

    .mob-btn {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--muted);
      background: transparent;
      border: none;
      text-align: left;
      padding: 0.5rem 0;
      cursor: pointer;
      font-family: var(--font);
      transition: color 0.2s;
    }
    .mob-btn:hover, .mob-btn.active { color: var(--cyan); }

    @media (max-width: 700px) {
      .nav-links, .nav-status { display: none; }
      .hamburger { display: flex; }
    }
  `]
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled = false;
  menuOpen = false;
  activeSection = 'home';

  navItems = [
    { id: 'home',     label: 'Home'     },
    { id: 'about',    label: 'About'    },
    { id: 'skills',   label: 'Skills'   },
    { id: 'timeline', label: 'Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact',  label: 'Contact'  },
  ];

  private observer!: IntersectionObserver;

  ngOnInit() {
    setTimeout(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.find(e => e.isIntersecting);
          if (visible) {
            this.activeSection = visible.target.id;
          }
        },
        {
          rootMargin: '-65px 0px -50% 0px',
          threshold: 0
        }
      );
      this.navItems.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) this.observer.observe(el);
      });
    }, 300);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 20;
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = id;
      this.menuOpen = false;
    }
  }
}