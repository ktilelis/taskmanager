import { Task, TasksState, TaskStatus } from './tasks.interfaces';
import { TasksActions, TasksActionType } from './tasks.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

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
            const _state = [ ...state ];

            const taskIndex = state.findIndex(s => s.id === action.taskId);
            const _task = { ..._state[ taskIndex ] };
            _task.status = action.status;
            _task.updatedOn = new Date();

            _state.splice(taskIndex, 1, _task);
            return _state;
        }
        case TasksActionType.TOGGLE_ALL_TASKS_STATUS: {
            const status: TaskStatus = action.selectAll ? 'COMPLETED' : 'PENDING';
            return state.map(t => ({ ...t, status }));
        }
        default:
            return state;
    }
}

// export const selectTasks = (state: TasksState) => state.tasks;
export const selectTasksState = createFeatureSelector<Task[]>('tasks');
export const selectTasks = createSelector(selectTasksState, (state: Task[]) => state);
export const selectTasksByStatus = (status: TaskStatus) => createSelector(selectTasks, tasks => tasks.filter(t => t.status === status));
export const selectCompletedTasks = createSelector(selectTasks, s => s.filter(t => t.status === 'COMPLETED'));
export const selectPendingTasks = createSelector(selectTasks, s => s.filter(t => t.status === 'PENDING'));
export const areAllCompleted = createSelector(selectTasks, s => s.length && s.every(t => t.status === 'COMPLETED'));
