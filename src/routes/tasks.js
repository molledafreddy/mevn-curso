const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) => {
    console.log('llewgo');
    // var tasks = new Object();
    //     tasks.title = "Ford";
    //     tasks.description = "Mustang";
    await Task.find()
        .then (result => console.log(result))
        .catch(err => console.log(err))
    res.json({})
    // console.log(tasks);
    // res.json(tasks);

        
})


module.exports = router;