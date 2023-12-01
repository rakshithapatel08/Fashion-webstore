import axios from "axios";

const tryOn = (id,gender) => {
  axios
    .get(`http://localhost:3001/api/tryon?tops=${id}&&gender=${gender}`)
    .then((result) => {
      console.log(result)
      return result.data;
    })
    .catch((error) => console.log(error));
};

export default tryOn;