import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-grid">

          <div class="hero-left">
            <div class="eyebrow animate-up d1">
              <span class="eline"></span>
              FULL STACK DEVELOPER · VAPI, GUJARAT
            </div>
            <h1 class="hero-title animate-up d2">
              <span class="comment">// hello world</span>
              <span class="name-main">Ankit</span>
              <span class="name-accent">Gupta<span class="dot-purple">.</span></span>
            </h1>
            <p class="tagline animate-up d3">
              "I learn through experience, refine my approach, and ensure mistakes become lessons—not patterns."
            </p>
            <div class="badges animate-up d3">
              <span class="badge cyan">Angular 17</span>
              <span class="badge cyan">.NET / C#</span>
              <span class="badge cyan">SQL Server</span>
              <span class="badge cyan">PostgreSql</span>
              <span class="badge">TypeScript</span>
              <span class="badge">Deployment</span>
              <span class="badge">DevOps</span>
              <span class="badge">Linux Basics</span>
              <span class="badge">REST APIs</span>
              <span class="badge purple">AI — Next Focus</span>
            </div>
            <div class="ctas animate-up d4">
              <a routerLink="/projects" class="btn-primary">View Projects</a>
              <a routerLink="/contact" class="btn-ghost">Hire Me</a>
            </div>
            <div class="socials animate-up d5">
              <a href="https://github.com/ankit-for-work" target="_blank" class="social">[ GitHub ]</a>
              <a href="https://linkedin.com/in/ankit-gupta" target="_blank" class="social">[ LinkedIn ]</a>
              <a href="mailto:ankitjguptaforwork@gmail.com" class="social">[ Email ]</a>
            </div>
            <div class="stats-row animate-up d5">
              <div class="stat"><span class="sn" id="s1">0</span><span class="sl">Years Exp.</span></div>
              <div class="sdiv"></div>
              <div class="stat"><span class="sn" id="s2">0</span><span class="sl">Projects</span></div>
              <div class="sdiv"></div>
           <!--   <div class="stat"><span class="sn">3</span><span class="sl">Core Stacks</span></div>  -->
               <!--    <div class="sdiv"></div>  -->
              <div class="stat"><span class="sn" style="color:var(--purple)">AI</span><span class="sl">Next Focus</span></div>
            </div>
          </div>

          <div class="hero-right animate-up d2">
            <div class="avatar-scene">
              <div class="ring r1"><span class="rdot"></span></div>
              <div class="ring r2"><span class="rdot2"></span></div>
              <svg class="av-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="100,10 175,55 175,145 100,190 25,145 25,55" fill="#0d1320" stroke="#1e2d3d" stroke-width="1"/>
                <polygon points="100,25 160,62 160,138 100,175 40,138 40,62" fill="#111827" stroke="#1e2d3d" stroke-width="0.5"/>
                <circle cx="100" cy="78" r="28" fill="#0d1320" stroke="#00e5c3" stroke-width="1.5"/>
                <circle cx="100" cy="78" r="20" fill="#111827"/>
                <circle cx="91" cy="75" r="4.5" fill="#00e5c3" opacity="0.95"/>
                <circle cx="109" cy="75" r="4.5" fill="#00e5c3" opacity="0.95"/>
                <circle cx="92" cy="74" r="1.5" fill="#080c12"/>
                <circle cx="110" cy="74" r="1.5" fill="#080c12"/>
                <path d="M88 90 Q100 98 112 90" stroke="#00e5c3" stroke-width="1.5" fill="none" stroke-linecap="round"/>
                <rect x="72" y="56" width="56" height="8" rx="3" fill="#0d1320" stroke="#1e2d3d" stroke-width="0.5"/>
                <rect x="78" y="58" width="44" height="4" rx="1.5" fill="#00e5c3" opacity="0.25"/>
                <path d="M58 110 Q100 100 142 110 L150 155 Q100 166 50 155 Z" fill="#0d1320" stroke="#1e2d3d" stroke-width="1"/>
                <rect x="80" y="118" width="40" height="26" rx="3" fill="#111827" stroke="#00e5c3" stroke-width="0.8" opacity="0.9"/>
                <text x="100" y="131" font-size="6.5" fill="#00e5c3" text-anchor="middle" font-family="monospace" opacity="0.9">const dev =</text>
                <text x="100" y="140" font-size="6.5" fill="#7c6bff" text-anchor="middle" font-family="monospace">&quot;Ankit&quot;;</text>
                <line x1="50" y1="110" x2="38" y2="150" stroke="#1e2d3d" stroke-width="1"/>
                <line x1="150" y1="110" x2="162" y2="150" stroke="#1e2d3d" stroke-width="1"/>
                <circle cx="38" cy="152" r="5" fill="#0d1320" stroke="#7c6bff" stroke-width="1.5"/>
                <circle cx="162" cy="152" r="5" fill="#0d1320" stroke="#7c6bff" stroke-width="1.5"/>
                <polygon points="100,10 122,30 100,26 78,30" fill="#00e5c3" opacity="0.2"/>
                <polygon points="175,55 168,82 161,64 170,45" fill="#7c6bff" opacity="0.2"/>
                <polygon points="25,145 32,118 40,138 30,158" fill="#00e5c3" opacity="0.12"/>
              </svg>
              <span class="ftag t1">Angular v17</span>
              <span class="ftag t2">.NET + SQL</span>
              <span class="ftag t3">AI Ready ✦</span>
            </div>
          </div>

        </div>
      </div>
      <div class="marquee-bar">
        <div class="marquee-track">
          <span>Angular</span><span class="sep">·</span>
          <span>.NET C#</span><span class="sep">·</span>
          <span>SQL Server</span><span class="sep">·</span>
          <span>TypeScript</span><span class="sep">·</span>
          <span>REST APIs</span><span class="sep">·</span>
          <span>Full Stack</span><span class="sep">·</span>
          <span>AI Dev</span><span class="sep">·</span>
          <span>Freelance</span><span class="sep">·</span>
          <span>Angular</span><span class="sep">·</span>
          <span>.NET C#</span><span class="sep">·</span>
          <span>SQL Server</span><span class="sep">·</span>
          <span>TypeScript</span><span class="sep">·</span>
          <span>REST APIs</span><span class="sep">·</span>
          <span>Full Stack</span><span class="sep">·</span>
          <span>AI Dev</span><span class="sep">·</span>
          <span>Freelance</span><span class="sep">·</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { min-height: calc(100vh - 65px); display: flex; flex-direction: column; }
    .hero-inner { flex: 1; max-width: 1000px; margin: 0 auto; padding: 3rem 2rem 1rem; }
    .hero-grid { display: grid; grid-template-columns: 1fr 360px; gap: 3rem; align-items: center; min-height: 80vh; }
    .eyebrow {
      display: flex; align-items: center; gap: 8px;
      font-family: var(--mono); font-size: .68rem; color: var(--cyan); letter-spacing: .1em;
      margin-bottom: 1.2rem;
    }
    .eline { width: 28px; height: 1px; background: var(--cyan); }
    .hero-title { line-height: 1; letter-spacing: -.03em; margin-bottom: 1.2rem; }
    .comment { display: block; font-family: var(--mono); font-size: .85rem; color: var(--muted); font-weight: 400; margin-bottom: .5rem; }
    .name-main { display: block; font-size: clamp(3rem,6vw,5rem); font-weight: 700; color: #fff; }
    .name-accent { display: block; font-size: clamp(3rem,6vw,5rem); font-weight: 700; color: var(--cyan); }
    .dot-purple { color: var(--purple); }
    .tagline {
      font-size: .95rem; color: var(--muted); line-height: 1.8; font-style: italic;
      border-left: 2px solid var(--cyan); padding-left: 1rem;
      margin-bottom: 1.5rem; max-width: 440px;
    }
    .badges { display: flex; flex-wrap: wrap; gap: .5rem; margin-bottom: 2rem; }
    .badge { padding: .3rem .8rem; font-size: .68rem; font-family: var(--mono); border: 1px solid var(--border); color: var(--muted); letter-spacing: .04em; }
    .badge.cyan { border-color: rgba(0,229,195,.35); color: var(--cyan); background: rgba(0,229,195,.04); }
    .badge.purple { border-color: rgba(124,107,255,.35); color: var(--purple); background: rgba(124,107,255,.04); }
    .ctas { display: flex; gap: .8rem; flex-wrap: wrap; margin-bottom: 2rem; }
    .btn-primary { padding: .75rem 1.8rem; background: var(--cyan); color: #080c12; font-size: .78rem; font-weight: 600; border: none; text-transform: uppercase; letter-spacing: .06em; transition: background .2s; }
    .btn-primary:hover { background: #00c4a8; }
    .btn-ghost { padding: .75rem 1.8rem; background: transparent; color: var(--cyan); font-size: .78rem; border: 1px solid rgba(0,229,195,.4); text-transform: uppercase; letter-spacing: .06em; transition: all .2s; }
    .btn-ghost:hover { background: rgba(0,229,195,.07); }
    .socials { display: flex; gap: 1.2rem; margin-bottom: 2.5rem; }
    .social { font-family: var(--mono); font-size: .7rem; color: var(--muted); transition: color .2s; }
    .social:hover { color: var(--cyan); }
    .stats-row { display: flex; align-items: center; gap: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border); }
    .stat { display: flex; flex-direction: column; gap: 3px; }
    .sn { font-family: var(--mono); font-size: 1.5rem; font-weight: 600; color: var(--cyan); line-height: 1; }
    .sl { font-size: .62rem; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); }
    .sdiv { width: 1px; height: 36px; background: var(--border); }
    .avatar-scene { position: relative; width: 300px; height: 300px; display: flex; align-items: center; justify-content: center; margin: auto; }
    .ring { border-radius: 50%; position: absolute; display: flex; align-items: center; justify-content: center; border: 1px solid; }
    .r1 { width: 300px; height: 300px; border-color: var(--border); animation: spin 22s linear infinite; }
    .r2 { width: 240px; height: 240px; border-color: rgba(0,229,195,.18); animation: spin 15s linear infinite reverse; }
    .rdot { width: 8px; height: 8px; border-radius: 50%; background: var(--cyan); position: absolute; top: -4px; left: 50%; margin-left: -4px; }
    .rdot2 { width: 5px; height: 5px; border-radius: 50%; background: var(--purple); position: absolute; top: -2.5px; left: 50%; margin-left: -2.5px; }
    .av-svg { width: 190px; height: 190px; position: absolute; z-index: 2; }
    .ftag { position: absolute; font-family: var(--mono); font-size: .6rem; padding: 4px 10px; background: var(--bg3); border: 1px solid var(--border); color: var(--cyan); letter-spacing: .04em; z-index: 3; white-space: nowrap; }
    .t1 { top: 10px; right: -10px; }
    .t2 { bottom: 30px; left: -10px; }
    .t3 { top: 50%; right: -20px; transform: translateY(-50%); }
    .marquee-bar { display: none; bottom: 0; left: 0; right: 0; border-top: 1px solid var(--border); overflow: hidden; padding: .9rem 0; z-index: 10; background: var(--bg2); }
    .marquee-track { display: flex; gap: 2rem; width: max-content; animation: marquee 20s linear infinite; font-family: var(--mono); font-size: .65rem; letter-spacing: .1em; color: var(--muted); text-transform: uppercase; }
    .sep { color: var(--cyan); }
    @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    @media(max-width:768px) { .hero-grid{grid-template-columns:1fr;} .hero-right{display:none;} }
  `]
})
export class HeroComponent implements OnInit {
  ngOnInit(){
    setTimeout(()=>{ this.counter('s1',2); this.counter('s2',5); }, 700);
  }
  counter(id: string, target: number){
    const el = document.getElementById(id); if(!el) return;
    let c=0; const step=target/40;
    const t = setInterval(()=>{
      c+=step;
      if(c>=target){ el.textContent=target+'+'; clearInterval(t); }
      else el.textContent=Math.floor(c).toString();
    },30);
  }
}
