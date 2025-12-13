import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative w-14 h-8 rounded-full
        bg-gray-300 dark:bg-gray-700
        flex items-center p-1
        focus:outline-none
      "
      aria-label="Toggle theme"
    >
      <span
        className={`
          h-6 w-6 rounded-full bg-white
          shadow-md
          transform transition-transform duration-300
          ${isDark ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </button>
  );
}
