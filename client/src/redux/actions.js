import axios from "axios";// si quiero traerme los personajes del back a mi front voy a usar axios o fetch 
import { GET_COUNTRIES } from "./actionsTypes";
import { GET_ACTIVITIES } from "./actionsTypes";
import { GET_DETAIL } from "./actionsTypes";
// import { POST_ACTIVITIES } from "./actionsTypes";

export const getCountries = () => { //siempre que solicito info a un server(donde uso axios o fetch), se retorna otra fn e interviene el middlewerw y lo manda al reducer
    return async (dispatch) => {
//         const pedido = await axios.get("http://localhost:3001/countries/getAll"); // el pedido es asyncrono para que espere del back la info. Esa info es cargada en el payload. axios nos da la info en .data
//     //    console.log(pedido);
//         dispatch({type: GET_COUNTRIES, payload: pedido.data}) // se despacha un actions
//     }
// }
  fetch("http://localhost:3001/countries/getAll")
  .then(response => response.json()) // el primer then me parsea la respuesta de json a js para que la entienda
  .then(data => { // este then tiene toda la data
    return dispatch({ type: GET_COUNTRIES, payload: data })
      })
    }
  }



export function getActivities() {
    return async (dispatch) => {
      const allActivities = await axios.get(
        "http://localhost:3001/activities/getAllActivity"
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

  export function postActivities(payload) {
    return async (dispatch) => {
      const response = await axios.post(
        "http://localhost:3001/activities",
        payload
      );
      return response;
    };
  }