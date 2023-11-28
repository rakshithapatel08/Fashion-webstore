import { useEffect, useState } from "react";
import axios from "axios";

const TryOnPage = () => {
    const [ data, setData ] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/api/tryon")
        .then(result => {
            console.log(result.data)
            setData(result.data)
        })
        .catch(error => console.log(error));
    },[])

    if(!data) {
        return "Loading..."
    }

    return (
        <div>
            <img src={`https://media.revery.ai/generated_model_image/${data?.model_metadata.model_file}.png`} alt="try-on-model-image"/>        
        </div>
    )
}

export default TryOnPage