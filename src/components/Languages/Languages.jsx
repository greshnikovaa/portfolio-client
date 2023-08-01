import React from 'react'
import styles from './Languages.module.scss'
import useLocalStorage from '../../hooks/useLocalStorage';
import i18n from '../../translation/i18n'

const Languages = () => {
    const [language, setLanguage] = useLocalStorage('language', 'en')
    const changeLanguage = (lang) =>{
        if(lang==='pol'){
            i18n.changeLanguage('pl');
            setLanguage('pl'); 
        }
        if(lang==='eng'){
            i18n.changeLanguage('en');
            setLanguage('en'); 
        }
        if(lang==='ukr'){
            i18n.changeLanguage('uk');
            setLanguage('uk'); 
        }
        
    }
    return (
        <div className={styles.languages}>
            <button onClick={()=>changeLanguage('pol')} className={styles.language}>POL</button>
            <button onClick={()=>changeLanguage('eng')} className={styles.language}>ENG</button>
            <button onClick={()=>changeLanguage('ukr')} className={styles.language}>UKR</button>
        </div>
    );
};
export default Languages