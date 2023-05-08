import { useContext, useEffect, useState } from "react";
import { UserContext } from "../hooks/userContext";
import { useNavigate } from "react-router-dom";
import { Box, Text, Flex, Image, Center, Button } from "@chakra-ui/react";
import Messages from "./replyDrawer";
import Contacts from "./contacts";

const ChatRoom = () => {
  const { userMessage, SocketState, SocketDispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const { handleLogOut } = useContext(UserContext);
  // useEffect(() => {
  //   const checkToken = localStorage.getItem("token");
  //   if (!checkToken) {
  //     navigate("/");
  //   }
  // });
  return (
    <Box mr={{ md: "8px", base: "none" }} w="100%">
      <Flex>
        <Box
          w={{ md: "400px", base: "100%" }}
          p="15px"
          bg="#F2F2F2"
          h="100vh"
          mr={{ md: "4", base: "none" }}
        >
          <Contacts />
        </Box>{" "}
        <Messages
          isOpen={false}
          onClose={function (): void {
            throw new Error("Function not implemented.");
          }}
          onOpen={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Flex>
    </Box>
  );
};

export default ChatRoom;
