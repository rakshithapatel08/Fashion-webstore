function getAuthenticationHeader(json=false) {
    var pbkdf2 = require('pbkdf2')
    let time =  parseInt(Date.now()/1000);
    var derivedKey = pbkdf2.pbkdf2Sync(process.env.SECRET_KEY, time.toString(), 128, 32, 'sha256');
    derivedKey = derivedKey.toString('hex');
    if (json) {
        return  new Headers({
            "public_key": process.env.PUBLIC_KEY,
            "one_time_code": derivedKey,
            "timestamp": time,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        })
    } else {
        return  new Headers({
            "public_key": process.env.PUBLIC_KEY,
            "one_time_code": derivedKey,
            "timestamp": time,
        })
    }
}

const data = JSON.stringify({
    "category": "tops",
    "gender": "female",
    "garment_img_url": "https://revery-integration-tools.s3.us-east-2.amazonaws.com/API_website/tops.jpeg"
});


async function fetchApi() {
    const response = await fetch('https://api.revery.ai/console/v1/process_new_garment', {
        method: 'POST',
        headers: getAuthenticationHeader(json=true),
        body: data
      }
    )

    const result = response.json();

    return result;
}

module.exports = fetchApi;