import { TaskMoveDirection } from "./task";

export enum ColumnNameOptions {
  TODO = "To Do",
  IN_PROG = "In Progress",
  DONE = "Done",
}

type ColumnPropsType = {
  todoTasks?: string[];
  inprogTasks?: string[];
  doneTasks?: string[];
  handleMoveTask: (
    currentColumn: ColumnNameOptions,
    moveDirection: TaskMoveDirection,
    taskIndex: number
  ) => void;
  columnName: ColumnNameOptions;
};

export type { ColumnPropsType };
