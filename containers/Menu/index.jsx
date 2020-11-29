import React from 'react'
import Link from 'next/link'
import { HomeIcon, AboutIcon, SkillIcon, ContactIcon } from "../../icons";

import './menu.css'

const Menu = () => {
  return (
    <div className="menu">
      <Link exact href='/'><a><HomeIcon /></a></Link>
      <Link exact href='/about'><a><AboutIcon /></a></Link>
      <Link exact href='/skill'><a className="link--disabled"><SkillIcon /></a></Link>
      <Link exact href='/contact'><a className="link--disabled"><ContactIcon /></a></Link>
    </div>
  );
};

export default Menu;
