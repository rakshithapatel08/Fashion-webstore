// server creation
// always transmission via json
// frontend ---> GET request /api/dresses example

const express = require("express");
require("dotenv").config();
const Garment = require("./models/database");
const cors = require("cors");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Mailjet = require ('node-mailjet');
const mailjet = Mailjet.apiConnect(process.env.EMAIL_API_KEY, process.env.EMAIL_API_SECRET_KEY);

const app = express(); // returns server object

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
    response.send("backend");
})

app.get("/api/products", (request, response) => {
    Garment.find({})
        .then((garments) => {
            response.status(200).json(garments);
        })
        .catch(error => console.log(error))
});

app.get("/api/products", (request, response) => {
    Garment.find({})
        .then((garments) => {
            response.status(200).json(garments);
        })
        .catch(error => console.log(error))
});

app.get("/api/products/:id", (request, response) => {
    
    const id = request.params.id;

    Garment.findById(id)
    .then(result => {
        response.json(result);
    })
    .catch(error => console.log(error))
});

// stripe post request
app.post('/api/payment', async (request, response) => {

    const cartData = request.body;

    const params = {

        // right side

        submit_type: "pay",
        mode: 'payment',
        billing_address_collection: "auto",
        currency: "usd",
        payment_method_types: ["card"],
        shipping_options: [
            {
                shipping_rate: "shr_1OI4KvSDnENANRfHNpD8JP80",
            },
            {
                shipping_rate: "shr_1OI4RHSDnENANRfHlkFn63Bs",
            },
            {
                shipping_rate: "shr_1OI4SXSDnENANRfHtkB8UP55",
            },
        ],

        // left side

        line_items:
          cartData.map((cartItem)=>{
                return(
                    {
                        price_data: {
                            currency: "usd",
                            unit_amount: cartItem.price * 100,
                            product_data: {
                              name: cartItem.name,
                              description: `${cartItem.desc.slice(0,10)}...`,
                              images: [cartItem.garment_img_url],
                            }
                        },
                        quantity: cartItem.quantity,
                    }
                )
            }),

        // redirection
        success_url: `${request.headers.origin}/success`,
        cancel_url: `${request.headers.origin}/`,
      }

    const session = await stripe.checkout.sessions.create(params);
  
    response.json(session);
  });

app.post("/api/email", (req,res) => {

    const email = req.body.email;

    const request = mailjet
    .post("send", {'version': 'v3.1'})
    .request({
      "Messages":[
        {
          "From": {
            "Email": "rakshithapatel0807@gmail.com",
            "Name": "Rakshitha & Sindhur"
          },
          "To": [
            {
              "Email": email,
              "Name": "User"
            }
          ],
          "Subject": "Greetings from StealTeal.",
          "TextPart": "You have subscribed to our NewsLetter. Get updates on new releases, latest trends and many more..",
          "HTMLPart": "<h3>Dear User, welcome to <a href=''>StealTeal</a>!</h3><br />May the delivery force be with you!",
          "CustomID": "AppGettingStartedTest"
        }
      ]
    })
    request
      .then((result) => {
        console.log(result.body);
        res.status(204).end()
      })
      .catch((err) => {
        console.log(err)
      })
});

app.get("/api/tryon", async (request, response) => {

    function getAuthenticationHeader(json = false) {
        var pbkdf2 = require('pbkdf2')
        let time = parseInt(Date.now() / 1000);
        var derivedKey = pbkdf2.pbkdf2Sync(process.env.SECRET_KEY, time.toString(), 128, 32, 'sha256');
        derivedKey = derivedKey.toString('hex');
        if (json) {
            return new Headers({
                "public_key": process.env.PUBLIC_KEY,
                "one_time_code": derivedKey,
                "timestamp": time,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            })
        } else {
            return new Headers({
                "public_key": process.env.PUBLIC_KEY,
                "one_time_code": derivedKey,
                "timestamp": time,
            })
        }
    }

    model_id = "1697455153"
    const data = JSON.stringify({
        "garments": {
            "tops":"ea5b690653ec2ecaf15cba2a84bc899d_k74GIqQSCJse",
            "bottoms": "ea5b690653ec2ecaf15cba2a84bc899d_LoItYoKztjWy"
        },
        "model_id": model_id,
    });

    const responseData = await fetch('https://api.revery.ai/console/v1/request_tryon', {
            method: 'POST',
            headers: getAuthenticationHeader(json = true),
            body: data
        }
    )
    
    const tryOnData = await responseData.json();

    response.json(tryOnData);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`)
});
