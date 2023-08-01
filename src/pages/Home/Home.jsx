import React, { useEffect, useRef } from 'react'
import styles from './Home.module.scss'
import m from '../../assets/m.png'
import e from '../../assets/e.png'
import r from '../../assets/r.png'
import n from '../../assets/n.png'
import name from "../../assets/user.png"
import age from "../../assets/calendar.png"
import address from "../../assets/globe.png"
import textSquad from '../../assets/textSquad.png'
import data from '../data'
import gsap from 'gsap'
import ava from '../../assets/ava.jpg'
import {useTranslation} from 'react-i18next'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarouselApp from '../../components/CarouselApp'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const {t} = useTranslation()
    const cardRef = useRef(null)
    const textRef = useRef(null)
    useEffect(() => {
        gsap.fromTo(cardRef.current, { x: -100, opacity: 0 }, { duration: 2, x: 0, opacity: 1 })
        gsap.fromTo(textRef.current, { x: 100, opacity: 0 }, { duration: 3, x: 0, opacity: 1 })
    }, [])
    return (
        <div className={styles.mein}>
            <div className={styles.container1}>
                <div ref={cardRef} className={styles.left}>
                    <div className={styles.img}>
                        <img alt='ava' className={styles.ava} src={ava} />
                        <img alt='obvodka' className={styles.txt} src={textSquad} />
                    </div>
                    <div className={styles.info}>
                        <p><img alt='name' src={name}/><b>{t("Olha Hreshnikova")}</b></p>
                        <p><img alt='address' src={address}/> <b>{t("Gdańsk, Poland")}</b></p>
                        <p><img alt='age' src={age}/> <b>{t("16 y.o.")}</b></p>
                    </div>
                    <div className={styles.znaczki}>
                        <a target="_blank" rel="noreferrer" href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqqJrsLKQbPdPgLmzgXjZpLlCDWlhnSWBDhpCBjHFSXJnnKPtdMrlLqLSNxLHGfdKmXPB'><i className="bi bi-envelope-at"></i></a>
                        <a target="_blank" rel="noreferrer" href='https://github.com/greshnikovaa'><i className="bi bi-github"></i></a>
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/%D0%BE%D0%BB%D1%8F-%D0%B3%D1%80%D0%B5%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0-b2243b272/'><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div ref={textRef} className={styles.right}>
                    <h2>{t("Hi!")}</h2>
                    <p>{t("I'm front-end react developer from Yakymivka(Ukraine)")}</p>
                    <h4>{t("About me:")}</h4>
                    <p>{t("As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and SCSS, I have a base in Gsap, RestApi, Git, ExpressJS, MongoDB and Figma. I excel in designing and maintaining responsive websites that offer a smooth user experience.")} </p>
                    <div className={styles.languages}>
                        <h4>{t("Teach Stack:")}</h4>
                        <span>
                            <img alt='m' src={m} />
                            <img alt='e' src={e} />
                            <img alt='r' src={r} />
                            <img alt='n' src={n} />
                        </span>
                    </div>
                </div>
            </div>
            <div className={[styles.container2, 'grid'].join(` `)}>
                <h2>{t("Portfolio")}</h2>
                <p>{t("My projects")}</p>
                {data.map((site, index) =>
                    <div key={index} className={`${styles.box1} box`}>
                        {/* <div className={styles.leftRight}> */}
                        <CarouselApp className={styles.leftRight} arr={site.imgs}/>
                        {/* </div> */}
                        <div className={styles.opis}>
                            <h2>{t(site.title)}</h2>
                            <p>{t(site.opis)}</p>
                            <div className={styles.links}>
                                <a target="_blank" rel="noreferrer" href={site.linkGitClient}><i className="bi bi-github"></i>{t("client")}</a>
                                <a target="_blank" rel="noreferrer" href={site.linkGitServer}><i className="bi bi-github"></i>{t("server")}</a>
                                <a target="_blank" rel="noreferrer" href={site.linkSite}><i className="bi bi-link-45deg"></i>{t("site")}</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Home