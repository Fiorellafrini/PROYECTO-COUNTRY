import axios from "axios";// si quiero traerme los personajes del back a mi front voy a usar axios o fetch 
export const GET_COUNTRIES = "GET_COUNTRIES";


export const getCountries = () => {
    return async (dispatch) => {
        let pedido = await axios.get("http://localhost:3001/countries/getAll") // el pedido es asyncrono para que espere del back la info. Esa info es cargada en el payload. axios nos da la info en .data
        dispatch({type:"GET_COUNTRIES", payload: pedido.data}) // se despacha un actions
    }
}

export const createActivities = () => {
    return async (dispatch) => {
        // let pedidoCreate = await axios.post("http://localhost:3001/countries/getAll", obj)
        // dispatch({type:"POST_ACTIVITIES", payload: pedidoCreate.data})
    }
}