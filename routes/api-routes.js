var db = require("../models");



module.exports = function (app) {

    //get req for most recent workout from "/api/workouts"
    //working
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //post request using .update for "/api/workouts/:id"
    //working
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        db.Workout
            .findByIdAndUpdate(
                params.id, 
                { $push: { exercises: body } }, 
                { new: true})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //post new workout to "/api/workouts/"
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //get all to "/api/workouts/range"
    //working
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    

    


}