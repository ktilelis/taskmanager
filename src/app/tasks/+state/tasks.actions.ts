import { Action } from '@ngrx/store';
import { Task, TaskStatus } from './tasks.interfaces';

export enum TasksActionType {
    ADD_TASK = '[tasks] Add Task',
    REMOVE_TASK = '[tasks] Remove Task',
    UPDATE_STATUS = '[tasks] Update Task Status',
    TOGGLE_ALL_TASKS_STATUS = '[tasks] Toggle All Tasks Status'
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

export class UpdateTaskStatus implements Action {
    readonly type = TasksActionType.UPDATE_STATUS;

    constructor(public taskId: string, public status: TaskStatus) {
    }
}

export class ToggleAllTasksStatus implements Action {
    readonly type = TasksActionType.TOGGLE_ALL_TASKS_STATUS;

    constructor(public selectAll: boolean) {
    }
}

export type TasksActions = AddTask | RemoveTask | UpdateTaskStatus | ToggleAllTasksStatus;
