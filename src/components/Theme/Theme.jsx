import React, { useState, useEffect } from 'react'
import styles from './Theme.module.scss'

const Theme = () => {
    const [theme, setTheme] = useState(true)
    const changeTheme = () => {
        if (theme) {
            setTheme(false)
            document.documentElement.dataset.theme = 'dark'
            localStorage.setItem('theme', false)
        }
        else {
            setTheme(true)
            document.documentElement.dataset.theme = 'light'
            localStorage.setItem('theme', true)
        }

    }
    useEffect(() => {
        const themeLocal = Boolean(JSON.parse(localStorage.getItem('theme')))
        console.log(themeLocal)
        if (themeLocal) {
            setTheme(true)
            document.documentElement.dataset.theme = 'light'
        }
        else {
            setTheme(false)
            document.documentElement.dataset.theme = 'dark'
        }
    }, [])
    return (
        <div className={styles.theme}>
            <div className={styles.switch_container}>
                {/* <input value={theme} onChange={(e) => setTheme(e.target.checked)} type="checkbox" id="switch" /> */}
                <span className={theme?styles.light:styles.dark} onClick={changeTheme}>
                    <i className={`bi bi-moon-fill ${styles.moon}`}></i>
                    <i className={`bi bi-brightness-high-fill ${styles.sun}`}></i>
                    <div className={styles.ball}></div>
                </span>
            </div>
        </div>
    );
};
export default Theme