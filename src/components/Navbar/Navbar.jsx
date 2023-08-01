import React from 'react'
import styles from './Navbar.module.scss'
import Languages from '../Languages/Languages';
import Theme from '../Theme/Theme';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Theme/>
            <Languages/>
        </nav>
    );
};
export default Navbar