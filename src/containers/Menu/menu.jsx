import { Link } from 'react-router-dom'
import { HomeIcon, AboutIcon, SkillIcon } from "../../icons";

import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <Link to='/'><HomeIcon /></Link>
      <Link to='/about'><AboutIcon /></Link>
      <Link to='/skill'><SkillIcon /></Link>
    </div>
  );
};

export default Menu;
