import { ColumnNameOptions } from "./column";

export enum TaskMoveDirection {
  FORWARD = "forward",
  BACKWARD = "backward",
}

type TaskPropsType = {
  taskName: string;
  handleMoveTask: (
    currentColumn: ColumnNameOptions,
    moveDirection: TaskMoveDirection,
    taskIndex: number
  ) => void;
  columnName: ColumnNameOptions;
  index: number;
};

export type { TaskPropsType };
