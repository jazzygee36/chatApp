import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Dashboard from "./sidebar";

const NavbarContainer = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = localStorage.getItem("token");
    if (!checkToken) {
      navigate("/");
    }
  });
  return (
    <Flex flexDirection={{ base: "row" }} h="100vh" bg="#ffffff">
      <Box>
        <Dashboard />
      </Box>

      <Box flex="2" overflow="auto" w="100%" h="100%">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default NavbarContainer;
