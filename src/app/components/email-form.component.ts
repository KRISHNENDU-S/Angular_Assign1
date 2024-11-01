import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-email-form',
  template: `
    <form #emailForm="ngForm">
      <h2>Question 4</h2>
      <label>Email:</label>
      <input name="email" ngModel required email #emailCtrl="ngModel" />
      @if (emailCtrl.invalid && emailCtrl.touched) {
        <div>Not a valid e-mail address.</div>
      }
      <p>Status: {{ emailCtrl.status }}</p>
    </form>
  `,
})
export class EmailFormComponent {}
