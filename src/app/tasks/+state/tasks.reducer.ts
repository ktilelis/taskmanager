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
        case TasksActionType.UPDATE_STATUS: {
            const _state = [...state];

            const taskIndex = state.findIndex(s => s.id === action.taskId);
            const _task = { ..._state[ taskIndex] };
            _task.status = action.status;
            _task.updatedOn = new Date();

            _state.splice(taskIndex, 1, _task);
            return _state;
        }
        default:
            return state;
    }
}

export const selectTasks = (state: TasksState) => state.tasks;
