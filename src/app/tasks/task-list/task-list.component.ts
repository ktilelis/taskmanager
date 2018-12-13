import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../types';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

    taskItems: TaskItem[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    addTask() {
        this.taskItems.push({name: 'NewItem', createdOn: new Date()});
    }

}
