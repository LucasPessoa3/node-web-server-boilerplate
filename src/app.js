const express = require('express')


const app = express()

//app.com
app.get('', (req, res) => {
    res.send('Hello Express')
})

//app.com/help
app.get('/help', (req, res) => {
    res.send('Help page')
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})


//app.com/about