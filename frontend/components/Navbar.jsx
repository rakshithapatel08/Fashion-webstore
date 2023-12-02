import {
  Flex,
  UnorderedList,
  ListItem,
  Text,
  Box,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import { MdShoppingCart } from "react-icons/md";
import Cart from "./Cart";
import { useCustomContext } from "../context/appContext";
import { useEffect } from "react";

const Navbar = () => {
  const [isMobileTab] = useMediaQuery("(max-width: 700px)");
  const { showCart, setShowCart, totalQty, cartData, setCartData, setTotalQty, setTotalPrice } = useCustomContext();

  useEffect(() => {
    
    async function localRetrieve() {
      if(cartData.length === 0 && localStorage) {
        const retrievedCart = await JSON.parse(localStorage.getItem("cart"))
        setCartData(retrievedCart || []);

        const retrievedQty = retrievedCart?.reduce((sum, cartItem) => {
          return sum + cartItem.quantity 
        }, 0);
        setTotalQty(retrievedQty || 0);

        const retrievedPrice = retrievedCart?.reduce((sum, cartItem) => {
          return sum + cartItem.price * cartItem.quantity
        }, 0);
        setTotalPrice(retrievedPrice || 0);
      }
    }

    localRetrieve();

  }, []);

  return (
    <Box>
      <Flex
        flexWrap="wrap"
        borderRadius="5px"
        py={2}
        px={6}
        sx={{
          background: "linear-gradient(to right bottom, #1A202C, #4A5568)",
        }}
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top={8}
        w="95%"
        left="50%"
        transform="translate(-50%)"
        zIndex="100"
      >
        <Link href="/">
          <Text fontSize="3xl" color="whiteAlpha.800" fontWeight="bold">
            STEAL
            <Box as="span" color="teal.400">
              TEAL
            </Box>
          </Text>
        </Link>
        {isMobileTab ? (
          <MenuComponent />
        ) : (
          <UnorderedList
            display="flex"
            gap={10}
            fontSize="lg"
            color="whiteAlpha.800"
            justifyContent="space-between"
            alignItems="center"
            listStyleType="none"
          >
            <Link to="/">
              <ListItem _hover={{ color: "teal.400" }}>Home</ListItem>
            </Link>
            <a href="/#about">
              <ListItem _hover={{ color: "teal.400" }}>About</ListItem>
            </a>
            <Link to="/products">
              <ListItem _hover={{ color: "teal.400" }}>Collections</ListItem>
            </Link>
            <Flex fontSize="2xl" alignItems="center" color="teal.500" position="relative"> 
              <Icon as={MdShoppingCart} cursor="pointer" onClick={() => setShowCart(true)}/>
              <Flex color="whiteAlpha.900" bg="gray.800" borderRadius="50%" width={5} height={5} fontSize="xs" justifyContent="center" alignItems="center" position="absolute" top={-2} right={-2}>{totalQty}</Flex>
            </Flex>
          </UnorderedList>
        )}
      </Flex>
      {showCart && <Cart/>}
     
      <Outlet />
    </Box>
  );
};

export default Navbar;
