"use client";
import Column from "@/components/column";
import { FormEvent, useState } from "react";
import { ColumnNameOptions } from "@/utils/column";
import { TaskMoveDirection } from "@/utils/task";

export default function Home() {
  const [formInput, setFormInput] = useState("");
  const [todoTasks, setTodoTasks] = useState([""]);
  const [inprogTasks, setInprogTasks] = useState([""]);
  const [doneTasks, setDoneTasks] = useState([""]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoTasksCopy = [...todoTasks];
    todoTasksCopy.push(formInput);
    setTodoTasks(todoTasksCopy);
    setFormInput("");
  };

  const handleMoveTask = (
    currentColumn: ColumnNameOptions,
    moveDirection: TaskMoveDirection,
    taskIndex: number
  ): void => {};

  const todoProps = {
    todoTasks,
    handleMoveTask,
    columnName: ColumnNameOptions.TODO,
  };
  const inprogProps = {
    inprogTasks,
    handleMoveTask,
    columnName: ColumnNameOptions.IN_PROG,
  };
  const doneProps = {
    doneTasks,
    handleMoveTask,
    columnName: ColumnNameOptions.DONE,
  };

  return (
    <main className="min-h-screen p-12">
      <h2 className="text-center text-2xl">
        Ey whoa ay I&apos;m a to do list ova heah
      </h2>
      <form className="text-center" onSubmit={(e) => handleSubmit(e)}>
        <label className="block">Create new task</label>
        <input
          type="text"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
        />
        <button>Submit</button>
      </form>

      <section className="flex flex-row justify-evenly">
        {/* Todo Column */}
        <Column {...todoProps} />
        {/* In Prog Column */}
        <Column {...inprogProps} />
        {/* Done Column */}
        <Column {...doneProps} />
      </section>
    </main>
  );
}
