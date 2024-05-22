import express from "express"

import config from "./config.js"

const app = express()

const expressInstance = app.listen(config.PORT,async() =>{
    console.log(`app activada en el puerto ${config.PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))