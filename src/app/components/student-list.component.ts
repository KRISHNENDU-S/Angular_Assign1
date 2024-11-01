import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-student-list',
  template: `
    <div>
      <h2>Question 2</h2>
      <h3>Student List:</h3>
      <ul>
        @for (student of students.sort(); track student.name) {
          <li>{{ student.name }}, {{ student.course }}</li>
        }
      </ul>
      <p>No. of students: {{ students.length }}</p>
    </div>
  `,
})
export class StudentListComponent {
  students = [
    { name: 'Amit', course: 'S7 ECE' },
    { name: 'Arun', course: 'S7 EAC' },
    { name: 'Akhil', course: 'S7 EAC' },
  ];
}
