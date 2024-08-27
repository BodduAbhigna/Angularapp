import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  template: `
    <h2>Task Detail hi</h2>
    <div>
      <label>Task Name: </label>
      <input [(ngModel)]="taskName" />
    </div>
    <p>The task name is: {{ taskName }}</p>
  `,
  styles: [],
})
export class TaskDetailComponent {
  taskName = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.taskName = `Task ${params['id']}`;
    });
  }
}
