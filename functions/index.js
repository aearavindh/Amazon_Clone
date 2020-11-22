const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HptvAD2rPfq27nHXeW0pLREGWAbMoFiZYhk7zmZ2KOGopsspyTiVLojR67Uh3P2vFDSt1x2OHWLJkUYA9vLJLNm00RApwSGXa');

// API

// App cofig

const app = express();

// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    
    console.log('Payment Request Received BOOM!!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: 'inr',
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
});

// Listen command

exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-14085/us-central1/api

// Logs
// http://localhost:4000/functions