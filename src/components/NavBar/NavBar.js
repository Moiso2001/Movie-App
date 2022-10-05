import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../clipart88529.png'
import Buscador from '../Buscador/Buscador';

import { BsHouseDoorFill } from 'react-icons/bs'
import { MdFavorite } from 'react-icons/md'
import styles from './Navbar.module.css';

export default function NavBar() {
    return (
        <header className={styles.divGlobal}>
            <div className={styles.divImg}>
                <img className={styles.img} id="logoHenry" src={Logo} width="30" height="30" alt="soyHenry logo" />
                <h2 className={styles.name}>Moises Plata // Movie App</h2>
            </div>
            <div className={styles.buscador}>
                <Buscador/>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.list}>
                        <BsHouseDoorFill className={styles.item} style={{color: "white"}}/>
                        <NavLink className={styles.navItem} style={{textDecoration: "none"}} exact to="/" >Home</NavLink>
                    </li>
                    <li className={styles.list}>
                        <MdFavorite className={styles.item} style={{color: "white"}}/>
                        <NavLink className={styles.navItem} style={{textDecoration: "none"}} to="/favs" >Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}