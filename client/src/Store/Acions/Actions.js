const axios = require('axios')
const GET_CITIES = 'GET_CITIES'
const GET_CITYDETAIL = 'GET_CITYDETAIL'
const GET_PAGE = 'GET_PAGE';
const GET_COUNTRYNAME = 'GET_COUNTRYNAME'
const GET_CONTINENT = 'GET_CONTINENT'
const GET_ORDER = 'GET_ORDER'
const GET_DATABASE = 'GET_DATABASE'
const GET_ACTS = 'GET_ACTS'

export function getDataBase() {
    return function (dispatch) {
        //return fetch('http://localhost:3001/countries')
        return fetch('https://back-countries.herokuapp.com/countries')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_DATABASE, payload: json });
            }).catch(e => alert(e))
    };
};

export function getActivities(act) {
    return function (dispatch) {
        dispatch({ type: GET_ACTS, payload: act });
    }
}

export function getOrder(order) {
    return function (dispatch) {
        dispatch({ type: GET_ORDER, payload: order });
    }
}

export function getPage(page) {
    return function (dispatch) {
        dispatch({ type: GET_PAGE, payload: page });
    }
}

export function getCountryName(city) {
    return function (dispatch) {
        dispatch({ type: GET_COUNTRYNAME, payload: city });
    }
}

export function getContinent(continent) {
    return function (dispatch) {
        dispatch({ type: GET_CONTINENT, payload: continent });
    }
}

export function getCities(page, city, continent, order, act) {
    return function (dispatch) {
        //return fetch(`http://localhost:3001/countries?page=${page}&name=${city}&continent=${continent}&order=${order}&activity=${act}`)
        return fetch(`https://back-countries.herokuapp.com/countries?page=${page}&name=${city}&continent=${continent}&order=${order}&activity=${act}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_CITIES, payload: json });
            }).catch(e => alert(e))
    };
};

export function getCityDetail(id) {
    return function (dispatch) {
        //return fetch(`http://localhost:3001/countries/${id}`)
        return fetch(`https://back-countries.herokuapp.com/countries/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_CITYDETAIL, payload: json });
            })
    };
};

export function postTouristActivity(data) {
    return function () {
        try {
            //axios.post('http://localhost:3001/activity', data)
            axios.post('https://back-countries.herokuapp.com/activity', data)
            alert("Activity created")
        } catch (e) {
            alert("Errors dates")
        }
    }
};





