import { useState } from "react"

const useTheme = (startingTheme = "light") => {
  const [theme, setTheme] = useState(startingTheme);

  const validateTheme = (theme) => {
    theme === 'dark' ? setTheme('dark') : setTheme('light');
  }

  return {
    theme, setTheme: validateTheme
  }
};

export default useTheme;