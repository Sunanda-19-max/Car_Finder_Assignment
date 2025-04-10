/components/DarkModeToggle.js
const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    const currentTheme = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", currentTheme ? "dark" : "light");
  };

  return <button onClick={toggleDarkMode}>Toggle Dark Mode</button>;
};
