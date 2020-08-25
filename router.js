let actions = []

module.exports = {
    execute: (request) => {
        const action = request.action ||  request.response.action || undefined
        const actionHandler = actions.find(element => element.action === action)
        if(actionHandler === undefined) {
            return null
        }

        return actionHandler.handler(request)
    },
    register: (action, handler) => {
        actions.push({
            'action': action,
            'handler': handler
        })
    }

}