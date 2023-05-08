import React, { useContext } from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  useDisclosure,
  Center,
  Button,
  Avatar,
} from "@chakra-ui/react";
import ReplyDrawer from "./replyDrawer";
import { UserContext } from "../hooks/userContext";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const { handleAddContacts, userMessage } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    isOpen: isOpenReply,
    onOpen: onOpenReply,
    onClose: onCloseReply,
  } = useDisclosure();
  return (
    <Box>
      <Text color="#627D98" fontWeight="600">
        {" "}
        Recent Conversation
      </Text>
      {userMessage && (
        <Text onClick={onOpenReply}>
          <Flex mb="37px" mt="40px" alignItems={"center"}>
            <Avatar
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              mr="8px"
            />

            <Flex flexDirection={"column"}>
              <Text fontSize="18px" fontWeight={"bold"} cursor="pointer">
                Admin
              </Text>
              <Text
                fontSize="10px"
                fontWeight={"bold"}
                color="green"
                cursor="poniter"
              >
                Online
              </Text>
            </Flex>
          </Flex>
        </Text>
      )}
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        position={"relative"}
        mt="200px"
      >
        <Text>You do not have contacts yet</Text>
        <Text
          color={"#2186EB"}
          cursor="pointer"
          _hover={{ textUnderlinePosition: "bottom" }}
          onClick={() => navigate("/contacts")}
        >
          Add contact
        </Text>
      </Flex>
      <ReplyDrawer
        isOpen={isOpenReply}
        onOpen={onOpenReply}
        onClose={onCloseReply}
      />
    </Box>
  );
};

export default Contacts;
