import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
   <section class="hero is-primary is-bold">
   <div class="hero-body">
   <div class="container">
    <h1 class = "title">Contact Us</h1>
   </div>
   </div>
   </section>

   <section class="section">
    <div class="container">
      <form (ngSubmit)="submitForm()" #contactForm = "ngForm">
        <!--name-->
        <div class = "field">
          <label class="lable">Name</label>
          <input type="text" 
          name="name"
          class="input"
          [(ngModel)]="name"
          #nameInput="ngModel"
          required>

          <div class = "help is-error" *ngIf="nameInput.invalid && nameInput.touched">
            Your name is required.
          </div>
        </div>

        <!--email-->
        <div class = "field">
          <label class="lable">Email</label>
          <input type="email" 
          name="email" 
          class="input" 
          [(ngModel)]="email"
          #emailInput = "ngModel"
          required email>

          <div class="help is-error" *ngIf="emailInput.invalid&&emailInput.touched">
            Your email need to be valid email.
          </div>
        </div>

        <!--message-->
        <div class = "field">
          <label class="lable">Message</label>
          <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
        </div>

        <!--submit-->
        <button type = "submit" 
        class="button is-large is-warning"
        [disabled]="contactForm.invalid">
        send!
        </button>
      </form>
    </div>
   </section>
  `,
  styles: [
  
  ]
})
export class ContactComponent implements OnInit {
  name : string;
  email : string;
  message : string;
  constructor() { }

  ngOnInit(): void {}

  submitForm() {
    const message = `my name is ${this.name}. 
                    my email is ${this.email}`;
    alert(message);
  }
}
