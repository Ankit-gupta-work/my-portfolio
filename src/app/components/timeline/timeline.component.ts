import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="section-container">
      <div class="section-hd" scrollReveal>
        <span class="lbl">// work_timeline</span>
        <span class="line"></span>
        <span class="num">03</span>
      </div>
      <div class="timeline" #timelineEl>
        <div class="tl-line-wrap">
          <div class="tl-line" id="tlLine"></div>
        </div>
        <div class="tl-item"
             *ngFor="let item of timeline; let i = index"
             scrollReveal [revealDir]="i % 2 === 0 ? 'left' : 'right'" [revealDelay]="i * 140">
          <div class="tl-dot-wrap">
            <div class="tl-dot" [class.current]="item.current" [style.border-color]="item.dotColor || 'var(--cyan)'"></div>
            <div class="tl-dot-pulse" *ngIf="item.current"></div>
          </div>
          <div class="tl-content">
            <div class="tl-year" [style.color]="item.dotColor || 'var(--cyan)'">{{ item.year }}</div>
            <h3 class="tl-role">{{ item.role }}</h3>
            <div class="tl-company">{{ item.company }}</div>
            <p class="tl-desc">{{ item.desc }}</p>
            <div class="tl-tags">
              <span class="tl-tag"
                *ngFor="let t of item.tags; let j = index"
                [style.animation-delay]="(j * 50) + 'ms'"
                [style.border-color]="item.dotColor ? item.dotColor+'55' : ''"
                [style.color]="item.dotColor || ''">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline { position: relative; padding-left: 2.5rem; }

    /* The animated vertical line */
    .tl-line-wrap {
      position: absolute; left: 4px; top: 8px; bottom: 0;
      width: 1px; overflow: hidden;
    }
    .tl-line {
      width: 1px; height: 0;
      background: linear-gradient(to bottom, var(--cyan) 0%, var(--border) 60%);
      transition: height 1.4s cubic-bezier(.16,1,.3,1);
    }
    .tl-line.drawn { height: 100%; }

    /* Items */
    .tl-item { position: relative; margin-bottom: 3rem; padding-left: .5rem; }

    /* Dot wrapper */
    .tl-dot-wrap {
      position: absolute; left: -2.5rem; top: 5px;
      width: 14px; height: 14px;
    }
    .tl-dot {
      width: 10px; height: 10px; border: 2px solid; border-radius: 50%;
      background: var(--bg);
      position: absolute; top: 2px; left: 2px;
      animation: dotPop .5s var(--ease-spring) both;
      transition: box-shadow .3s;
    }
    .tl-dot.current {
      background: var(--cyan) !important;
      border-color: var(--cyan) !important;
      box-shadow: 0 0 10px rgba(0,229,195,0.5);
    }

    /* Pulse ring for current dot */
    .tl-dot-pulse {
      position: absolute; inset: 0;
      border-radius: 50%;
      border: 1.5px solid var(--cyan);
      animation: dotRingPulse 2s ease-out infinite;
    }
    @keyframes dotRingPulse {
      0%   { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(2.4); opacity: 0; }
    }
    @keyframes dotPop {
      0%  { transform: scale(0); }
      70% { transform: scale(1.25); }
      100%{ transform: scale(1); }
    }

    /* Content */
    .tl-year { font-family: var(--mono); font-size: .68rem; letter-spacing: .06em; margin-bottom: .4rem; }
    .tl-role { font-size: 1.05rem; font-weight: 600; color: #fff; margin-bottom: .3rem; }
    .tl-company { font-size: .82rem; color: var(--muted); margin-bottom: .7rem; display: flex; align-items: center; gap: 5px; }
    .tl-company::before { content: '@'; color: var(--cyan); font-family: var(--mono); }
    .tl-desc { font-size: .83rem; color: #64748b; line-height: 1.75; margin-bottom: .8rem; font-weight: 300; }

    /* Tags with stagger */
    .tl-tags { display: flex; flex-wrap: wrap; gap: .4rem; }
    .tl-tag {
      font-size: .62rem; font-family: var(--mono); padding: 2px 7px;
      border: 1px solid var(--border); color: var(--muted);
      transition: all .2s var(--ease-spring);
      animation: tagSlideIn .4s var(--ease-spring) both;
    }
    .tl-tag:hover { transform: translateY(-2px); border-color: rgba(0,229,195,.35); color: var(--cyan); }
    @keyframes tagSlideIn {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class TimelineComponent implements AfterViewInit {
  timeline = [
    {
      year: '2023 — Present',
      role: 'Full Stack Developer',
      company: 'Setu Net Pvt Ltd · Vapi, Gujarat',
      desc: 'Building and maintaining enterprise web applications end-to-end. Responsible for Angular frontends, .NET Web API backends, and SQL Server databases. Involved in full SDLC from requirement gathering to production deployment. Delivered HR systems, inventory management platforms, and client-facing dashboards.',
      tags: ['Angular 17','C# .NET','SQL Server','REST API','TypeScript','SSMS'],
      current: true,
      dotColor: ''
    },
    {
      year: '2023 — Early',
      role: 'Junior Developer',
      company: 'Setu Net Pvt Ltd · Vapi, Gujarat',
      desc: 'Started as a junior developer. Worked on Angular UI components, basic CRUD operations using .NET Web API, and database queries in SQL Server. Learned enterprise development workflows, clean code practices, and team collaboration.',
      tags: ['Angular','HTML/CSS','SQL','C#'],
      current: false,
      dotColor: ''
    },
    {
      year: '2025 — Ongoing (Self-Learning)',
      role: 'Freelance + AI Development',
      company: 'Independent',
      desc: 'Actively learning AI API integration and building AI-powered tools by combining existing Angular + .NET skills with LLM APIs. Working on side projects and freelance work to create additional income streams. Goal: ship small products that solve real problems.',
      tags: ['AI APIs','LLM','Freelance','Product Dev','Angular + AI'],
      current: false,
      dotColor: '#7c6bff'
    },
  ];

  ngAfterViewInit() {
    // Animate timeline line draw when section enters view
    const lineEl = document.getElementById('tlLine');
    if (!lineEl) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        lineEl.classList.add('drawn');
        obs.disconnect();
      }
    }, { threshold: 0.05 });
    obs.observe(lineEl.parentElement!);
  }
}
