import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login-regis',
  templateUrl: './login-regis.component.html',
  styleUrls: ['./login-regis.component.css']
})
export class LoginRegisComponent implements AfterViewInit {

  @ViewChild('container') container!: ElementRef;
  @ViewChild('register') registerBtn!: ElementRef;
  @ViewChild('login') loginBtn!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (!this.container || !this.registerBtn || !this.loginBtn) {
      console.error("Element not found! ตรวจสอบ id อีกครั้ง");
      return;
    }

    this.renderer.listen(this.registerBtn.nativeElement, 'click', () => {
      this.renderer.addClass(this.container.nativeElement, 'active');
    });

    this.renderer.listen(this.loginBtn.nativeElement, 'click', () => {
      this.renderer.removeClass(this.container.nativeElement, 'active');
    });
  }
}
