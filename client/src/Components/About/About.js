import React from 'react';
import style from './About.module.css'
import foto from '../img/FotoCv2redcida.jpg'
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <body className={style.body}>
                    <Link to="/countries">
                    <a>
                        <button className={style.button}>Back to main page</button>
                    </a>
                </Link>
            <div className={style.profile}>
                <p className={style.title}>My name is Mariano Celi, I'm Full Stack developer.
                To make this page, javascript, react-redux, express, postgress, sequelize were used. The project is called The next trip, where you can find detailed information on countries in the world, and their tourist activities and / or create new tourist activities.

                You can find me in the shared github or linkedin links. If you want to get more information about me, put your pointer over the image.
                </p>
            </div>
            <div>
                <div className={style.imagearea}>
                    <div className={style.imgwrapper}>
                        <img className={style.img} src={foto}></img>
                        <h2 className={style.name}>Mariano Celi</h2>
                        <ul>
                            <li>
                                <a href="https://github.com/nanoceli"><i class="fab fa-github"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/marianoalejandroceli/"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    )
};
