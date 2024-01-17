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
};

export type { TaskPropsType };
