const router = require('express').Router()
const workout = require('../models/Exercise')

router.get('/api/workouts', (req, res) => {
    workout.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => { res.json(err) })
})

router.get('/api/workouts/range', (req, res) => {
    workout.find({}).limit(7)
        .then(data => {
            res.json(data)
        })
        .catch(err => { res.json(err) })
})

router.post('/api/workouts', (req, res) => {
    workout.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => { res.json(err) })
})

router.put('/api/workouts/:id', (req, res) => {
    workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(data => {
            res.json(data)
        })
        .catch(err => { res.json(err) })
})


module.exports = router

