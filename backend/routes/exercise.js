//----------------------------------------------------------------------------------------------------------------------
// Attributes to create route and pull relevant model
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//----------------------------------------------------------------------------------------------------------------------
// Endpoint for {port}/exercise/ to get a list of all exercises in the mongodb as a json
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

//----------------------------------------------------------------------------------------------------------------------
// Endpoint for {port}/exercise/add to handle post request for new exercises
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    // add user verification
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//----------------------------------------------------------------------------------------------------------------------
// exports router
module.exports = router;
