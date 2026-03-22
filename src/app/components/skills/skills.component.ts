import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill { name: string; cat: string; pct: number; color: string; icon: string; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-container">
      <div class="section-hd">
        <span class="lbl">// skills &amp; stack</span>
        <span class="line"></span>
        <span class="num">02</span>
      </div>
      <div class="cat-filters">
        <button *ngFor="let c of cats" class="cat-btn" [class.on]="active===c" (click)="filter(c)">{{ c }}</button>
      </div>
      <div class="sk-grid" id="skGrid">
        <div class="sk-card" *ngFor="let s of filtered">
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
            <div class="sk-fill" [style.width.%]="s.pct" [style.background]="s.color"></div>
          </div>
        </div>
      </div>
      <div class="tools-section">
        <p class="tools-label">// tools &amp; environment</p>
        <div class="tools-list">
          <span class="tool" *ngFor="let t of tools">{{ t }}</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cat-filters { display: flex; gap: .4rem; flex-wrap: wrap; margin-bottom: 1.8rem; }
    .cat-btn { padding: .35rem 1rem; font-size: .68rem; font-family: var(--mono); border: 1px solid var(--border); background: transparent; color: var(--muted); cursor: pointer; letter-spacing: .04em; transition: all .2s; border-radius: 2px; }
    .cat-btn:hover { border-color: var(--cyan); color: var(--cyan); }
    .cat-btn.on { border-color: var(--cyan); color: var(--cyan); background: rgba(0,229,195,.06); }
    .sk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); margin-bottom: 2.5rem; }
    .sk-card { background: var(--bg2); padding: 1.2rem 1.3rem; transition: background .2s; }
    .sk-card:hover { background: var(--bg3); }
    .sk-top { display: flex; align-items: center; gap: 10px; margin-bottom: .5rem; }
    .sk-icon { width: 30px; height: 30px; border-radius: 4px; display: flex; align-items: center; justify-content: center; }
    .sk-ico-txt { font-size: 9px; font-weight: 700; font-family: var(--mono); }
    .sk-name { font-size: .88rem; font-weight: 600; color: #fff; }
    .sk-meta { display: flex; justify-content: space-between; margin-bottom: .5rem; }
    .sk-cat { font-family: var(--mono); font-size: .62rem; color: var(--muted); }
    .sk-pct { font-family: var(--mono); font-size: .68rem; }
    .sk-bar { height: 2px; background: var(--dim); }
    .sk-fill { height: 100%; transition: width 1.2s cubic-bezier(.16,1,.3,1); }
    .tools-label { font-family: var(--mono); font-size: .65rem; color: var(--muted); letter-spacing: .08em; text-transform: uppercase; margin-bottom: .8rem; }
    .tools-list { display: flex; flex-wrap: wrap; gap: .4rem; }
    .tool { font-size: .65rem; font-family: var(--mono); padding: .3rem .8rem; border: 1px solid var(--border); color: var(--muted); letter-spacing: .04em; }
    @media(max-width:640px) { .sk-grid{grid-template-columns:repeat(2,1fr);} }
    @media(max-width:400px) { .sk-grid{grid-template-columns:1fr;} }
  `]
})
export class SkillsComponent {
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

  filter(cat: string){ this.active = cat; }
}
