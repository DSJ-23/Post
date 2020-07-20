const express = require('express')
const app = express()
const port = 3000

require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

const environment = process.env.NODE_ENV || 'development';   
const configuration = require('./knexfile')[environment];    
const knex = require('knex')(configuration);   

app.get('/db', (req, res ) => {
    knex('person')
    .then(people => {
        res.json(people)
    })
    .catch(err => {
        res.json(err)
    })
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))