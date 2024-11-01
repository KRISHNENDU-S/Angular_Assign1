import { Component } from '@angular/core';
import { UserInputComponent } from './components/user-input.component';
import { StudentListComponent } from './components/student-list.component';
import { EmailFormComponent } from './components/email-form.component';
import { NameTransformComponent } from './components/name-transform.component';
import { NameBindingFormComponent } from './components/name-binding-form.component';
import { StudentListSortedComponent } from './components/student-list-sorted.component';
import { ElementNameDirective } from './directives/element-name.directive';
import { ClassDirective } from './directives/class.directive';
import { AttributeDirective } from './directives/attribute.directive';



@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    UserInputComponent,
    StudentListComponent,
    EmailFormComponent,
    NameTransformComponent,
    NameBindingFormComponent,
    StudentListSortedComponent,
    ElementNameDirective, 
    ClassDirective, 
    AttributeDirective
  ],
})
export class AppComponent {}
