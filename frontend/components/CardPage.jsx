import { useEffect, useState } from "react"
import axios from "axios"
import CardComponent from "./CardComponent"

const CardPage = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:3001/api/products")
            .then((res) => setData(res.data))
    }, [])

    if(!data){
        return "loading ..."
    }

    return (
        <div>
            {data?.map((product) => <CardComponent product={product} key={product._id}/>)}
        </div>
    )
}

export default CardPage