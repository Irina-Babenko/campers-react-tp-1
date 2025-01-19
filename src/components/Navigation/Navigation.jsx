import { NavLink } from "react-router-dom";
import LogoIcon from "../ui/icons/LogoIcon";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.container}>
      <NavLink to="/" className={css.logoLink}>
        <LogoIcon />
      </NavLink>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog" end>
        Catalog
      </NavLink>
    </nav>
  );
}
