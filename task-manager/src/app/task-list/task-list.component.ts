import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <h2>Task List</h2>
    <ul>
      <li *ngFor="let task of tasks" [routerLink]="['/task', task.id]">
        {{ task.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class TaskListComponent {
  tasks = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
  ];
}
