import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TaskListComponent],
    exports: [TaskListComponent]
})
export class TasksModule {
}
