import { NavLink } from 'react-router-dom'
import { HomeIcon, AboutIcon, SkillIcon, ContactIcon } from "../../icons";

import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink exact to='/'><HomeIcon /></NavLink>
      <NavLink exact to='/about'><AboutIcon /></NavLink>
      <NavLink exact to='/skill' className="link--disabled"><SkillIcon /></NavLink>
      <NavLink exact to='/contact' className="link--disabled"><ContactIcon /></NavLink>
    </div>
  );
};

export default Menu;
