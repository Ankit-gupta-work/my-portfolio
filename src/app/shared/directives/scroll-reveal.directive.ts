import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';

export type RevealDir = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;       // ms
  @Input() revealDir: RevealDir = 'up';
  @Input() revealDuration = 650;  // ms
  @Input() revealThreshold = 0.12;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const el = this.el.nativeElement;

    // Set initial hidden state via inline style
    this.setInitialState(el);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.reveal(el);
            }, this.revealDelay);
            this.observer.unobserve(el); // only once
          }
        });
      },
      { threshold: this.revealThreshold, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  private setInitialState(el: HTMLElement) {
    el.style.transition = 'none';
    el.style.opacity = '0';

    switch (this.revealDir) {
      case 'up':    el.style.transform = 'translateY(32px)'; break;
      case 'down':  el.style.transform = 'translateY(-32px)'; break;
      case 'left':  el.style.transform = 'translateX(-40px)'; break;
      case 'right': el.style.transform = 'translateX(40px)'; break;
      case 'scale': el.style.transform = 'scale(0.88)'; break;
      case 'fade':  el.style.transform = 'none'; break;
    }
  }

  private reveal(el: HTMLElement) {
    const ms = this.revealDuration;
    el.style.transition = `opacity ${ms}ms cubic-bezier(0.16,1,0.3,1), transform ${ms}ms cubic-bezier(0.16,1,0.3,1)`;
    el.style.opacity = '1';
    el.style.transform = this.revealDir === 'scale' ? 'scale(1)' : 'translate(0,0)';
  }
}
