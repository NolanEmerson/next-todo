import { TaskMoveDirection } from "./task";

export enum ColumnNameOptions {
  TODO = "todo",
  IN_PROG = "in prog",
  DONE = "done",
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
