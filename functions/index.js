const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
//the secret api key from stripe=>developer=>api key
const stripe = require("stripe")('sk_test_51IBsffCncMgsTThk44n6IIdNA7wGazCecMadbejnOlkakn7jipnK2k4XPVNdyVXxkjWyqxGdvRSvrDaNfkAdNFJ1009QaHu8lU');

// - API

// - App config --set express server
const app = express();

//- Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

//This url is from useEffect on payment.js
app.post('/payments/create', async (request, response) => {

    //the queryParam is accessed through the below code
    const total = request.query.total;

    console.log("payment request received for the amount>>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,//subunits of the currency
        currency: 'usd',
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})

// - Listen command
exports.api = functions.https.onRequest(app);

//example end point

//http://localhost:5001/clone-b8094/us-central1/api

