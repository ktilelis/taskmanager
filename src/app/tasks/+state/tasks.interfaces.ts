export interface Task {
    id: string;
    description: string;
    status: 'PENDING' | 'COMPLETED';
    createdOn: Date;
    updatedOn: Date;
}

export interface TasksState {
    tasks: Task[];
}

export const tasksInitialState: Task[] = [];
