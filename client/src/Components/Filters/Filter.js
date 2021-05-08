import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getContinent } from '../../Store/Acions/Actions'
import style from './Filter.module.css'

export default function Filter() {
    const acts = useSelector(state => state.Activities)
    const dispatch = useDispatch();
    
    var act = [];
    acts.map(item => item.name &&
        act.push(item.name));
    var activities = act.filter(
        (value, index, self) => {
            return value && self.indexOf(value) === index;
        });

    const handleInputChange = (e) => {
        if (e.target.value !== "All") {
            return dispatch(getContinent(e.target.value))
        }
        dispatch(getContinent(""))
    }
    const handleInputChangeA = (e) => {
        if (e.target.value !== "All") {
            return dispatch(getActivities(e.target.value))
        }
        dispatch(getActivities(""))
    }
console.log(activities, act)

    return (
        <form className={style.form}>
            <label className={style.continentsn} for="continent">Continent:</label>
            <select className={style.continents} onChange={handleInputChange}>
                <option value="All">All</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
                <option value="Polar">Polar</option>

            </select>
            <label className={style.continentsn} for="cars">Tourist Activity:</label>
            <select className={style.continents} onChange={handleInputChangeA}>
                <option>All</option>
                {activities.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </select>
        </form>
    )
}