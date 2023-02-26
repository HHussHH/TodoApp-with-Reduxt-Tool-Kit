import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./theme-slice";
import { useEffect } from "react";

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const changeTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return [theme, changeTheme];
};
