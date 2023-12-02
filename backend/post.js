// post garments backend admin panel

/*  
    Why did we use mngodb database to post and fetch from API?
    ---> to use modelling filter based on category and gender

    | architecture |

    /models/database.js ---> Garment model

    post.js ---> save data fetched from api in mongodb database

    fetchApi.js ---> fetching data from api

    {
        gender: ,
        category: ,
        garment_id: ,
        success: ,
    }
*/

// node post.js
const {fetchApi} = require("./reveryapi_post");


const Garment = require("./models/database");

fetchApi()
.then((result) => {
    const garmentObject = {
        ...result,
        gender: "female",
        category: "bottoms",
        garment_img_url: "https://media.revery.ai/revery_client_images/symbol_188870/in_origin.png",
        name:"Flowy Pink Palazzo",
        price:32,
        desc:"Introducing our chic and comfortable palazzo pants — the epitome of effortless style and versatility. Crafted from a lightweight and breathable fabric, these palazzo pants are designed to make a statement while keeping you cool and comfortable throughout the day.",
    }

    const clothes = new Garment(garmentObject);

    clothes.save()
    .then(() => {
        console.log("Added Successfully");
    })
    .catch((error) => {
        console.log(error);
    })
})
.catch(error => {
    console.log(error);
})



