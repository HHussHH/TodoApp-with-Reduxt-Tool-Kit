import { useTheme } from "./use-theme";
import { BiSun } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
const ThemeSwitcher = () => {
  const [theme, changeTheme] = useTheme();

  return (
    <>
      {theme === "light" ? (
        <BiSun size={25} onClick={changeTheme} color="white" />
      ) : (
        <FaRegMoon size={25} onClick={changeTheme} color="white" />
      )}
    </>
  );
};

export default ThemeSwitcher;
