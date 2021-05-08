import React from "react";
import { useSelector } from "react-redux";
import City from '../City/City'

import style from './Cities.module.css'


export default function Cities() {
    const cities = useSelector(state => state.Cities)


    
    return (
            <div className={style.body}>
                <div className={style.cities}>
                    {cities.length?cities.map(city => <City key={city.id}
                        id={city.id}
                        flag={city.flag}
                        name={city.name}
                        continent={city.continent}
                    />
                    ):null}
                </div>

            </div>
    )
}