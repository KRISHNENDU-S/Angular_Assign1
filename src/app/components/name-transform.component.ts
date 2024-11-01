import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-name-transform',  // Updated selector
  template: `
    <div>
      <h2>Question 6</h2>
      <label for="nameInput">Name:</label>
      <input 
        id="nameInput" 
        (input)="onNameChange($event)" 
        [value]="name()" 
      />
      <h4>{{ name() }}</h4>
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
export class NameTransformComponent {
  name = signal('JOHN'); // Initialize in uppercase

  // Method to handle input changes and convert to uppercase
  onNameChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input && input.value !== undefined) {
      this.name.set(input.value.toUpperCase()); // Convert to uppercase
    }
  }
}
