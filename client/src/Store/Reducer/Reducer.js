const initialState = {
    Cities: [],
    Activities: [],
    CityDetail: [],
    filterCity: {
        page: 0,
        countryname: "",
        continent: "",
        activity: "",
        order: ""
    }
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_ACTS":
            return {
                ...state,
                filterCity: { ...state.filterCity, activity: action.payload }
            }
        case "GET_ORDER":
            return {
                ...state,
                filterCity: { ...state.filterCity, order: action.payload }
            }
        case "GET_COUNTRYNAME":
            return {
                ...state,
                filterCity: { ...state.filterCity, countryname: action.payload, page: 0 }
            }
        case "GET_PAGE":
            return {
                ...state,
                filterCity: { ...state.filterCity, page: action.payload }
            }
        case "GET_CONTINENT":
            return {
                ...state,
                filterCity: { ...state.filterCity, continent: action.payload, page: 0}
            }
        case "GET_CITIES":
            return {
                ...state,
                Cities: action.payload
            }
        case "GET_DATABASE":
            return {
                ...state,
                Cities: action.payload[0],
                Activities: action.payload[1],
            }
        case "GET_CITYDETAIL":
            return {
                ...state,
                CityDetail: action.payload
            }
        default:
            return state;
    }
}
export default Reducer;