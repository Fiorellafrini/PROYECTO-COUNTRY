import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";


export const getCountries = () => {
    return async (dispatch) => {
        let pedido = await axios.get("http://localhost:3001/countries/getAll")
        dispatch({type:"GET_COUNTRIES", payload: pedido.data})
    }
}

export const createActivities = () => {
    return async (dispatch) => {
        // let pedidoCreate = await axios.post("http://localhost:3001/countries/getAll", obj)
        // dispatch({type:"POST_ACTIVITIES", payload: pedidoCreate.data})
    }
}