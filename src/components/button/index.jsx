import useChangeMode from "../../hooks/useChangeMode";
import useLanguage from "../../hooks/useLanguage";

export default function MainButton() {
  return <h1>hello MainButton</h1>;
}

export const LangButton = ({className}) => {
  const lang = localStorage.getItem('lang')
  const { changeLanguage } = useLanguage();
  return (
    <button
      onClick={changeLanguage}
      className={`${className} p-2 rounded-full m-10 border hover:bg-[#a7595c] hover:border-[#a7595c] hover:text-[white]`}
    >
      {`${lang == 'en' ?  `AR`: `EN`}`}
    </button>
  );
};

export const ThemeToggleButton = () => {
  const { darkMode, setDarkMode } = useChangeMode();

  return (
    <label
      htmlFor="AcceptConditions"
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[var(--primary-color)] border"
    >
      <input
        type="checkbox"
        onChange={() => {setDarkMode((prevMode) => !prevMode)}}
        checked={darkMode}
        id="AcceptConditions"
        className="peer sr-only"
      />

      <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
    </label>
  );
};
