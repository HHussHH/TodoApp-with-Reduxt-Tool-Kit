import "./header.scss";
import bg from "../../img/todo-img-bg-black.png";
import ThemeSwitcher from "../../features/theme/ThemeSwitcher";
const Header = () => {
  return (
    <div className="header">
      <img src={bg} alt="" className="header__img" />
      <div className="header__bg">
        <div className="header__inner">
          <h1 className="header__title">TODO</h1>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
