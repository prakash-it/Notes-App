const express = require('express');
const db = require('./Config/DataBase');
const route = require('./route/users')
const router = require('./route/notes')
const cors = require('cors')
const app = express()


require('dotenv').config()
db()

app.use(cors());
app.use(express.json())

app.use('/api',route)
app.use('/note',router)

app.use('/', (req, res) => {
    res.send('Hey Users');
});

app.listen(process.env.PORT,()=>{
    console.log("Server Is Working");
    
})