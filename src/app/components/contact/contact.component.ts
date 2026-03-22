import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="section-container">
      <div class="section-hd">
        <span class="lbl">// get_in_touch</span>
        <span class="line"></span>
        <span class="num">05</span>
      </div>
      <div class="contact-grid">
        <div class="contact-left animate-up d1">
          <h2 class="contact-headline">
            Let's build<br>something <em>great.</em>
          </h2>
          <p class="contact-sub">Open to freelance projects, collaborations, and interesting ideas. If you have a problem that needs a full-stack solution — let's talk.</p>
          <div class="cinfo">
            <a class="cinfo-row" href="mailto:ankitjguptaforwork@gmail.com">
              <span class="ci-label">// email</span>
              <span class="ci-val">ankitjguptaforwork&#64;gmail.com ↗</span>
            </a>
            <a class="cinfo-row" href="https://github.com/ankit-for-work" target="_blank">
              <span class="ci-label">// github</span>
              <span class="ci-val">github.com/ankit-for-work ↗</span>
            </a>
            <a class="cinfo-row" href="https://linkedin.com/in/ankit-gupta" target="_blank">
              <span class="ci-label">// linkedin</span>
              <span class="ci-val">linkedin.com/in/ankit-gupta ↗</span>
            </a>
            <div class="cinfo-row">
              <span class="ci-label">// location</span>
              <span class="ci-val" style="color:var(--text)">Vapi, Gujarat, India</span>
            </div>
            <div class="cinfo-row">
              <span class="ci-label">// status</span>
              <span class="ci-val" style="color:#22c55e">Open to Freelance</span>
            </div>
          </div>
        </div>
        <div class="contact-right animate-up d2">
          <form [formGroup]="form" (ngSubmit)="onSubmit()" class="cf">
            <div class="cf-row">
              <div class="cf-group">
                <label>// name</label>
                <input type="text" formControlName="name" placeholder="Your Name" [class.err]="invalid('name')">
                <span class="err-msg" *ngIf="invalid('name')">Required</span>
              </div>
              <div class="cf-group">
                <label>// email</label>
                <input type="email" formControlName="email" placeholder="your&#64;email.com" [class.err]="invalid('email')">
                <span class="err-msg" *ngIf="invalid('email')">Valid email required</span>
              </div>
            </div>
            <div class="cf-group">
              <label>// subject</label>
              <input type="text" formControlName="subject" placeholder="Project / Collab / Idea">
            </div>
            <div class="cf-group">
              <label>// message</label>
              <textarea formControlName="message" rows="5" placeholder="Tell me what you're building..." [class.err]="invalid('message')"></textarea>
              <span class="err-msg" *ngIf="invalid('message')">Required</span>
            </div>
            <button type="submit" class="cf-submit" [class.sent]="sent">
              {{ sent ? 'Message Sent ✓' : 'Send Message →' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 3rem; }
    .contact-headline { font-size: 2rem; font-weight: 700; letter-spacing: -.03em; line-height: 1.1; margin-bottom: 1rem; }
    .contact-headline em { color: var(--cyan); font-style: normal; }
    .contact-sub { font-size: .85rem; color: var(--muted); line-height: 1.8; margin-bottom: 2rem; font-weight: 300; }
    .cinfo { display: flex; flex-direction: column; }
    .cinfo-row { display: flex; justify-content: space-between; align-items: center; padding: .85rem 0; border-bottom: 1px solid var(--border); text-decoration: none; transition: padding-left .2s; }
    .cinfo-row:hover { padding-left: 4px; }
    .ci-label { font-family: var(--mono); font-size: .65rem; color: var(--muted); }
    .ci-val { font-size: .78rem; color: var(--cyan); transition: opacity .2s; }
    .cinfo-row:hover .ci-val { opacity: .7; }
    .cf { display: flex; flex-direction: column; gap: 1rem; }
    .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .cf-group { display: flex; flex-direction: column; gap: .4rem; }
    .cf-group label { font-family: var(--mono); font-size: .65rem; color: var(--muted); letter-spacing: .04em; }
    .cf-group input, .cf-group textarea {
      background: var(--bg2); border: 1px solid var(--border); color: var(--text);
      padding: .8rem 1rem; font-family: var(--font); font-size: .82rem;
      outline: none; resize: vertical; transition: border-color .2s;
    }
    .cf-group input:focus, .cf-group textarea:focus { border-color: rgba(0,229,195,.4); }
    .cf-group input::placeholder, .cf-group textarea::placeholder { color: #1e293b; }
    .cf-group input.err, .cf-group textarea.err { border-color: rgba(239,68,68,.4); }
    .err-msg { font-size: .68rem; color: #ef4444; font-family: var(--mono); }
    .cf-submit { padding: 1rem; background: var(--cyan); color: #080c12; font-family: var(--font); font-size: .8rem; font-weight: 600; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: .06em; transition: all .2s; }
    .cf-submit:hover { background: #00c4a8; }
    .cf-submit.sent { background: #22c55e; color: #fff; }
    @media(max-width:768px) { .contact-grid{grid-template-columns:1fr;} .cf-row{grid-template-columns:1fr;} }
  `]
})
export class ContactComponent {
  sent = false;
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      name:    ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required],
    });
  }

  invalid(f: string){ const c=this.form.get(f); return !!(c?.invalid && c?.touched); }

  onSubmit(){
    if(this.form.invalid){ this.form.markAllAsTouched(); return; }
    console.log(this.form.value);
    this.sent=true; this.form.reset();
    setTimeout(()=>this.sent=false, 4000);
  }
}
