import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getCityDetail } from '../../Store/Acions/Actions'
import style from './CityDetail.module.css';

export default function CityDetail({ id }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCityDetail(id))
    }, [])
    const citydetail = useSelector(state => state.CityDetail)

    return (
        <div className={style.body}>
            <div className={style.intobody}>
                    <img className={style.img} alt="img" src={citydetail.flag} />
                <div className={style.bodypost}>
                    <p className={style.b}>Name:{" " + citydetail.name}</p>
                    <p className={style.b}>Country code: {" " +citydetail.id}</p>
                    <p className={style.b}>Continent: {" " +citydetail.continent}</p>
                    <p className={style.b}>Capital: {" " +citydetail.capital}</p>
                    <p className={style.b}>Region: {" " +citydetail.subRegion}</p>
                    <p className={style.b}>Area: {" " +citydetail.area} Km2</p>
                    <p className={style.b}>Population: {" " +citydetail.population}</p>
                </div>
            </div>
            <div className={style.divs}>
                <p className={style.tourist}>Tourist Activities:</p>
                {
                    citydetail.activities && citydetail.activities.map(dato => (
                      
                            <div className={style.ps}>
                                <p className={style.p}>Name: {dato.name}</p>
                                <p className={style.p}>Difficulty: {dato.difficulty}</p>
                                <p className={style.p}>Duration: {dato.duration}</p>
                                <p className={style.p}>Season: {dato.season}</p>
                            </div>
                      ))
                }
            </div>
                <Link className={style.buton} to='/countries' >
                    Back
                </Link>
        </div>
    )
}