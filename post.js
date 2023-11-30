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
        gender: "male",
        category: "tops",
        garment_img_url: "https://media.revery.ai/revery_client_images/symbol_179805/in_origin.png",
        name:"xxxxx",
        price:39,
        desc:"Elevate your winter wardrobe with our classic crew neck sweater. Crafted from soft and warm knit fabric, this timeless piece offers both comfort and style. The versatile design makes it perfect for layering or wearing on its own. The ribbed cuffs and hem add a touch of sophistication to this essential cold-weather staple."
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



