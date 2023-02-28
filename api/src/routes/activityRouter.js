const { Router } = require("express");
const { postCreateActivity, getAllActivity } = require("../controllers/activityControllers");
const activityRouter = Router();

activityRouter.post("/", async (req, res) => {
  const { name, difficulty, duration, season, id } = req.body;

  try {
    const result = await postCreateActivity(
        name,
        difficulty,
        duration,  
        season,     
        id
    );
    return res.status(200).json(result);
  } catch (error) {
    // console.log("estoy acá");
    return res.status(400).json({ error: error.message });
  }
});

activityRouter.get('/getAllActivity', async(req,res) =>{
        try {
            const allActivity = await getAllActivity();
            res.status(200).json(allActivity);   
        } catch (error) {
            res.status(404).send('Hubo un problema')
        }
    })

module.exports = activityRouter;