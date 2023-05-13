import React from "react";
import {
  Box,
  Text,
  Flex,
  Center,
  useDisclosure,
  WrapItem,
  Wrap,
  Avatar,
} from "@chakra-ui/react";
import ChatDrawer from "./ChatDrawer";

const Chatroom = () => {
  const {
    isOpen: isOpenReply,
    onOpen: onOpenReply,
    onClose: onCloseReply,
  } = useDisclosure();
  return (
    <Box bg="#D8EFFA" w="30%" h="100vh" p="15px">
      <Text>Recent Conversation</Text>
      <Flex mt="8" onClick={onOpenReply} cursor={"pointer"}>
        <Wrap mr="3">
          <WrapItem>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          </WrapItem>
        </Wrap>
        <Flex flexDirection={"column"}>
          <Text fontWeight={"bold"}>Admin</Text>
          <Text color={"green"} fontSize={"10px"}>
            Online
          </Text>
        </Flex>
      </Flex>
      <ChatDrawer
        isOpen={isOpenReply}
        onOpen={onOpenReply}
        onClose={onCloseReply}
      />
    </Box>
  );
};

export default Chatroom;
