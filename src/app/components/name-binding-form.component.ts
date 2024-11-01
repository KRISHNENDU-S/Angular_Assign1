import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-name-binding-form',
  template: `
    <div>
      <h2>Question 5</h2>
      <label for="nameInput">Name:</label>
      <input 
        id="nameInput" 
        (input)="onNameChange($event)" 
        [value]="name()" 
      />
      <p>{{ name() }}</p>
    </div>
    <style>
      #nameInput {
        border: 2px solid #28a745;
        padding: 4px;
        font-size: 16px;
      }
    </style>
  `,
})
export class NameBindingFormComponent {
  name = signal('john');

  // Method to handle input changes
  onNameChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.value !== undefined) {
      this.name.set(input.value); // Update the model from the input
    }
  }
}
