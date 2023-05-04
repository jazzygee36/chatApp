import { useContext, useState } from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Video from "../../../assets/VideoIcon.svg";
import Message from "../../../assets/MessagesIcon.svg";
import Contact from "../../../assets/ContactIcon.svg";
import Notes from "../../../assets/NoteIcon.svg";
import { UserContext } from "../../hooks/userContext";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [messages, setMessages] = useState(false);
  const { handleLogOut } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Box w="240px" p="15px" bg="#F2F2F2" h="100vh" mr="5">
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
        <Image src={Message} alt="message" w="25px" mr="15px" ml="10px" />
        <Text color="#fff">Messages</Text>
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
        onClick={() => navigate("/video")}
      >
        <Image src={Video} alt="vd" w="25px" mr="15px" ml="10px" />
        <Text>Video Call</Text>
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
        <Image src={Contact} alt="contact" w="25px" mr="15px" ml="10px" />
        <Text>Contacts</Text>
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
        <Text>Notes</Text>
      </Flex>
    </Box>
  );
};

export default Sidebar;
