import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="section-container">
      <div class="section-hd" scrollReveal>
        <span class="lbl">// selected_projects</span>
        <span class="line"></span>
        <span class="num">04</span>
      </div>
      <div class="proj-grid">
        <div class="proj-card"
             *ngFor="let p of projects; let i = index"
             [class.featured]="p.featured"
             scrollReveal revealDir="up" [revealDelay]="i * 90"
             (mousemove)="onCardTilt($event, $any($event.currentTarget))"
             (mouseleave)="resetCardTilt($any($event.currentTarget))">
          <div class="proj-header">
            <span class="proj-num">// {{ p.num }}</span>
            <span class="proj-badge"
                  [class.done]="p.status==='Completed'"
                  [class.wip]="p.status==='In Progress'">{{ p.status }}</span>
          </div>
          <div class="proj-year">{{ p.year }}</div>
          <h3 class="proj-title">{{ p.title }}</h3>
          <p class="proj-desc">{{ p.desc }}</p>
          <div class="proj-stack">
            <span class="proj-tag" *ngFor="let t of p.tags">{{ t }}</span>
          </div>
          <div class="proj-foot">
            <span class="proj-link" [style.color]="p.featured ? 'var(--cyan)' : ''">
              View Details <span class="arrow">→</span>
            </span>
          </div>
          <!-- shimmer border for featured -->
          <div class="featured-shimmer" *ngIf="p.featured"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ── grid ── */
    .proj-grid {
      display: grid; grid-template-columns: repeat(2,1fr);
      gap: 1px; background: var(--border); border: 1px solid var(--border);
    }

    /* ── card ── */
    .proj-card {
      background: var(--bg2); padding: 1.6rem 1.5rem;
      cursor: pointer; position: relative; overflow: hidden;
      transition: background .2s, box-shadow .3s var(--ease-spring);
      will-change: transform;
      transform-style: preserve-3d;
    }
    .proj-card:hover {
      background: var(--bg3);
      box-shadow: 0 16px 48px rgba(0,0,0,0.4);
      z-index: 2;
    }

    /* Featured card */
    .proj-card.featured { grid-column: span 2; }

    /* Shimmer border overlay on featured */
    .featured-shimmer {
      position: absolute; inset: 0; pointer-events: none;
      border: 1px solid transparent;
      background: linear-gradient(var(--bg2), var(--bg2)) padding-box,
                  linear-gradient(90deg, var(--cyan), var(--purple), var(--cyan)) border-box;
      background-size: 200% 100%;
      animation: shimmerBorder 3s linear infinite;
      opacity: 0.5;
    }
    @keyframes shimmerBorder {
      0%   { background-position: 0% 0, 0% 0; }
      100% { background-position: 0% 0, 200% 0; }
    }

    /* ── card content ── */
    .proj-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: .5rem; }
    .proj-num { font-family: var(--mono); font-size: .65rem; color: var(--muted); }
    .proj-badge {
      font-size: .6rem; font-family: var(--mono); padding: 2px 8px;
      border: 1px solid; letter-spacing: .04em;
    }
    .proj-badge.done { border-color: rgba(34,197,94,.4); color: #22c55e; }
    .proj-badge.wip  {
      border-color: rgba(251,191,36,.4); color: #fbbf24;
      animation: wipPulse 2s ease-in-out infinite;
    }
    @keyframes wipPulse { 0%,100%{opacity:1;} 50%{opacity:0.45;} }

    .proj-year { font-family: var(--mono); font-size: .65rem; color: var(--muted); margin-bottom: .6rem; }
    .proj-title { font-size: 1rem; font-weight: 600; color: #fff; margin-bottom: .5rem; letter-spacing: -.01em; transition: color .2s; }
    .proj-card:hover .proj-title { color: var(--cyan); }
    .featured .proj-title { font-size: 1.3rem; }

    .proj-desc { font-size: .78rem; color: #64748b; line-height: 1.7; font-weight: 300; margin-bottom: 1rem; }
    .proj-stack { display: flex; flex-wrap: wrap; gap: .4rem; margin-bottom: 1rem; }
    .proj-tag {
      font-size: .6rem; font-family: var(--mono); padding: 2px 7px;
      border: 1px solid var(--border); color: var(--muted);
      transition: all .2s var(--ease-spring);
    }
    .proj-card:hover .proj-tag { border-color: rgba(0,229,195,.2); }

    /* footer */
    .proj-foot { border-top: 1px solid var(--border); padding-top: .8rem; }
    .proj-link { font-size: .7rem; font-family: var(--mono); color: var(--muted); transition: color .2s; display: inline-flex; align-items: center; gap: 4px; }
    .proj-card:hover .proj-link { color: var(--cyan); }
    .arrow { display: inline-block; transition: transform .25s var(--ease-spring); }
    .proj-card:hover .arrow { transform: translateX(4px); }

    @media(max-width:640px) { .proj-grid{grid-template-columns:1fr;} .proj-card.featured{grid-column:1;} }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      num: '01 — Featured', year: '2024', featured: true, status: 'Completed',
      title: 'Inventory Management System',
      desc: 'Full-featured inventory platform for SMBs. Real-time stock tracking, purchase orders, supplier management, low-stock alerts, and a reporting dashboard. Clean architecture with role-based access control. Built with Angular 17 standalone components + .NET 7 Web API + SQL Server.',
      tags: ['Angular 17','C# .NET 7','SQL Server','REST API','SCSS','TypeScript','Angular Material']
    },
    {
      num: '02', year: '2023', featured: false, status: 'Completed',
      title: 'HR Leave Management Portal',
      desc: 'Multi-level leave approval with email notifications and HR analytics. Configurable workflows by admin.',
      tags: ['Angular','.NET','SQL','Email API']
    },
    {
      num: '03', year: '2024', featured: false, status: 'Completed',
      title: 'E-Commerce Admin Dashboard',
      desc: 'Admin panel with order management, product catalog, customer data, and Chart.js revenue analytics.',
      tags: ['Angular','.NET','SQL','Chart.js']
    },
    {
      num: '04', year: '2025', featured: false, status: 'In Progress',
      title: 'AI Chat Assistant (Learning)',
      desc: 'Angular + .NET app integrated with LLM APIs. First step into AI product development.',
      tags: ['Angular','AI API','.NET','TypeScript']
    },
  ];

  onCardTilt(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -3;
    const rotateY = ((x - cx) / cx) * 3;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
  }

  resetCardTilt(card: HTMLElement) {
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
  }
}
