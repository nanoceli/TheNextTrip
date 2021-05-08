import React from 'react';
import { Link } from "react-router-dom";
import style from './City.module.css';

export default function City({ id, name, flag, continent, population, activities }) {
    return (
            <div className={style.body}>
                    <Link to={`/countries/${id}`} >
                        <img className={style.sflag} src={flag} alt="flag" />
                    </Link>
                <div className={style.titles}>
                    <Link className={style.name} to={`/countries/${id}`} >
                        {name}
                    </Link>
                    <p className={style.continent}>{continent}</p>
                    <p>{population}</p>
                    <p>{activities}</p>
                </div>
            </div>
    );
};