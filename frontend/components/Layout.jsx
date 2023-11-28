import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <Box bg="gray.800" pt="6.15rem" mWid="100vh">
      <Navbar/>
        {children}
      <Footer/>
    </Box>
  )
}

export default Layout;