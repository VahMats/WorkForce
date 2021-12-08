const Route = require('express');
const UserRoutes = require('./UserRoutes')

const router = new Route();

router.use('/user', UserRoutes)

module.exports = router