const leader = require('./src/leader')
const basicRouter = require('./routes/basic')
const registerRouter = require('./routes/register')

leader.applyRouter(basicRouter)
leader.applyRouter(registerRouter)


leader.init()