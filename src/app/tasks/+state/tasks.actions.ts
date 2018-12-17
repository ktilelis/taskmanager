import { Action } from '@ngrx/store';
import { Task } from './tasks.interfaces';

export enum TasksActionType {
    ADD_TASK = '[tasks] Add Task',
    REMOVE_TASK = '[tasks] Remove Task',
    EDIT_TASK = '[tasks] Edit Task'
}

export class AddTask implements Action {
    readonly type = TasksActionType.ADD_TASK;
    constructor(public task: Task) {
    }
}

export class RemoveTask implements Action {
    readonly type = TasksActionType.REMOVE_TASK;

    constructor(public taskId: string) {
    }
}

export class EditTask implements Action {
    readonly type = TasksActionType.EDIT_TASK;
}

export type TasksActions = AddTask | RemoveTask | EditTask;
