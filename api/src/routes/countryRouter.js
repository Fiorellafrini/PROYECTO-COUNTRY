const { Router } = require("express");
const { getAll, getCountryId, getCountryName } = require("../controllers/countryControllers");
const countryRouter = Router();


// -  Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.
countryRouter.get('/getAll', async (req,res) => {
        try {
            const allCountries = await getAll();
            res.status(200).json(allCountries);   
        } catch (error) {
            res.status(404).send('Hubo un problema')
        }
    })

// // -  Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
// // -  El país es recibido por parámetro (ID de tres letras del país).
// // -  Tiene que incluir los datos de las actividades turísticas asociadas a este país.
countryRouter.get('/:id', async (req,res) =>{
        try {
        const {id} = req.params
          let country = await getCountryId(id);
          res.status(200).json(country);
        } catch (error) {
          res.status(404).send(error.message);
        }
      });


// // -  Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// // -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// // -  Si no existe el país, debe mostrar un mensaje adecuado.

countryRouter.get('/', async(req,res)=>{
        const { name } = req.query;
        try {
          const countryName = await getCountryName(name);
          res.status(200).json(countryName);
        } catch (error) {
          res.status(400).send(error.message);
        }
      });


module.exports = countryRouter;