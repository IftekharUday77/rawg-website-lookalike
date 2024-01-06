import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Image src={logo} boxSize="50px"></Image>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;