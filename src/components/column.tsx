import Task from "./task";

type ColumnPropsType = {
  todoTasks?: any;
  inprogTasks?: any;
  doneTasks?: any;
  handleSetTodo?: any;
  handleSetInprog?: any;
  handleSetDone?: any;
};

export default function Column(props: ColumnPropsType) {
  return (
    <div>
      <Task />
      <Task />
      <Task />
    </div>
  );
}
