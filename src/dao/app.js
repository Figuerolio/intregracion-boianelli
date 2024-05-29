import express from "express";
import router from "../routes/collection.routes.js";
import config from "./config.js";
import mongoose from 'mongoose';
import viewsRouter from '../routes/views.routes.js';
import handlebars from 'express-handlebars';

const app = express();

const expressInstance = app.listen(config.PORT,async() =>{
    console.log(`app activada en el puerto ${config.PORT}`)
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.engine(`handlebars`, handlebars.engine());
app.set(`views`, `${config.DIRNAME}/views`);
app.set(`view engine`, `handlebars`);

app.use("/", viewsRouter);
app.use("/api/products", productsRouter);
app.use("/static", express.static(`${config.DIRNAME}/public`));


