import { TaskPropsType } from "@/utils/task";

export default function Task(props: TaskPropsType): JSX.Element {
  const { taskName } = props;
  return (
    <div className="w-3/4 bg-green-900 p-12 m-2 text-center">{taskName}</div>
  );
}
