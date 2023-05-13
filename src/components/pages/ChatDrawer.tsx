import React, { useEffect, useState } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Wrap,
  WrapItem,
  Avatar,
  Box,
  Text,
  Flex,
  Button,
  Image,
  Textarea,
} from "@chakra-ui/react";

import Attachment from "../../assets/attachmentIcon.svg";
import Emoji from "../../assets/emojiIcon.svg";
import {
  MainContainer,
  ChatContainer,
  Message,
  MessageList,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import Admin from "./Admin";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}
let nextId = 0;
type Array = {
  id: number;
  name: string;
};
const reply = [
  {
    first: "How can we help you?",

    second: "How send?",
  },
];

const ChatDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Array[]>([]);

  let nextId = 0;

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt="30px">
            <Flex justifyContent="space-between">
              <Text>History</Text>
              {messages.length > 0 && (
                <Button
                  onClick={() => {
                    setMessages([]);
                    setName("");
                  }}
                  color={"red"}
                >
                  Delete history
                </Button>
              )}
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Box bg="#D8EFFA" p="4" mb="3">
              <Text fontWeight="bold">Admin</Text>
              <Text>Welcome to Cohnet, can we know your names please?</Text>
            </Box>

            <Flex flexDirection="column">
              {messages.map((user) => (
                <>
                  <Box bg="#9ADBFA" p="4" mb="3" w="100%" textAlign="right">
                    <Text key={user.id}>{user.name}</Text>
                  </Box>
                </>
              ))}

              {typing
                ? "Admin typing..."
                : messages.length === 1 &&
                  reply.map((user) => (
                    <Box bg="#D8EFFA" p="4" mb="3">
                      <Text fontWeight="bold">Admin</Text>
                      <Text>{user.first}</Text>
                    </Box>
                  ))}
              {messages.length === 2 &&
                reply.map((user) => (
                  <Box bg="#D8EFFA" p="4" mb="3">
                    <Text fontWeight="bold">Admin</Text>
                    <Text>{user.second}</Text>
                  </Box>
                ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Box
              w="100%"
              borderStyle="solid"
              borderWidth="1px"
              borderRadius="lg"
              px="10px"
              py="10px"
            >
              <Flex>
                <Textarea
                  variant="unstyled"
                  placeholder="Type a message..."
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                />
                <Flex flexDirection={"column"} alignItems={"center"}>
                  <Button
                    bgColor="#0557D1"
                    borderRadius="8px"
                    color="#FFFFFF"
                    fontSize="12px"
                    fontWeight="400px"
                    height="31px"
                    width="62px"
                    ml="auto"
                    onClick={() => {
                      setMessages([...messages, { id: nextId++, name: name }]);
                      setName("");
                      setTyping(true);
                      setTimeout(() => {
                        setTyping(false);
                      }, 3000);
                    }}
                  >
                    Send
                  </Button>

                  <Image src={Attachment} w="15px" mt="3" cursor={"pointer"} />
                  <Image src={Emoji} w="15px" mt="3" cursor={"pointer"} />
                </Flex>
              </Flex>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ChatDrawer;
