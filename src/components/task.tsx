import { ColumnNameOptions } from "@/utils/column";
import { TaskMoveDirection, TaskPropsType } from "@/utils/task";

export default function Task(props: TaskPropsType): JSX.Element {
  const { columnName, taskName, handleMoveTask, index } = props;

  const backButton = (
    <div
      className="absolute rounded border-black border-2 w-7 h-7 bottom-2 left-2 cursor-pointer"
      onClick={() => {
        handleMoveTask(columnName, TaskMoveDirection.BACKWARD, index);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  );
  const forwardButton = (
    <div
      className="absolute rounded border-black border-2 w-7 h-7 bottom-2 right-2 cursor-pointer"
      onClick={() => {
        handleMoveTask(columnName, TaskMoveDirection.FORWARD, index);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  );

  return (
    <div className="w-3/4 bg-green-900 p-12 m-2 text-center relative">
      <p>{taskName}</p>
      {columnName !== ColumnNameOptions.TODO && backButton}
      {columnName !== ColumnNameOptions.DONE && forwardButton}
    </div>
  );
}
