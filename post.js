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
        category: "tops",
        garment_img_url: "https://media.revery.ai/revery_client_images/symbol_179805/in_origin.png",
        name:"test2",
        price:27,
        desc:"Unleash your inner athlete with our performance tee. Designed for both comfort and functionality, this hoodie features moisture-wicking fabric to keep you cool and dry during workouts. The ergonomic design and stretchy material provide freedom of movement, making it an ideal choice for your active lifestyle. Upgrade your fitness gear with this high-performance hoodie"
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



