import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { HomeIcon, AboutIcon, SkillIcon, ContactIcon } from "../../icons";

import './menu.css'

const Menu = () => {

  const router = useRouter()

  return (
    <div className="menu">
      <Link exact href='/'><a className={cx({'active': router.pathname === '/'})}><HomeIcon /></a></Link>
      <Link exact href='/about'><a className={cx({'active': router.pathname === '/about'})}><AboutIcon /></a></Link>
      <Link exact href='/skill'><a className="link--disabled"><SkillIcon /></a></Link>
      <Link exact href='/contact'><a className="link--disabled"><ContactIcon /></a></Link>
    </div>
  );
};

export default Menu;
