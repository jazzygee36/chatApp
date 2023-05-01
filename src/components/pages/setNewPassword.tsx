import React, { useContext } from "react";
import { Input } from "../common/input";
import { Box, Text, Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SetnewPasswordSchema } from "../services/inputSchema/inputValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../hooks/userContext";

type resetPwdProps = {
  password: string;
  confirmPassword: string;
};

const SetNewPwd = () => {
  const { handleResetPwd } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resetPwdProps>({
    resolver: zodResolver(SetnewPasswordSchema),
  });
  const navigate = useNavigate();
  return (
    <>
      <Center mt={{ md: "12%", base: "50%" }} mr="40px" ml="40px">
        <Box>
          {" "}
          <Text fontSize={"30px"} fontWeight={"700"}>
            Set new assword
          </Text>
          <Text>
            Your new password must be diffrent to previously used passwords
          </Text>
          <form onSubmit={handleSubmit(handleResetPwd)}>
            <Text mt="12px"> Password</Text>

            <Input
              placeholder="Enter your password"
              mt="8px"
              type="password"
              {...register("password")}
            />
            <Text color="red">{errors?.password?.message}</Text>
            <Text mt="15px">Confirm Password</Text>

            <Input
              placeholder="Confirm your password"
              mt="8px"
              type="password"
              {...register("confirmPassword")}
            />
            <Text color="red">{errors?.confirmPassword?.message}</Text>
            <Button
              w="100%"
              bg="#0089ED"
              color="#ffffff"
              h="50px"
              outline="none"
              border="none"
              boxShadow="0px 4px 19px rgba(119, 147, 65, 0.3)"
              borderRadius="10px"
              mt="12px"
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

export default SetNewPwd;
