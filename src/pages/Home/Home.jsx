import React, { useEffect, useRef } from 'react'
import styles from './Home.module.scss'
import m from '../../assets/m.png'
import e from '../../assets/e.png'
import r from '../../assets/r.png'
import n from '../../assets/n.png'
import textSquad from '../../assets/textSquad.png'
import data from '../data'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
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
                        <img alt='ava' className={styles.ava} src='https://www.tutu.ru/file/4/b024c1aad77e42d424c96720b4d60712/' />
                        <img alt='obvodka' className={styles.txt} src={textSquad} />
                    </div>
                    <p>name: Olha Hreshnikova</p>
                    <p>age: 15</p>
                    <p>address: Gdańsk, Poland</p>
                    <div className={styles.znaczki}>
                        <a target="_blank" rel="noreferrer" href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqqJrsLKQbPdPgLmzgXjZpLlCDWlhnSWBDhpCBjHFSXJnnKPtdMrlLqLSNxLHGfdKmXPB'><i className="bi bi-envelope-at"></i></a>
                        <a target="_blank" rel="noreferrer" href='https://www.facebook.com/profile.php?id=100027348367938'><i className="bi bi-facebook"></i></a>
                        <a target="_blank" rel="noreferrer" href='https://github.com/greshnikovaa'><i className="bi bi-github"></i></a>
                        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/%D0%BE%D0%BB%D1%8F-%D0%B3%D1%80%D0%B5%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0-b2243b272/'><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div ref={textRef} className={styles.right}>
                    <h2>Hi!</h2>
                    <p>I'm front-end react developer from Yakymivka(Ukraine)</p>
                    <h4>About me:</h4>
                    <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. </p>
                    <div className={styles.languages}>
                        <h4>Teach Stack:</h4>
                        {/* <p>|</p> */}
                        <img alt='m' src={m} />
                        <img alt='e' src={e} />
                        <img alt='r' src={r} />
                        <img alt='n' src={n} />
                    </div>
                </div>
            </div>
            <div className={[styles.container2, 'grid'].join(` `)}>
                <h2>Portfolio</h2>
                <p>My projects</p>
                {data.map((site, index) =>
                    <div className={`${styles.box1} box`}>
                        <img alt='img' src={site.img}></img>
                        <div className={styles.opis}>
                            <h2>{site.title}</h2>
                            <p>{site.opis}</p>
                            <div className={styles.links}>
                                <i className="bi bi-github"></i>
                                <a target="_blank" rel="noreferrer" href={site.linkGitClient}>client</a>
                                <i className="bi bi-github"></i>
                                <a target="_blank" rel="noreferrer" href={site.linkGitServer}>server</a>
                                <i className="bi bi-link-45deg"></i>
                                <a target="_blank" rel="noreferrer" href={site.linkSite}>site</a>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Home