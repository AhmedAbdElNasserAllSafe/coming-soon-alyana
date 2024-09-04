import { Link } from "react-router-dom";
import { LangButton, ThemeToggleButton } from "../components/button";

export default function Home() {
  return (
    <main className="main m-5">
      <ThemeToggleButton />
      <LangButton />
      <Link to={'/sign-in'} className="bg-black text-white dark:bg-white dark:text-black p-3 rounded-md">Sign out</Link>
      <h1
        className={`mt-3 bg-[var(--primary-bg)] dark:bg-[var(--primary-bg)] text-[var(--text-color)] dark:text-[var(--text-color)] w-fit py-3 px-6`}
      >
        Hello
      </h1>
    </main>
  );
}
