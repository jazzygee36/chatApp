import { useContext } from "react";
import { Input } from "../common/input";
import { Box, Text, Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { forgetPwdSchema } from "../services/inputSchema/inputValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../hooks/userContext";

type forgetPwdProps = {
  email: string;
};

const ForgetPassword = () => {
  const { handleforgetPwd } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<forgetPwdProps>({
    resolver: zodResolver(forgetPwdSchema),
  });
  const navigate = useNavigate();
  return (
    <>
      <Center>
        <Box position="relative" mt={{ md: "12%", base: "50%" }}>
          {" "}
          <Text fontSize={"30px"} fontWeight={"700"}>
            Forget Password?
          </Text>
          <Text>No worries, we'll send you reset instruction.</Text>
          <Text mt="12px"> Email</Text>
          <form onSubmit={handleSubmit(handleforgetPwd)}>
            <Input
              placeholder="Enter your email"
              mt="8px"
              type="email"
              {...register("email")}
            />
            <Text color="red">{errors?.email?.message}</Text>
            <Button
              w="100%"
              bg="#0089ED"
              color="#ffffff"
              h="50px"
              outline="none"
              border="none"
              boxShadow="0px 4px 19px rgba(119, 147, 65, 0.3)"
              borderRadius="10px"
              mt="8px"
              cursor="pointer"
              _hover={{
                bg: "blue",
              }}
              type="submit"
            >
              Reset password
            </Button>
          </form>
          <Center mt="15px">
            <Text onClick={() => navigate("/")} cursor={"pointer"}>
              Back to login
            </Text>
          </Center>{" "}
        </Box>
      </Center>
    </>
  );
};

export default ForgetPassword;
