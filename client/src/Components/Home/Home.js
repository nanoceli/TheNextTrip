import React, { useEffect } from 'react';
import style from './Home.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Cities from '../Cities/Cities'
import Filter from '../Filters/Filter'
import Orders from '../Orders/Orders'
import { Link } from 'react-router-dom';
import CountryPage from '../CountryPage/Page'
import { useSelector, useDispatch } from "react-redux";
import { getCities, getDataBase } from '../../Store/Acions/Actions'


export default function Home() {

    const filter = useSelector(state => state.filterCity)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCities(filter.page, filter.countryname, filter.continent, filter.order, filter.activity))
    }, [filter])

    useEffect(() => {
        dispatch(getDataBase())
    }, [])

    return (
        <div id="main" className={style.body}>
            <div className={style.header}>
                <Link className={style.about} to="/activities">Create tourist activity</Link>
                <p className={style.text}>My next trip!</p>
                <Link className={style.about} to="/about">About</Link>
            </div>
            <div className={style.search}>
                <SearchBar />
                <Orders />
                <Filter />
            </div>
            <CountryPage/>
            <Cities/>
        </div>
    );

};
