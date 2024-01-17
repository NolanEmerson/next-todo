"use client";
import Column from "@/components/column";
import { FormEvent, useState } from "react";
import { ColumnNameOptions } from "@/utils/column";
import { TaskMoveDirection } from "@/utils/task";
import "../../modal.css";
import Task from "@/components/task";

export default function Home() {
  const [createTaskModalVisibility, setCreateTaskModalVisibility] =
    useState(false);
  const [formInput, setFormInput] = useState("");
  const [todoTasks, setTodoTasks] = useState([
    "do anything of use ever",
    "be a good person",
    "do nuttin'",
  ]);
  const [inprogTasks, setInprogTasks] = useState([
    "practice programming",
    "do nothing",
  ]);
  const [doneTasks, setDoneTasks] = useState([
    "make a dnd sheet",
    "do NOTHING",
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formInput === "") {
      return;
    }
    const todoTasksCopy = [...todoTasks];
    todoTasksCopy.push(formInput);
    setTodoTasks(todoTasksCopy);
    setFormInput("");
    setCreateTaskModalVisibility(!createTaskModalVisibility);
  };

  const handleMoveTask = (
    currentColumn: ColumnNameOptions,
    moveDirection: TaskMoveDirection,
    taskIndex: number
  ): void => {
    let movedTask = "";
    switch (currentColumn) {
      case ColumnNameOptions.TODO:
        const newTodoTasks = [...todoTasks];
        movedTask = newTodoTasks[taskIndex];
        newTodoTasks.splice(taskIndex, 1);
        setTodoTasks(newTodoTasks);
        setInprogTasks([...inprogTasks, movedTask]);
        return;
      case ColumnNameOptions.IN_PROG:
        const newInprogTasks = [...inprogTasks];
        movedTask = newInprogTasks[taskIndex];
        newInprogTasks.splice(taskIndex, 1);
        setInprogTasks(newInprogTasks);
        moveDirection === TaskMoveDirection.FORWARD
          ? setDoneTasks([...doneTasks, movedTask])
          : setTodoTasks([...todoTasks, movedTask]);
        return;
      case ColumnNameOptions.DONE:
      default:
        const newDoneTasks = [...doneTasks];
        movedTask = newDoneTasks[taskIndex];
        newDoneTasks.splice(taskIndex, 1);
        setDoneTasks(newDoneTasks);
        setInprogTasks([...inprogTasks, movedTask]);
        return;
    }
  };

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

  const createTaskIcon = (
    <div
      className="absolute rounded border-black border-2 w-8 h-8 top-5 right-5 cursor-pointer"
      onClick={() => {
        setCreateTaskModalVisibility(!createTaskModalVisibility);
      }}
    >
      <div className="bg-black h-4 w-1 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="bg-black h-1 w-4 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );

  const createTaskModal = (
    <div
      className="absolute top-0 right-0 bottom-0 left-0 modal-bg cursor-pointer"
      onClick={() => {
        setCreateTaskModalVisibility(!createTaskModalVisibility);
      }}
    >
      <div
        className="sticky bg-white top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 h-64 w-96 rounded-xl p-10 cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          className="text-center flex flex-col justify-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h3 className="block text-xl pb-4">Create new task</h3>
          <label className="text-sm">Task Name</label>
          <input
            className="block"
            type="text"
            value={formInput}
            onChange={(e) => setFormInput(e.target.value)}
          />
          <button className="mt-4">Submit</button>
        </form>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen p-12 relative">
      {createTaskIcon}
      {createTaskModalVisibility && createTaskModal}

      <h2 className="text-center text-2xl mb-4">
        Ey whoa ay I&apos;m a to do list ova heah
      </h2>

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
