import { Menu, MenuButton, MenuItem, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, InfoIcon } from "@chakra-ui/icons";
import { MdHome, MdOutlineShoppingCart, MdOutlineShoppingBag } from "react-icons/md";

const MenuComponent = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<MdHome />} >
          Home
        </MenuItem>
        <MenuItem icon={<InfoIcon />} >
          About
        </MenuItem>
        <MenuItem icon={<MdOutlineShoppingBag/>}>
          Collections
        </MenuItem>
        <MenuItem icon={<MdOutlineShoppingCart />}>
          Add To Cart
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuComponent;
