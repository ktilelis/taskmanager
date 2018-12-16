import { Task } from './tasks.interfaces';
import { TasksActions, TasksActionType } from './tasks.actions';

export function reducer(state: Task[], action: TasksActions): Task[] {
    switch (action.type) {
        case TasksActionType.ADD_TASK:
        case TasksActionType.REMOVE_TASK:
        case TasksActionType.EDIT_TASK:
        default:
            return state;
    }
}
