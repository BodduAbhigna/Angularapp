import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Required for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

