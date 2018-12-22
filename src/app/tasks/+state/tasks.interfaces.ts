export type TaskStatus = 'PENDING' | 'COMPLETED';

export interface Task {
    id: string;
    description: string;
    status: TaskStatus;
    createdOn: Date;
    updatedOn: Date;
}

export interface TasksState {
    tasks: Task[];
}

export const tasksInitialState: Task[] = [];
