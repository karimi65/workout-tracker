const router = require('express').Router()
const db = require('../models')

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => { res.json(err) })
})

router.get('/api/workouts/range', (req, res) => {
    // workout.find({}).limit(7)
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        },
    ])
        .then(data => {
            res.json(data)
        })
        .catch(err => { res.json(err) })
})

router.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch(err => { res.json(err) })
})

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(data => {
            res.json(data)
        })
        .catch(err => { res.json(err) })
})


module.exports = router

