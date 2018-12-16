import { Action } from '@ngrx/store';

export enum TasksActionType {
    ADD_TASK = '[tasks] Add Task',
    REMOVE_TASK = '[tasks] Remove Task',
    EDIT_TASK = '[tasks] Edit Task'
}

export class AddTask implements Action {
    readonly type: TasksActionType.ADD_TASK;
}

export class RemoveTask implements Action {
    readonly type: TasksActionType.REMOVE_TASK;

    constructor(taskId: string) {
    }
}

export class EditTask implements Action {
    readonly type: TasksActionType.EDIT_TASK;
}

export type TasksActions = AddTask | RemoveTask | EditTask;
