const HOST = 'http://localhost:8888'

const getData = (uri) => {
    const url = [HOST, uri].join('')
    return fetch(url, { method: 'GET', mode: 'cors', header: { 'Access-Control-Allow-Origin': '*' } }).then(res => {
        if (!res.ok) throw new Error('bad status')
        return res.json()
    })
}

const utils = {
    getData
}

export default utils

