const socket = require('../socket')
const router = require('../router')

module.exports = {
    socket: () => socket,
    applyRouter: (routes) => {
        routes.forEach(route => router.register(route.action, route.handler))
    },
    init: () => {
        socket.tcp.on('data', (data) => {
            data = JSON.parse(data.toString())
            const response = router.execute(data)
            if(response != null) {
                socket.tcp.write(JSON.stringify(response))
            }
        })
        socket.init()
    }
}