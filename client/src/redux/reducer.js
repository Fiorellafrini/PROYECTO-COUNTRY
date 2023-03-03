//importar actions
// import { GET_COUNTRIES } from "./actions";


const initialState= { //ESTADOS QUE NECESITO, las cosas que quiero guardar
    pageCountries:[],
    allCountries: [], //DONDE VOY A GUARDAR TODAS LAS COUNTRIES ,Es necesario hacer una copia de todos los paises para realizar los filtrados
    detail: [], //para guardar una sola
    countries: [], //almaceno las countries
    activities: [], //almaceno las activities
    // filters: {"ascendente", "descendente"},
    // filters: { activities: "All", continents: "All" },

}





const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
            };

        default:
            return state
    }
}
export default rootReducer;
