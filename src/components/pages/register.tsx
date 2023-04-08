import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import Saly from "../../assets/Saly.svg";
import Facebook from "../../assets/Facebook.svg";
import Apple from "../../assets/apple.svg";
import Input from "../common/input";
import Google from "../../assets/google.svg";
const Register = () => {
  return (
    <Box bg="#0089ED" h="350px" pt="50px" pl="50px" pr="50px">
      <Text color="#ffffff" fontWeight="bold">
        {" "}
        ChatApp
      </Text>
      <Flex
        justifyContent="space-around"
        pl="40px"
        pr="40px"
        alignItems="center"
      >
        <Flex alignItems="center" position="relative" top="-210px" w="100%">
          <Box>
            <Text
              color="#ffffff"
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="600"
              fontSize="34px"
            >
              Sign in to
            </Text>
            <Text
              color="#ffffff"
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="400"
              fontSize="24px"
            >
              Lorem Ipsum is simply
            </Text>
            <Text
              color="#ffffff"
              fontFamily="Poppins"
              fontStyle="normal"
              fontWeight="300"
              fontSize="13px"
              mt="22px"
            >
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry. Lorem Ipsum <br />
              has been the industry's standard dummy text
              <br />
              ever since the 1500s,
            </Text>
          </Box>
          <Box>
            <Image src={Saly} />
          </Box>
        </Flex>

        <Box
          bg="#ffffff"
          w="50%"
          h="100%"
          mb="80px"
          boxShadow="0px 4px 35px rgba(0, 0, 0, 0.08)"
          borderRadius="40px"
          pt="44px"
          pl="44px"
          pr="44px"
          pb="44px"
        >
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="400"
            fontSize="21px"
          >
            Welcome to ChatAPP
          </Text>
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="500"
            fontSize="55px"
          >
            Sign in
          </Text>
          <Flex align="center" mt="43px" mb="52px">
            <Box
              w="200px"
              h="45px"
              background=" #E9F1FF"
              borderRadius="9px"
              textAlign="center"
              color="#4285F4"
              mr="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
            >
              <Flex alignItems="center">
                <Image src={Google} alt="google" mr="8px" />
                <Text> Sign in with Google</Text>
              </Flex>
            </Box>
            <Box
              background=" #F6F6F6"
              borderRadius="9px"
              w="55px"
              h="50px"
              mr="13px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
            >
              <Image src={Facebook} alt="fb" justifyContent="center" />
            </Box>
            <Box
              background=" #F6F6F6"
              borderRadius="9px"
              w="55px"
              h="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
            >
              <Image src={Apple} alt="apple" />
            </Box>
          </Flex>
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="400"
            fontSize="16px"
          >
            Enter your username or email address
          </Text>
          <Input placeholder="Username or email address" />
          <Text
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="400"
            fontSize="16px"
            mt="36px"
          >
            Enter your Password
          </Text>
          <Input placeholder="Password" />
          <Text
            color="#4285F4"
            fontFamily="Poppins"
            fontStyle=" normal"
            fontWeight="400"
            fontSize="13px"
            mt="12px"
            textAlign="right"
            cursor="pointer"
          >
            Forgot Password
          </Text>
          <Button
            w="100%"
            bg="#0089ED"
            color="#ffffff"
            h="50px"
            outline="none"
            border="none"
            boxShadow="0px 4px 19px rgba(119, 147, 65, 0.3)"
            borderRadius="10px"
            mt="44px"
            cursor="pointer"
          >
            Sign in
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
export default Register;
