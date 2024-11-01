import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-student-list-sorted',
  template: `
    <div>
      <h2>Question 7</h2>
      <ul>
        @for (student of sortedStudents; track student.name) {
          <li>{{ student.name }}, {{ student.course }}</li>
        }
      </ul>
      <p>No. of students: {{ students.length }}</p>
    </div>
  `,
})
export class StudentListSortedComponent {
  // List of students (unsorted initially)
  students = [
    { name: 'Amit', course: 'S7 ECE' },
    { name: 'Arun', course: 'S7 EAC' },
    { name: 'Akhil', course: 'S7 EAC' },
  ];

  // Getter to sort students by name in ascending order
  get sortedStudents() {
    return this.students.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
}
