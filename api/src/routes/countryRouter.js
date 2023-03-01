const { Router } = require("express");
const { getAll, getCountryId, getCountryName, deleteCountry } = require("../controllers/countryControllers");
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




// // -  Route para borrar/delete - Eliminamos Country

countryRouter.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const countryDelete = await deleteCountry(id);
    res.status(200).send({message: "Country eliminada", element: countryDelete})
  } catch (error) {
    res.status(400).send("Problema al eliminar");
  }
});

// // - Route para modificar/editar Country

// countryRouter.put("/edit/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     // const { name, image, summary, healthScore, steps, dishTypes } =
//     //   req.body;
//     // console.log(name);
//     const recipe = {
//       id
    
//     };
//     res.status(200).send({ message: "El pais fue editado"});
//   } catch (error) {
//     res.status(401).send(error.message);
//   }
// });


module.exports = countryRouter;