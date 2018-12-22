import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { generateUuid } from '@shared/uuid-generator';

import { Task } from '../+state/tasks.interfaces';
import { AddTask, RemoveTask, ToggleAllTasksStatus, UpdateTaskStatus } from '../+state/tasks.actions';
import * as fromTasks from '../+state/tasks.reducer';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: [ './task-list.component.scss' ]
})
export class TaskListComponent implements OnInit, OnDestroy {

    unsubscribe$ = new Subject<void>();

    tasks$: Observable<Task[]>;
    completedTasks$: Observable<Task[]>;
    pendingTasks$: Observable<Task[]>;

    taskDescription: string;
    toggleAllStatus = false;

    constructor(private store: Store<any>) {
    }

    ngOnInit() {
        this.tasks$ = this.store.pipe(select(fromTasks.selectTasks));
        this.completedTasks$ = this.store.pipe(select(fromTasks.selectTasksByStatus('COMPLETED')));
        this.pendingTasks$ = this.store.pipe(select(fromTasks.selectTasksByStatus('PENDING')));
        this.store.pipe(
            select(fromTasks.areAllCompleted),
            takeUntil(this.unsubscribe$)
        ).subscribe(allCompleted => this.toggleAllStatus = allCompleted);


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

    toggleTaskStatus(task: Task) {
        const newStatus = task.status === 'PENDING' ? 'COMPLETED' : 'PENDING';
        this.store.dispatch(new UpdateTaskStatus(task.id, newStatus));
    }

    toggleSelectAll() {
        this.toggleAllStatus = !this.toggleAllStatus;
        this.store.dispatch(new ToggleAllTasksStatus(this.toggleAllStatus));
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
