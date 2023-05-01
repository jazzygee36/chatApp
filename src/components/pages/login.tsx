import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import Saly from "../../assets/Saly.svg";
import Facebook from "../../assets/Facebook.svg";
import Apple from "../../assets/apple.svg";
import { Input } from "../common/input";
import Google from "../../assets/google.svg";
import LoginAs from "../common/loginAs";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginInput } from "../services/inputSchema/inputValidation";

import { useContext, useState } from "react";
import { UserContext } from "../hooks/userContext";
import IsLoading from "../common/isLoading";

type loginProps = {
  email: string;
  password: string;
};
const Login = () => {
  const { handleLogin, isLoading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginProps>({
    resolver: zodResolver(loginInput),
  });

  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
        <>
          <Box
            bg="#0089ED"
            h={{ base: "100%", md: "350px" }}
            pt={{ base: "20px", md: "50px" }}
            pl={{ base: "none", md: "50px" }}
            pr={{ base: "none", md: "50px" }}
            w="100%"
          >
            <Text
              color="#ffffff"
              fontWeight="bold"
              pl={{ base: "20px", md: "block" }}
              mb={{ base: "30px" }}
            >
              {" "}
              ChatApp
            </Text>
            <Flex justifyContent="space-around">
              <Box display={{ base: "none", md: "block" }}>
                <Text
                  color="#ffffff"
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight="600"
                  fontSize="34px"
                >
                  Login to Connect
                </Text>
                <Text
                  color="#ffffff"
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight="400"
                  fontSize="24px"
                >
                  with different People in the World
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

              <Box
                bg="#ffffff"
                w={{ base: "95%", md: "35%" }}
                h={{ base: "100%", md: "100%" }}
                mb="80px"
                boxShadow="0px 4px 35px rgba(0, 0, 0, 0.08)"
                borderRadius="40px"
                pt="44px"
                pl={{ base: "15px", md: "44px" }}
                pr={{ base: "15px", md: "44px" }}
                pb="44px"
              >
                <Flex justifyContent="space-between">
                  <Box
                    fontFamily="Poppins"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="21px"
                  >
                    Welcome to ChatAPP
                  </Box>
                  <Box>
                    <Text
                      color="#8D8D8D"
                      fontFamily="Poppins"
                      fontStyle="normal"
                      fontWeight="400"
                      fontSize="13px"
                    >
                      No Acccout?
                    </Text>
                    <Text
                      color="#0089ED"
                      fontStyle="normal"
                      fontWeight="400"
                      fontSize="13px"
                      cursor="pointer"
                      onClick={() => {
                        navigate(`/signup`);
                      }}
                    >
                      Sign up
                    </Text>
                  </Box>
                </Flex>
                <Text
                  fontFamily="Poppins"
                  fontStyle="normal"
                  fontWeight="500"
                  fontSize="55px"
                >
                  Login
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
                <form onSubmit={handleSubmit(handleLogin)}>
                  <Text
                    fontFamily="Poppins"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="16px"
                  >
                    Enter Email
                  </Text>
                  <Input
                    placeholder="email"
                    type="email"
                    {...register("email")}
                  />
                  <Text color="red">{errors?.email?.message}</Text>
                  <Text
                    fontFamily="Poppins"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="16px"
                    mt="36px"
                  >
                    Enter your Password
                  </Text>
                  <Input
                    placeholder="Password"
                    type="password"
                    {...register("password")}
                  />
                  <Text color="red">{errors?.password?.message}</Text>

                  <Text
                    color="#4285F4"
                    fontFamily="Poppins"
                    fontStyle=" normal"
                    fontWeight="400"
                    fontSize="13px"
                    mt="12px"
                    textAlign="right"
                    cursor="pointer"
                    onClick={() => navigate("forget-password")}
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
                    _hover={{
                      bg: "blue",
                    }}
                    type="submit"
                  >
                    Login
                  </Button>
                </form>
              </Box>
            </Flex>
          </Box>
          <LoginAs />
        </>
      )}
    </>
  );
};
export default Login;
