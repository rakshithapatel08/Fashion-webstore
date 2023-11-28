import { Flex, Image } from "@chakra-ui/react";

const CarouselCard = () => {
  return (
    <Flex w={380} h={400} bg="white" justifyContent="center" alignItems="center">
      <Image src="https://media.revery.ai/revery_client_images/symbol_181957/in_origin.png" alt="carousel-image" h={380} py={10}/>
    </Flex>
  )
}

export default CarouselCard;