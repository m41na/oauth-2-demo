
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const axios = require('axios').default

const port = 3030
const authContext = {
    'auth-url': 'http://127.0.0.1:9000/oauth2/auth',
    'token-url': 'http://ory-hydra-example--hydra:4444/oauth2/token',
    'client-id': 'another-consumer',
    'client-secret': 'consumer-secret',
    'scope': 'openid,offline',
    'redirect': 'http://127.0.0.1:9010/callback',
}

app.use(cors())
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', function (req, res) {
    var login = req.body;
    console.log(login);
    axios({
        method: 'post',
        url: authContext['auth-url'],
        
    })
    res.send("login request received!");
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
