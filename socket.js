const net = require('net')
const tcpClient = new net.Socket()


tcpClient.on('close', () => {
    console.log('Disconnected!')
})

module.exports = {
    tcp: tcpClient,
    init: () => {
        tcpClient.connect(7171, '127.0.0.1', () => {
            console.log('Connected!')
            tcpClient.write(JSON.stringify({
                'action': 'register',
                'manifest': {
                    'actions_available': [
                        'sum'
                    ]
                }
            }))
        })

    }
}