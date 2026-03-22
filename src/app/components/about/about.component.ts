import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-container">
      <div class="section-hd">
        <span class="lbl">// about_me</span>
        <span class="line"></span>
        <span class="num">01</span>
      </div>
      <div class="about-grid">
        <div class="about-left animate-up d1">
          <h2 class="headline">Developer with a<br><em>builder's mindset.</em></h2>
          <p class="bio">I'm <strong>Ankit Gupta</strong>, a Full Stack Developer currently working at <strong>Setu Net Pvt Ltd</strong> in Vapi, Gujarat. With 2+ years of real-world experience in Angular, .NET, and SQL Server, I've learned that the best developers are those who understand the problem deeply, not just write code fast.</p>
          <p class="bio mt">I'm driven by curiosity — I love learning new things, making mistakes, figuring out why, and never repeating them. Right now my biggest focus is stepping into AI development: building smart tools and agents that combine my full-stack skills with the power of LLMs.</p>
          <p class="bio mt">My long-term goal? Build products that solve real problems and generate income — so I can be financially free and keep building what matters.</p>
          <div class="quote-block">
            <p>"Always eager to learn more — make mistakes, but never repeat them."</p>
            <span>— Ankit Gupta</span>
          </div>
        </div>
        <div class="about-right animate-up d2">
          <div class="info-table">
            <div class="info-row" *ngFor="let d of details">
              <span class="ik">{{ d.key }}</span>
              <span class="iv" [style.color]="d.color || ''">{{ d.val }}</span>
            </div>
          </div>
          <div class="hobbies-section">
            <p class="hob-label">// interests &amp; hobbies</p>
            <div class="hob-grid">
              <div class="hob-card" *ngFor="let h of hobbies">
                <span class="hob-icon">{{ h.icon }}</span>
                <span class="hob-name">{{ h.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
    .headline { font-size: 1.9rem; font-weight: 700; letter-spacing: -.03em; line-height: 1.2; margin-bottom: 1.5rem; }
    .headline em { font-style: italic; color: var(--cyan); }
    .bio { font-size: .88rem; color: #94a3b8; line-height: 1.9; font-weight: 300; }
    .bio strong { color: var(--cyan); font-weight: 500; }
    .mt { margin-top: 1rem; }
    .quote-block { margin-top: 1.5rem; padding: 1rem 1.2rem; border-left: 2px solid var(--cyan); background: var(--bg2); }
    .quote-block p { font-size: .85rem; font-style: italic; color: var(--muted); line-height: 1.7; margin-bottom: .4rem; }
    .quote-block span { font-family: var(--mono); font-size: .65rem; color: var(--muted); }
    .info-table { border: 1px solid var(--border); margin-bottom: 1.5rem; }
    .info-row { display: flex; justify-content: space-between; align-items: center; padding: .75rem 1rem; border-bottom: 1px solid var(--border); font-size: .8rem; }
    .info-row:last-child { border-bottom: none; }
    .ik { font-family: var(--mono); font-size: .65rem; color: var(--muted); letter-spacing: .04em; text-transform: uppercase; }
    .iv { font-weight: 500; text-align: right; font-size: .82rem; }
    .hob-label { font-family: var(--mono); font-size: .65rem; color: var(--muted); letter-spacing: .08em; text-transform: uppercase; margin-bottom: .8rem; }
    .hob-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: .5rem; }
    .hob-card { display: flex; align-items: center; gap: 8px; padding: .6rem .8rem; background: var(--bg2); border: 1px solid var(--border); font-size: .78rem; color: var(--muted); transition: all .2s; }
    .hob-card:hover { border-color: rgba(0,229,195,.3); color: var(--text); }
    .hob-icon { font-size: 14px; }
    @media(max-width:768px) { .about-grid{grid-template-columns:1fr;} }
  `]
})
export class AboutComponent {
  details = [
    { key: 'Name',       val: 'Ankit Gupta' },
    { key: 'Company',    val: 'Setu Net Pvt Ltd', color: 'var(--cyan)' },
    { key: 'Location',   val: 'Vapi, Gujarat, India' },
    { key: 'Experience', val: '2+ Years' },
    { key: 'Stack',      val: 'Angular · .NET · SQL' },
    { key: 'Email',      val: 'ankitjguptaforwork@gmail.com', color: 'var(--cyan)' },
    { key: 'GitHub',     val: 'github.com/ankit-for-work', color: 'var(--cyan)' },
    { key: 'LinkedIn',   val: 'linkedin.com/in/ankit-gupta', color: 'var(--cyan)' },
    { key: 'Status',     val: 'Open to Freelance', color: '#22c55e' },
    { key: 'Next Goal',  val: 'AI Product Dev', color: 'var(--purple)' },
  ];

  hobbies = [
    { icon: '🎵', name: 'Music' },
    { icon: '🎮', name: 'Gaming' },
    { icon: '📖', name: 'Reading & Learning' },
    { icon: '✏️', name: 'Sketching' },
    { icon: '🤖', name: 'AI / Tech' },
    { icon: '💡', name: 'Problem Solving' },
  ];
}
