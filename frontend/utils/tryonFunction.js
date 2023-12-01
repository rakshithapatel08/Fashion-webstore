import axios from "axios";

const tryOn = (id) => {
  axios
    .get(`http://localhost:3001/api/tryon?tops=${id}`)
    .then((result) => {
      return result.data;
    })
    .catch((error) => console.log(error));
};

export default tryOn;