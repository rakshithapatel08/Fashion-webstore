import { Menu, MenuButton, MenuItem, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, InfoIcon } from "@chakra-ui/icons";
import { MdHome, MdOutlineShoppingCart, MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCustomContext } from "../context/appContext";

const MenuComponent = () => {

  const { setShowCart } = useCustomContext();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <Link to="/"><MenuItem icon={<MdHome />} >
          Home
        </MenuItem>
        </Link>
        <Link to="/#about"><MenuItem icon={<InfoIcon />} >
          About
        </MenuItem>
        </Link>
        <Link to="/products"><MenuItem icon={<MdOutlineShoppingBag/>}>
          Collections
        </MenuItem>
        </Link>
        <MenuItem icon={<MdOutlineShoppingCart />} onClick={() => setShowCart(true)}>
          Cart
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuComponent;
