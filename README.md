# Fashion-webstore

Introducing StealTeal, Full Stack Responsive Web Application created using `ReactJS` and `Chakra UI` for the frontend and `Node & Express` for the server side coding along with `MongoDB` database to store the data of garments and users, deployed on Render.

## Stand Out Feature 

### Virtual TryOn

What makes our web app so special? ( Caution: Applicable only upto 100 Try On Calls - Limited due to free tier API subscription )

* It allows the users to virtually try on a set of tees on respective male or female models to get a fair idea of the looks and feel the clothes they are about to buy.
* This feature is achieved all thanks to `Revery API`.
* The system we designed allows a backend admin to post the garments in Revery server and the `garment_id` generated is stored in Mongodb database for tryon and rendering purposes.

### Stripe Integration For Payments

* Users can easily add to cart their favourite outfits and can make the payment using credit/debit card.
* Achieved using `Stripe` Integration checkout mechanism.

### NewsLetter Subcription using Email

* Users can subscribe to the NewsLetter allowing them to get information about the future updates.
* Achieved using the `Mailjet` server side API.
* The user email is stored in the database for further communication.

### Completely Mobile Responsive

* Can Be used in mobile and tablet devices.
* Major credit for this feature goes to the `useMediaQuery` Hook in Chakra UI

# Major Dependencies used

* mongoose ---> as a mongodb client
* react-hot-toast ---> for notifications
* @chakra-ui/react ---> for styling using chakra components
* canvas-confetti ---> for party poppers
* react-slick ---> for carousel
* react-router-dom ---> navigation
* axios ---> for data fetching
* cors ---> for cross origin resource sharing
* stripe ---> for payment gateway
* node-mailjet ---> for email services

# Technologies used

* ReactJs
* Chakra UI
* ReveryAI API
* NodeJS
* Express
* MongoDB
* Render
* Git/GitHub

# Deployed on render

https://stealteal.onrender.com/ 
The insights of the web-app can also be seen on - https://clipchamp.com/watch/eQbqE5KhWzC , a small video clip showcasing the features of StealTeal.

# Database Model created on MongoDb

![Screenshot 2023-12-04 135546](https://github.com/rakshithapatel08/Fashion-webstore/assets/109893073/253b1cf9-dab9-46d3-a031-688cd2fa836e) --> garments database
![Screenshot 2023-12-04 135719](https://github.com/rakshithapatel08/Fashion-webstore/assets/109893073/46696c55-e199-46fc-9496-fb0392ec3957) --> users database
