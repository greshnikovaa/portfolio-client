import React from 'react'
import styles from './Footer.module.scss'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer>
            <div className={styles.container3}>
                <h2>{t("Don't be shy! Hit me up!")}</h2>
                <div className={styles.contacts}>
                    <div className={styles.contact}>
                        <a target="_blank" rel="noreferrer" href='https://www.google.com/maps/@54.3749115,18.6214249,15.94z?authuser=0&entry=ttu'><i className="bi bi-geo-alt"></i></a>
                        <span>
                            <h4>Location</h4>
                            <p>Gdańsk, Poland</p>
                        </span>
                    </div>
                    <div className={styles.contact}>
                        <a target="_blank" rel="noreferrer" href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqqJrsLKQbPdPgLmzgXjZpLlCDWlhnSWBDhpCBjHFSXJnnKPtdMrlLqLSNxLHGfdKmXPB'><i className="bi bi-envelope-at"></i></a>
                        <span>
                            <h4>Gmail</h4>
                            <p>hreshnikova.olha@gmail.com</p>
                        </span>
                    </div>
                    <div className={styles.contact}>
                        <a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=100027348367938'><i className="bi bi-facebook"></i></a>
                        <span>
                            <h4>Facebook</h4>
                            <p>Olha Hreshnikova</p>
                        </span>
                    </div>
                    <div className={styles.contact}>
                        <a target="_blank" rel="noreferrer" href='https://www.instagram.com/greshnikovaa_/?hl=ru'><i className="bi bi-instagram"></i></a>
                        <span>
                            <h4>Instagram</h4>
                            <p>@greshnikovaa_</p>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer