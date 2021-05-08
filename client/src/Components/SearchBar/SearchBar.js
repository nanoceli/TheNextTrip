import React, { useState } from "react";
import style from './SearchBar.module.css'
import { useDispatch } from "react-redux";
import { getCountryName } from "../../Store/Acions/Actions";

export default function SearchBar() {
  const [city, setCity] = useState({ City: "" })
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setCity({
      [e.target.name]: e.target.value,
    });
    if(e.target.value !== ""){
      return dispatch(getCountryName(e.target.value))
    }
    dispatch(getCountryName(""))
  };

  return (
    <div>
      <form className={style.input} >
        <input id='inputFormulario' className={style.input1}
          type="text"
          placeholder="Search for a country..."
          value={city.City}
          name="City"
          onChange={handleInputChange}
        />
        <img className={style.input2} src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" alt="searchinput" />
      </form>
    </div>
  );
}