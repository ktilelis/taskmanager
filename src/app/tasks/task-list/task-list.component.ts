import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../+state/tasks.interfaces';
import { generateUuid } from '@shared/uuid-generator';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: [ './task-list.component.css' ]
})
export class TaskListComponent implements OnInit {

    @ViewChild('taskInput') taskInputRef: ElementRef;

    taskDescription: string;
    taskItems: Task[] = [];

    constructor(private store: Store<any>) {
    }

    ngOnInit() {
    }

    addTask() {
        if (this.taskDescription) {
            this.taskItems.push({
                id: generateUuid(),
                description: this.taskDescription,
                createdOn: new Date(),
                updatedOn: new Date()
            });
            this.taskDescription = '';
        }
    }

    removeTask() {

    }

}
