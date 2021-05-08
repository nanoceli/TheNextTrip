import React, { useEffect } from 'react';
import style from './LandingPage.module.css'
import { Link } from 'react-router-dom';
import { getDataBase } from '../Store/Acions/Actions'
import { useDispatch } from "react-redux";


export default function Landing() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataBase())
    }, [dispatch])

    return (
        <div className={style.body}>
            <Link  to="/countries">
               <p className={style.button}>Welcome to The next trip</p> 
            <img className={style.img} src='https://media.giphy.com/media/uv2l94T1vvMXmFB4lr/giphy.gif' alt="Imagen Landing"></img>
            </Link>
        </div>
    );
};