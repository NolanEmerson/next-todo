import Task from "./task";

import { ColumnPropsType } from "@/utils/column";

export default function Column(props: ColumnPropsType) {
  console.log(props);

  return (
    <div>
      <Task />
      <Task />
      <Task />
    </div>
  );
}
