import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-container">
      <div class="section-hd">
        <span class="lbl">// work_timeline</span>
        <span class="line"></span>
        <span class="num">03</span>
      </div>
      <div class="timeline">
        <div class="tl-line"></div>
        <div class="tl-item animate-up d1" *ngFor="let item of timeline">
          <div class="tl-dot" [class.current]="item.current" [style.border-color]="item.dotColor || 'var(--cyan)'"></div>
          <div class="tl-content">
            <div class="tl-year" [style.color]="item.dotColor || 'var(--cyan)'">{{ item.year }}</div>
            <h3 class="tl-role">{{ item.role }}</h3>
            <div class="tl-company">{{ item.company }}</div>
            <p class="tl-desc">{{ item.desc }}</p>
            <div class="tl-tags">
              <span class="tl-tag" *ngFor="let t of item.tags"
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
    .tl-line { position: absolute; left: 4px; top: 8px; bottom: 0; width: 1px; background: var(--border); }
    .tl-item { position: relative; margin-bottom: 3rem; padding-left: .5rem; }
    .tl-dot { position: absolute; left: -2.5rem; top: 5px; width: 10px; height: 10px; border: 2px solid; border-radius: 50%; background: var(--bg); }
    .tl-dot.current { background: var(--cyan) !important; border-color: var(--cyan) !important; }
    .tl-year { font-family: var(--mono); font-size: .68rem; letter-spacing: .06em; margin-bottom: .4rem; }
    .tl-role { font-size: 1.05rem; font-weight: 600; color: #fff; margin-bottom: .3rem; }
    .tl-company { font-size: .82rem; color: var(--muted); margin-bottom: .7rem; display: flex; align-items: center; gap: 5px; }
    .tl-company::before { content: '@'; color: var(--cyan); font-family: var(--mono); }
    .tl-desc { font-size: .83rem; color: #64748b; line-height: 1.75; margin-bottom: .8rem; font-weight: 300; }
    .tl-tags { display: flex; flex-wrap: wrap; gap: .4rem; }
    .tl-tag { font-size: .62rem; font-family: var(--mono); padding: 2px 7px; border: 1px solid var(--border); color: var(--muted); }
  `]
})
export class TimelineComponent {
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
}
