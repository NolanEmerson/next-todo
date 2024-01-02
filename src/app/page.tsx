import Column from "@/components/column";

export default function Home() {
  return (
    <main className="min-h-screen p-12">
      <h3 className="text-center">Ey whoa ay I&apos;m a to do list ova heah</h3>

      <form className="text-center">
        <label>Create new task</label>
        <input type="text" />
        <button>Submit</button>
      </form>

      <section className="flex flex-row justify-evenly">
        <Column />
        <Column />
        <Column />
      </section>
    </main>
  );
}
