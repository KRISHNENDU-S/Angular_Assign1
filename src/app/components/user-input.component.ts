import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-user-input',
  template: `
    <div>
      <h2>Question 1</h2>
      <label>Name:</label>
      <input (input)="onInputChange($event)" />
      <p>You wrote: {{ name() }}</p>
    </div>
  `,
})
export class UserInputComponent {
  name = signal('');

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.value !== undefined) {
      this.name.set(input.value);
    }
  }
}
