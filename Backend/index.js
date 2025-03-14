// const express = require("express");
// we have changed the type in package file to module 
import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/database.js'
import { connect } from 'mongoose';
const app = express();

dotenv.config();
const PORT = process.env.PORT;

// middleware 
app.use(express.json());

// connect database 
dbConnect();

app.get('/', (req, res) => {
    res.send("Hello Baby")
})

app.listen(PORT, () => {
    console.log(`app started at port ${PORT}`);
})