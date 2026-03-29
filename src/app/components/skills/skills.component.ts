import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface Skill { name: string; cat: string; pct: number; color: string; icon: string; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section class="section-container">
      <div class="section-hd" scrollReveal>
        <span class="lbl">// skills &amp; stack</span>
        <span class="line"></span>
        <span class="num">02</span>
      </div>
      <div class="cat-filters" scrollReveal revealDir="up" [revealDelay]="50">
        <button *ngFor="let c of cats" class="cat-btn" [class.on]="active===c" (click)="filter(c)">{{ c }}</button>
      </div>
      <div class="sk-grid" id="skGrid">
        <div class="sk-card"
             *ngFor="let s of filtered; let i = index"
             scrollReveal revealDir="up" [revealDelay]="i * 60"
             (mousemove)="onTilt($event, $any($event.currentTarget))"
             (mouseleave)="resetTilt($any($event.currentTarget))">
          <div class="sk-top">
            <div class="sk-icon" [style.background]="s.color+'18'" [style.border]="'1px solid '+s.color+'40'">
              <span class="sk-ico-txt" [style.color]="s.color">{{ s.icon }}</span>
            </div>
            <span class="sk-name">{{ s.name }}</span>
          </div>
          <div class="sk-meta">
            <span class="sk-cat">{{ s.cat }}</span>
            <span class="sk-pct" [style.color]="s.color">{{ s.pct }}%</span>
          </div>
          <div class="sk-bar">
            <div class="sk-fill" [style.background]="s.color" [attr.data-pct]="s.pct" style="width:0%"></div>
          </div>
        </div>
      </div>
      <div class="tools-section" scrollReveal revealDir="up" [revealDelay]="100">
        <p class="tools-label">// tools &amp; environment</p>
        <div class="tools-list">
          <span class="tool" *ngFor="let t of tools; let i = index" [style.animation-delay]="(i * 40) + 'ms'">{{ t }}</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* ── filter pills ── */
    .cat-filters { display: flex; gap: .4rem; flex-wrap: wrap; margin-bottom: 1.8rem; }
    .cat-btn {
      padding: .35rem 1rem; font-size: .68rem; font-family: var(--mono);
      border: 1px solid var(--border); background: transparent; color: var(--muted);
      cursor: pointer; letter-spacing: .04em;
      transition: all .25s var(--ease-spring), transform .2s var(--ease-spring);
      border-radius: 2px; position: relative; overflow: hidden;
    }
    .cat-btn::after {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(0,229,195,0.12) 50%, transparent 100%);
      background-size: 200% 100%;
      opacity: 0;
      transition: opacity .3s;
    }
    .cat-btn:hover { border-color: var(--cyan); color: var(--cyan); transform: translateY(-1px); }
    .cat-btn.on {
      border-color: var(--cyan); color: var(--cyan);
      background: rgba(0,229,195,.06);
      box-shadow: 0 2px 12px rgba(0,229,195,0.1);
    }
    .cat-btn.on::after { opacity: 1; animation: shimmerSlide 2s linear infinite; }
    @keyframes shimmerSlide {
      from { background-position: -200% 0; }
      to   { background-position: 200% 0; }
    }

    /* ── skill grid ── */
    .sk-grid {
      display: grid; grid-template-columns: repeat(3, 1fr);
      gap: 1px; background: var(--border); border: 1px solid var(--border);
      margin-bottom: 2.5rem;
    }
    .sk-card {
      background: var(--bg2); padding: 1.2rem 1.3rem;
      transition: background .2s, box-shadow .25s, transform .25s var(--ease-spring);
      will-change: transform;
      transform-style: preserve-3d;
    }
    .sk-card:hover {
      background: var(--bg3);
      box-shadow: 0 8px 30px rgba(0,0,0,0.3);
      z-index: 2;
    }
    .sk-top { display: flex; align-items: center; gap: 10px; margin-bottom: .5rem; }
    .sk-icon {
      width: 30px; height: 30px; border-radius: 4px;
      display: flex; align-items: center; justify-content: center;
      transition: transform .25s var(--ease-spring);
    }
    .sk-card:hover .sk-icon { transform: scale(1.1); }
    .sk-ico-txt { font-size: 9px; font-weight: 700; font-family: var(--mono); }
    .sk-name { font-size: .88rem; font-weight: 600; color: #fff; }
    .sk-meta { display: flex; justify-content: space-between; margin-bottom: .5rem; }
    .sk-cat { font-family: var(--mono); font-size: .62rem; color: var(--muted); }
    .sk-pct { font-family: var(--mono); font-size: .68rem; }
    .sk-bar { height: 2px; background: var(--dim); overflow: hidden; }
    .sk-fill {
      height: 100%;
      transition: width 1.1s cubic-bezier(.16,1,.3,1);
    }

    /* ── tools ── */
    .tools-label { font-family: var(--mono); font-size: .65rem; color: var(--muted); letter-spacing: .08em; text-transform: uppercase; margin-bottom: .8rem; }
    .tools-list { display: flex; flex-wrap: wrap; gap: .4rem; }
    .tool {
      font-size: .65rem; font-family: var(--mono); padding: .3rem .8rem;
      border: 1px solid var(--border); color: var(--muted); letter-spacing: .04em;
      transition: all .2s var(--ease-spring);
      animation: toolFadeIn .4s var(--ease-spring) both;
    }
    .tool:hover { border-color: rgba(0,229,195,.3); color: var(--cyan); transform: translateY(-1px); }
    @keyframes toolFadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media(max-width:640px) { .sk-grid{grid-template-columns:repeat(2,1fr);} }
    @media(max-width:400px) { .sk-grid{grid-template-columns:1fr;} }
  `]
})
export class SkillsComponent implements AfterViewInit {
  active = 'All';
  cats = ['All','Frontend','Backend','Database','Tools','Learning'];
  skills: Skill[] = [
    { name:'Angular',             cat:'Frontend',  pct:80, color:'#dd0031', icon:'A'  },
    { name:'TypeScript',          cat:'Frontend',  pct:75, color:'#3178c6', icon:'TS' },
    { name:'HTML / CSS / SCSS',   cat:'Frontend',  pct:86, color:'#e34f26', icon:'H5' },
    { name:'.NET / C#',           cat:'Backend',   pct:75, color:'#512bd4', icon:'#'  },
    { name:'REST API Design',     cat:'Backend',   pct:79, color:'#00e5c3', icon:'~'  },
    { name:'SQL Server',          cat:'Database',  pct:73, color:'#cc2927', icon:'DB' },
    { name:'Database Design',     cat:'Database',  pct:68, color:'#f29111', icon:'ER' },
    { name:'Git / GitHub',        cat:'Tools',     pct:73, color:'#f05032', icon:'G'  },
    { name:'VS Code + VS Studio', cat:'Tools',     pct:88, color:'#007acc', icon:'VS' },
    { name:'Problem Solving',     cat:'Tools',     pct:90, color:'#7c6bff', icon:'PS' },
    { name:'AI / LLM APIs',       cat:'Learning',  pct:28, color:'#7c6bff', icon:'AI' },
    { name:'Python Basics',       cat:'Learning',  pct:22, color:'#3776ab', icon:'Py' },
  ];
  tools = ['Visual Studio 2022','VS Code','SQL Server Management Studio','Git','Postman','Azure DevOps','Angular CLI','IIS','npm','Jira','Figma (basics)'];

  get filtered(){ return this.active==='All' ? this.skills : this.skills.filter(s=>s.cat===this.active); }

  filter(cat: string){
    this.active = cat;
    // re-trigger bar animations after filter change
    setTimeout(() => this.animateBars(), 80);
  }

  ngAfterViewInit() {
    // Observe the grid to trigger bars when in view
    const grid = document.getElementById('skGrid');
    if (!grid) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.animateBars();
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(grid);
  }

  animateBars() {
    const fills = document.querySelectorAll<HTMLElement>('.sk-fill');
    fills.forEach((el) => {
      const pct = el.getAttribute('data-pct');
      if (pct) {
        el.style.width = '0%';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.width = pct + '%';
          });
        });
      }
    });
  }

  onTilt(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -4;
    const rotateY = ((x - cx) / cx) * 4;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
  }

  resetTilt(card: HTMLElement) {
    card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateZ(0)';
  }
}
