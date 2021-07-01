let client 

export function setClient(newClient) {
    client = newClient
}

const reqMethods = [
    'request',
    'delete',
    'get',
    'head',
    'options',
    'post',
    'put'

]

let service = {}

reqMethods.forEach(methods => {
    service[methods] = function() {
        if (!client) throw new Error('Axios not installed')
        return client[methods].apply(null, arguments)
    }
})

export default service