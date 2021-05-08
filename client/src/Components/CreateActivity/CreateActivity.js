import React, { useState, } from "react";
import style from './CreateActivity.module.css';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { postTouristActivity} from "../../Store/Acions/Actions";
import axios from "axios";

export default function CreateActivity() {
    const [activity, setActivity] = useState({ countryName: "", name: "", difficulty: 0, duration: "", season: "" })
    const [countries, setCountries] = useState([])
    const dispatch = useDispatch();

    const handleInputChange = (e) => setActivity({
        ...activity,
        [e.target.name]: e.target.value,
    });

    let obj = {countryName:countries.map(a=>a[0].name).toString(),name:activity.name,difficulty:activity.difficulty,duration:activity.duration,season:activity.season}

    function handleInputSubmit(e) {
        e.preventDefault();
        dispatch(postTouristActivity(obj));
    }

    let addCountry = async (e) => {
        e.preventDefault()
        //let country = await axios.get('http://localhost:3001/countries/all')
        let country = await axios.get('https://back-countries.herokuapp.com/countries/all')
        if (country.data.some(a => a.name.toLowerCase() === activity.countryName.toLowerCase())) {
            setActivity({ ...activity, countryName: "" })
            setCountries([...countries, country.data.filter(a => a.name.toLowerCase() === activity.countryName.toLowerCase())])
        } else {
            alert("not country")
        }
    }

    return (
        <div className={style.body}>
            <header className={style.header}>
                Create new tourist activity
            </header>
            <form className={style.form}>
                <label className={style.label}>Country name</label>
                <input className={style.input}
                    type="text"
                    value={activity.countryName}
                    name="countryName"
                    onChange={handleInputChange}
                />
                <button onClick={(e) => { addCountry(e) }}>+</button>
                {countries.map(a =>
                    <div key={a[0].id}>
                        <img className={style.car} clas src={a[0].flag} />{a[0].name}
                    </div>
                )}
                <label className={style.label}>Activity name</label>
                <input className={style.input}
                    type="text"
                    value={activity.name}
                    name="name"
                    onChange={handleInputChange}
                />
                <label className={style.label}>Difficulty</label>
                <select name="difficulty" className={style.input} onChange={handleInputChange}>
                    <option>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label className={style.label}>Duration</label>
                <input className={style.input}
                    type="time"
                    value={activity.duration}
                    name="duration"
                    onChange={handleInputChange}
                />
                <label className={style.label}>Season</label>
                <select name="season" className={style.input} onChange={handleInputChange}>
                    <option>Select</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Spring">Spring</option>
                </select>
                <div>
                    <button className={style.create} onClick={(e) => { handleInputSubmit(e) }}>Create</button>
                </div>
            </form>
            <Link to='/countries' >
                <button className={style.button}>Back</button>
            </Link>
        </div>
    );
};