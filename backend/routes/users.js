//----------------------------------------------------------------------------------------------------------------------
// Attributes to create route and pull relevant model
const router = require('express').Router();
let User = require('../models/user.model');

//----------------------------------------------------------------------------------------------------------------------
// Endpoint for {port}/users/ to get a list of all users in the mongodb as a json
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//----------------------------------------------------------------------------------------------------------------------
// Endpoint for {port}/users/add to handle post request for new users
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    // add user verification
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//----------------------------------------------------------------------------------------------------------------------
// exports router
module.exports = router;
