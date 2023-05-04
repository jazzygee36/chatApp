import { useContext, useEffect } from "react";
import { UserContext } from "../hooks/userContext";
import { useNavigate } from "react-router-dom";
import { Box, Text, Flex, Image, Center, Button } from "@chakra-ui/react";

const ChatRoom = () => {
  const navigate = useNavigate();

  const { handleLogOut } = useContext(UserContext);
  // useEffect(() => {
  //   const checkToken = localStorage.getItem("token");
  //   if (!checkToken) {
  //     navigate("/");
  //   }
  // });
  return (
    <Center h="100%">
      <Flex flexDirection="column">
        <Text mb="16px" fontWeight="600" fontSize="18px">
          You do not have any message yet.
        </Text>

        <Button colorScheme="blue" onClick={() => navigate("/contacts")}>
          {" "}
          Add Contact
        </Button>
      </Flex>
    </Center>
  );
};

export default ChatRoom;
