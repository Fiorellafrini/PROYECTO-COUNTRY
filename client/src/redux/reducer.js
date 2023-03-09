//importar actions
import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_DETAIL,
    POST_ACTIVITIES,
    SEARCH_COUNTRIES_BY_NAME
    // CLEAN_DETAIL,
  } from "./actionsTypes";
  


const initialState= { //ESTADOS QUE NECESITO, las cosas que quiero guardar
    allCountries: [], //DONDE VOY A GUARDAR TODAS LAS COUNTRIES ,Es necesario hacer una copia de todos los paises para realizar los filtrados
    detail: {}, //para guardar una sola
    activities: [], //almaceno las activities
    // filters: {"ascendente", "descendente"}, 
    // filters: { activities: "All", continents: "All" },
    filteredCountries: [],
  };


const rootReducer = (state = initialState, action) => {
    switch(action.type){ // el switch va ir evaluando el tipo de action
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload // ese payload es el que viene de la actions, en este caso tiene la data de todas conuntrys.
            };
        case GET_ACTIVITIES:
            return {
              ...state,
              activities: action.payload,
                };
          
        case GET_DETAIL:
            return {                
                ...state,
             detail: action.payload
                };

                case SEARCH_COUNTRIES_BY_NAME:
                    return {
                      ...state,
                      allCountries:action.payload,
                    };

        // case CLEAN_DETAIL:
        //     return {
        //         ...state,
        //         detail: [] 
        //     };

            case POST_ACTIVITIES:
                return {
                  ...state, // retorna una copia de todo el estado
                };
          

        default:
            return {...state}
    }
}
export default rootReducer;
