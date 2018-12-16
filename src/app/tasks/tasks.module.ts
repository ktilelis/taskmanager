import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import * as fromTasks from './+state/tasks.reducers';
import { tasksInitialState } from './+state/tasks.interfaces';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('tasks', fromTasks.reducer, { initialState: tasksInitialState })
    ],
    declarations: [ TaskListComponent ],
    exports: [ TaskListComponent ]
})
export class TasksModule {
}
