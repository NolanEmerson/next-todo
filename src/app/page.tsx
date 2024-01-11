"use client";
import Column from "@/components/column";
import { FormEvent, useState } from "react";

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

  const handleSetTodo = () => {};
  const handleSetInprog = () => {};
  const handleSetDone = () => {};

  const todoProps = { todoTasks, handleSetTodo, handleSetInprog };
  const inprogProps = { inprogTasks, handleSetInprog, handleSetDone };
  const doneProps = { doneTasks };

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
        <Column {...todoProps} />
        <Column {...inprogProps} />
        <Column {...doneProps} />
      </section>
    </main>
  );
}
