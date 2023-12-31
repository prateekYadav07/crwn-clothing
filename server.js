const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")
const path = require('path')
if(process.env.NODE_ENV !== 'production') require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// app.use(cors)
app.use(cors())


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.get('/', (req,res) => {
    res.status(200).json({message: 'hello world'})
})

app.post('/payment', (req,res) => {
    const body = {
        source : req.body.token.id,
        amount : req.body.amount,
        currency: 'usd'
    }

    stripe.charges.create(body, (stripeErr,stripeRes) => {
        stripeErr ? res.status(500).send({error: stripeErr}) : res.status(200).send({success: stripeRes})
    })
})

app.listen(port, () =>{
    console.log('server is running on',port);
})
.on('error', (error) => {
    console.log(error);
})