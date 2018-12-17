import { Task, TasksState } from './tasks.interfaces';
import { TasksActions, TasksActionType } from './tasks.actions';

export function reducer(state: Task[], action: TasksActions): Task[] {
    switch (action.type) {
        case TasksActionType.ADD_TASK:
            return [
                ...state,
                action.task
            ];
        case TasksActionType.REMOVE_TASK:
            return [ ...state.filter(s => s.id !== action.taskId) ];
        case TasksActionType.EDIT_TASK:
        default:
            return state;
    }
}

export const selectTasks = (state: TasksState) => state.tasks;