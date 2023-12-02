import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useCustomContext } from "../context/appContext";
import Details from "../components/Details.jsx";
import axios from "axios";

const DetailsPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { setQty } = useCustomContext();

  useEffect(()=>{
    axios.get(`/api/products/${id}`)
    .then(result => {
      setProduct(result.data);
      setQty(1);
    })
    .catch(error => console.log(error))
  }, [id]);

  return (
    <>
      <Details product={product}/>
    </>
  )
}

export default DetailsPage