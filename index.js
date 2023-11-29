// server creation
// always transmission via json
// frontend ---> GET request /api/dresses example

const express = require("express");
require("dotenv").config();
const Garment = require("./models/database");
const cors = require("cors");

const app = express(); // returns server object
app.use(cors());

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
