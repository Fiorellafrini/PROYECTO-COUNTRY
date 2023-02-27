const { Router } = require("express");
const { Country, Activity } = require("../db");
const countryRouter = Router();
const axios = require("axios");



// -  Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
countryRouter.get('/getAll', async (req,res) => {
// })
        try {
        
        const apiUrl = await axios.get('https://restcountries.com/v3/all');
        
            const apiInfo = await apiUrl.data.map(info=> { // voy a mapear y quedarme solo con lo que me interesa
        const data= {
            id: info.cca3,
            name: info.name.common,
            flag: info.flag,
            continent: info.continent,
            capital: info.capital,
            subregion: info.subregion,
            area: info.area,
            population: info.population
        }
        return data
    })
    
    // return (apiInfo);

    const db = await Country.findAll({ include: [{model: Activity}] })

    const apiTotal = [...apiInfo, ...db]


    res.status(200).json(apiTotal)

    } catch (error) {

        res.status(400).json({error: error.message})
    }
    
});




// -  Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// -  El país es recibido por parámetro (ID de tres letras del país).
// -  Tiene que incluir los datos de las actividades turísticas asociadas a este país.
countryRouter.get('/:idPais', (req,res) =>{

})


// -  Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -  Si no existe el país, debe mostrar un mensaje adecuado.
countryRouter.get('/name', (req,res)=>{

})


module.exports = countryRouter;