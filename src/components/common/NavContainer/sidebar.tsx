import { useContext, useState } from "react";
import { Text, Flex, Image } from "@chakra-ui/react";
import Message from "../../../assets/MessagesIcon.svg";
import Contact from "../../../assets/ContactIcon.svg";
import Notes from "../../../assets/NoteIcon.svg";
import { UserContext } from "../../hooks/userContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { handleLogOut } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Flex
      // flexDirection={"column"}
      w={{ md: "240px", base: "70px" }}
      p="15px"
      h="100vh"
      mr="2"
      display={{ md: "block", base: "none" }}
    >
      <Text
        mb="130px"
        cursor={"pointer"}
        onClick={handleLogOut}
        fontWeight={"bold"}
        _hover={{
          color: "#2186EB",
        }}
      >
        Logout
      </Text>
      <Flex
        alignItems={"center"}
        mb="20px"
        bg="#2186EB"
        h="55px"
        borderRadius={"8px"}
        cursor={"pointer"}
        _hover={{
          bg: "green",
        }}
        onClick={() => navigate("/chatroom")}
      >
        <Image src={Message} alt="message" w="25px" mr="5px" ml="10px" />
        <Text color="#fff" display={{ md: "block", base: "none" }}>
          Messages
        </Text>
      </Flex>
      {/* <Flex
        alignItems={"center"}
        mb="20px"
        h="55px"
        borderRadius={"8px"}
        cursor={"pointer"}
        _hover={{
          bg: "#2186EB",
          color: "#ffffff",
        }}
        onClick={() => navigate("/video")}
      >
        <Image src={Video} alt="contact" w="25px" mr="15px" ml="10px" />
        <Text display={{ md: "block", base: "none" }}>Video call</Text>
      </Flex> */}

      <Flex
        alignItems={"center"}
        mb="20px"
        h="55px"
        borderRadius={"8px"}
        cursor={"pointer"}
        _hover={{
          bg: "#2186EB",
          color: "#ffffff",
        }}
        onClick={() => navigate("/contacts")}
      >
        <Image src={Contact} alt="contact" w="25px" mr="15px" ml="10px" />
        <Text display={{ md: "block", base: "none" }}>Contacts</Text>
      </Flex>
      <Flex
        alignItems={"center"}
        mb="20px"
        h="55px"
        borderRadius={"8px"}
        cursor={"pointer"}
        _hover={{
          bg: "#2186EB",
          color: "#ffffff",
        }}
      >
        <Image src={Notes} alt="notes" w="25px" mr="15px" ml="10px" />
        <Text display={{ md: "block", base: "none" }}>Notes</Text>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
