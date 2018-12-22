import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';

import * as fromTasks from './+state/tasks.reducer';
import { tasksInitialState } from './+state/tasks.interfaces';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature('tasks', fromTasks.reducer, { initialState: tasksInitialState }),
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [ TaskListComponent ],
    exports: [ TaskListComponent ]
})
export class TasksModule {
}
