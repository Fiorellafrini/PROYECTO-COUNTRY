import axios from "axios";// si quiero traerme los personajes del back a mi front voy a usar axios o fetch 
import { GET_COUNTRIES } from "./actionsTypes";
import { GET_ACTIVITIES } from "./actionsTypes";
import { GET_DETAIL } from "./actionsTypes";
import { SEARCH_COUNTRIES_BY_NAME } from "./actionsTypes"
import { DELETE_COUNTRY } from "./actionsTypes";
import { FILTER_ACTIVITY } from "./actionsTypes";
import { FILTER_CONTINENT } from "./actionsTypes";
import { ORDER_POPULATION } from "./actionsTypes"
import { ORDER_NAME } from "./actionsTypes";
// import { POST_ACTIVITIES } from "./actionsTypes";

export const getCountries = () => { //siempre que solicito info a un server(donde uso axios o fetch), se retorna otra fn e interviene el middlewerw y lo manda al reducer
    return async (dispatch) => {
//         const pedido = await axios.get("http://localhost:3001/countries/getAll"); // el pedido es asyncrono para que espere del back la info. Esa info es cargada en el payload. axios nos da la info en .data
//     //    console.log(pedido);
//         dispatch({type: GET_COUNTRIES, payload: pedido.data}) // se despacha un actions
//     }
// }
  fetch(`http://localhost:3001/countries/getAll`)
  .then(response => response.json()) // el primer then me parsea la respuesta de json a js para que la entienda
  .then(data => { // este then tiene toda la data
    return dispatch({ type: GET_COUNTRIES, payload: data })
      })
    }
  }



export function getActivities() {
    return async (dispatch) => {
      const allActivities = await axios.get(
        `http://localhost:3001/activities/getAllActivity`
      );
      dispatch({ type: GET_ACTIVITIES, payload: allActivities.data });
    };
  }
  export function getDetail(id) {
    return async (dispatch) => {
      const infoDetail = await axios.get(`http://localhost:3001/countries/${id}`);
      dispatch({ type: GET_DETAIL, payload: infoDetail.data });
    };
  }

  

  // export const getDetail = (id) => {
  //   return function (dispatch) {
  //     fetch(`http://localhost:3001/countries/${id}`)
  //       .then((response) => response.json())
  //       .then((data) => dispatch({ type: GET_DETAIL, payload: data }))
  //       .catch((error) => {
  //           window.alert("Country not found!");
  //         // console.log(error);
  //       });
  //   };
  // };

  ////////////////////
  // export const getDetail = (id) => {
  //   return function (dispatch) {
  //     fetch(`http://localhost:3001/detailpage/${id}`)
  //       .then((response) => response.json())
  //       .then((data) => dispatch({ type: GET_DETAIL, payload: data }))
  //   };
  // };
///////////////////7

  // export function getDetail(id) {
  //   return async (dispatch) => {
  //     const infoDetail = await axios.get("http://localhost:3001/countries/" + id);
  //     dispatch({ type: GET_DETAIL, payload: infoDetail.data });
  //   };
  // }

  export const getCountryName = (name) => {
    return function (dispatch) {
      fetch(`http://localhost:3001/countries?name=${name}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: SEARCH_COUNTRIES_BY_NAME, payload: data }))
        .catch((error) => {
          window.alert("Country not found!");
        });
    };
  };



//   export const deleteCountry = (id) => {
//     // return { type: DELETE_PERSONAJE, payload: id}
//     return async (dispatch) => {
//         const response = await axios.delete(`http://localhost:3001/countries/delete/${id}`);

//         return dispatch({
//             type: DELETE_COUNTRY, payload: response.data
//         })
//     }
// }

export const deleteCountry = () => {
  return {type: DELETE_COUNTRY}
}

 


  export const filterContinent = (payload) =>{
      return { type: FILTER_CONTINENT, payload}
  }


  export const filterActivity = (payload) => {
      return { type: FILTER_ACTIVITY, payload}

  }

  export const orderPopulation = (payload) => {
      return { type: ORDER_POPULATION, payload}
  }

  export const orderName = (payload) => {
    return { type: ORDER_NAME, payload}
}

  // export function postActivities(payload) {
  //   return async (dispatch) => {
  //     const response = await axios.post(
  //       "http://localhost:3001/activities",
  //       payload
  //     );
  //     return response;
  //   };
  // }