import { useEffect, useState } from "react";
import { Image, Box, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import TryOnCard from "../components/TryOnCard";

const TryOnPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3001/api/tryon")
            .then(result => {
                console.log(result.data)
                setData(result.data)
            })
            .catch(error => console.log(error));
    }, [])

    if (!data) {
        return "Loading..."
    }

    return (

        <Grid
            gridTemplateRows="repeat(1fr, 5)"
            gridTemplateColumns={'1fr 1fr'}
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem rowSpan={4}>
                <Image src={`https://media.revery.ai/generated_model_image/${data?.model_metadata.model_file}.png`} alt="try-on-model-image" />
            </GridItem>
            <GridItem bg='orange.300'>
                Model Icons
            </GridItem>
            <GridItem rowSpan={4} bg='green.300'>
                <Box width="50%">
                    {
                        [].map(tryOnImage => <TryOnCard key={tryOnImage._id}/>)
                    }
                </Box> 
            </GridItem>
            <GridItem bg='blue.300'>
                Dress Icons
            </GridItem>
        </Grid>
    )
}

export default TryOnPage;