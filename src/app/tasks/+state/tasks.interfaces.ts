export interface Task {
    id: string;
    description: string;
    createdOn: Date;
    updatedOn: Date;
}

export const tasksInitialState: Task[] = [];
