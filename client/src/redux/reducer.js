//importar actions
import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_DETAIL,
    // POST_ACTIVITIES,
    SEARCH_COUNTRIES_BY_NAME,
    DELETE_COUNTRY,
    FILTER_ACTIVITY,
    FILTER_CONTINENT,
    ORDER_POPULATION,
    ORDER_NAME
  } from "./actionsTypes";
  


const initialState= { //ESTADOS QUE NECESITO, las cosas que quiero guardar
    allCountries: [], //DONDE VOY A GUARDAR TODAS LAS COUNTRIES ,Es necesario hacer una copia de todos los paises para realizar los filtrados
    detail: {}, //para guardar una sola
    activities: [], //almaceno las activities
    // allCountries2: [],
    filteredCountries: [],
  };


const rootReducer = (state = initialState, action) => {
    switch(action.type){ // el switch va ir evaluando el tipo de action
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload, // ese payload es el que viene de la actions, en este caso tiene la data de todas conuntrys.
                filteredCountries: action.payload,

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
        case DELETE_COUNTRY:
          return {
              ...state,
              allCountries:[]
          }
        case FILTER_CONTINENT:
            const countries2 = state.filteredCountries;
            const filter =
              action.payload === "All"
                ? countries2
                : countries2.filter((pais) => pais.continent === action.payload);
            return {
              ...state,
              allCountries: filter,
            };
        
            
        case FILTER_ACTIVITY:
              const allCount = state.allCountries;
              const filtremos =
                action.payload === "actividad"
                  ? allCount
                  : allCount.filter((p) =>
                      p.activities.some((act) => act.name === action.payload)
                    );
              return {
                ...state,
                allCountries: filtremos,
              };
        
        case ORDER_POPULATION:
          return{

          }
        case ORDER_NAME:
          return{
            
          }
            // case POST_ACTIVITIES:
            //     return {
            //       ...state, // retorna una copia de todo el estado
            //     };
          

        default:
            return {...state}
    }
}
export default rootReducer;

