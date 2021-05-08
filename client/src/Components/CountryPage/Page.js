import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPage } from '../../Store/Acions/Actions'
import left from '../img/left-arrow.svg'
import right from '../img/right-arrow.svg'
import style from '../CountryPage/Page.module.css'

export default function Cities() {
    const filter = useSelector(state => state.filterCity)
    const cities = useSelector(state => state.Cities)
    const dispatch = useDispatch();

    function changepage(e) {
        if (e.target.id === "previuos" && filter.page > 0) {
            dispatch(getPage(filter.page - 1))
        }
        if (e.target.id === "next" && filter.page <= 24) {
            dispatch(getPage(filter.page + 1))
        }
    }

    return (
        <div className={style.body}>
            {filter.page > 0 ? <input id="previuos" type="image" src={left} alt="img" className={style.button} onClick={e => changepage(e)} /> : null}
            {
                cities.length ?
                    <input id="next" type="image" src={right} alt="img" className={style.button} onClick={e => changepage(e)} />
                    : <h3 className={style.end}><p className={style.text}>Oh! No more countries found</p></h3>
            }
        </div>
    )
}