const routerWorkout = require('./workout')
const routerUser = require('./user')


const initWebRoute = (app) => {
    app.use('/api/workouts', routerWorkout)
    app.use('/api/user', routerUser)
}

module.exports = initWebRoute




