import Task from "./task";

import { ColumnNameOptions, ColumnPropsType } from "@/utils/column";

export default function Column(props: ColumnPropsType): JSX.Element {
  const { todoTasks, inprogTasks, doneTasks, handleMoveTask, columnName } =
    props;

  let columnTasks: string[] = [];

  switch (columnName) {
    case ColumnNameOptions.TODO:
      if (todoTasks) {
        columnTasks = todoTasks;
      }
      break;
    case ColumnNameOptions.IN_PROG:
      if (inprogTasks) {
        columnTasks = inprogTasks;
      }
      break;
    case ColumnNameOptions.DONE:
    default:
      if (doneTasks) {
        columnTasks = doneTasks;
      }
      break;
  }

  const taskList = columnTasks.map((taskName: string, key: number) => {
    const taskProps = { taskName, handleMoveTask };
    return <Task key={key} {...taskProps} />;
  });

  return (
    <div className="inline-flex flex-col justify-start items-center">
      <h4 className="text-center text-lg">{columnName}</h4>
      {taskList}
    </div>
  );
}
