import React from "react";

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

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const ReplyDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>History</DrawerHeader>
          <DrawerBody>
            <Flex mb="37px">
              <Wrap mr="3">
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </Wrap>
              <Box w="367px" bg="#9ADBFA" h="100%" p="4">
                <Text fontSize="12px" mb="8px">
                  Admin
                </Text>
                <Text fontSize="12px">
                  Hi, You're welcome, what can we do for you today?
                </Text>
              </Box>
            </Flex>
            <Flex>
              <Box w="367px" bg="#D8EFFA" h="100%" p="4" mr="3">
                <Text fontSize="12px" mb="8px">
                  Mesioye Samson
                </Text>
                <Text fontSize="12px">
                  I have been unable to withdraw from plaqad wallet into my
                  account, pls I need this resolved asap.{" "}
                </Text>
              </Box>
              <Wrap>
                <WrapItem>
                  <Avatar
                    name="Kola Tioluwani"
                    src="https://bit.ly/tioluwani-kolawole"
                  />
                </WrapItem>
              </Wrap>
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
                <Textarea variant="unstyled" placeholder="Type a message..." />

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
                  >
                    Send
                  </Button>
                  <Image src={Attachment} mt="4px" />
                  <Image src={Emoji} mt="4px" />
                </Flex>
              </Flex>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ReplyDrawer;
