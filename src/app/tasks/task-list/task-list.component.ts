import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { generateUuid } from '@shared/uuid-generator';

import { Task } from '../+state/tasks.interfaces';
import { AddTask, RemoveTask } from '../+state/tasks.actions';
import * as fromTasks from '../+state/tasks.reducer';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: [ './task-list.component.scss' ]
})
export class TaskListComponent implements OnInit {

    tasks$: Observable<Task[]>;
    taskDescription: string;

    constructor(private store: Store<any>) {
    }

    ngOnInit() {
        this.tasks$ = this.store.pipe(select(fromTasks.selectTasks));
    }

    addTask() {
        if (this.taskDescription) {
            const taskItem: Task = {
                id: generateUuid(),
                description: this.taskDescription,
                status: 'PENDING',
                createdOn: new Date(),
                updatedOn: new Date()
            };

            this.store.dispatch(new AddTask(taskItem));
            this.taskDescription = '';
        }
    }

    removeTask(taskId: string) {
        this.store.dispatch(new RemoveTask(taskId));
    }
}
