import { Link } from 'react-router-dom'
import { HomeIcon, AboutIcon, SkillIcon, ContactIcon } from "../../icons";

import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <Link to='/'><HomeIcon /></Link>
      <Link to='/about'><AboutIcon /></Link>
      <Link to='/skill' className="link--disabled"><SkillIcon /></Link>
      <Link to='/contact' className="link--disabled"><ContactIcon /></Link>
    </div>
  );
};

export default Menu;
