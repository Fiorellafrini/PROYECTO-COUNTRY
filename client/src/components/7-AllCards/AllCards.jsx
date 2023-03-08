//VOY A HACER TODO LO QUE SE REFIER E A LAS CARTAS
//voy a hacer la logica para traer la info DEL ESTADO DE REDUX y renderizar lo que quiera, PUEDO HACER PAGINACION 

// en home renderizo allcards y en allcaRDS renderizo card

import React, { useEffect } from "react";  
import { useSelector, useDispatch } from "react-redux"; // hooks
import CardCountry from "../6-CardCountry/CardCountry"; // me traigo la carta
// import { Link } from "react-router-dom";// importo link para que cuando apreite me lleve a esa ruta
import { getCountries } from "../../redux/actions"; //me traigo esa action
import styles from "./AllCards.module.css"



const AllCards = () => {
  //hago un pedido de estado a redux y triago el estado countries
    // const stateCountries = useSelector(state => state.allCountries); // el useselecor hace que tenga acceso al stateinicial desde aca , y asi trae el estado
    const allCountries = useSelector(state => state.allCountries); // el useselecor hace que tenga acceso al stateinicial desde aca , y asi trae el estado

    const dispatch = useDispatch()
    // console.log(stateCountries);
    
    // useeffect: hook que emula los ciclos de vida del componente, manejas los 3 ciclos de vida del componente(montaje, desmontaje, y la actualizacion)
    useEffect(()=>{ //lo traigo por si quiero hacer algo antes que me renderice.
        // cuando mi componente se muestra en pantalla quiero que despache
        dispatch(getCountries()) //despacha esa action usando el dispatch
    },[dispatch]) // lo que esta en [] es la dependencia del useeffect. cada vez que cambia la depedencia se ejecuta el useeffect de vuelta
    //al hacer esto me traje a allcountries todos los personajes


    
    /* // hago un ternario para preguntar si tengo algo adentro. si tengo algo.. le hago un map */
    return( 
        <div>
            <div className={styles.cards}>
                {allCountries.length > 0 ? allCountries.map(element => 
                
                <CardCountry
                name={element.name}
                flag={element.flag}
                key={element.id} // el key es para uso interno de react y ahi entinede que las cartas son distintas.
                id={element.id}
                continent={element.continent}
                capital={element.capital}
                subregion={element.subregion}
                area={element.area}
                population={element.population}
                ></CardCountry>
                )
                : 
                <h1>Loanding...</h1>}
                
            </div>
         </div>
    )}
                 


export default AllCards;

/////////////////////COMPONENTE DE CLASE
// import React from "react";
// import { connect } from "react-redux";
// import { getCountries } from "../../redux/actions";
// import CardCountry from "../6-CardCountry/CardCountry"; // me traigo la carta
// import styles from "./AllCards.module.css"



// class AllCards extends React.Component{ //extiende tra info de otro lado
//     constructor(props){
//         super(props) // el super trae propiedades al component
//     }
// //aca se monta
//     componentDidMount(){
//         this.props.getCountries();
//     }


//     render(){
//         return(
//             <div>
//             <div className={styles.cards}>
        
//         {
//             this.props.allCountries?.map(element => { // si hay algo ? hace esto
//                 return <CardCountry
//                 name={element.name}
//                 flag={element.flag}
//                 key={element.id} // el key es para uso interno de react y ahi entinede que las cartas son distintas.
//                 id={element.id}
//                 continent={element.continent}
//                 capital={element.capital}
//                 subregion={element.subregion}
//                 area={element.area}
//                 population={element.population}
//                 ></CardCountry>
//             })
//         }

//         </div>
//         </div>
//         )
//     }
// }

// const mapStateToProps = (state) =>{
//     return{
//         allCountries: state.allCountries
//     } 
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         getCountries: () => dispatch(getCountries())

//     }
// }
// // tanto getcountries y allcards me llegan como props al constructor y super gracias al connect



// export default connect(mapStateToProps, mapDispatchToProps)(AllCards);