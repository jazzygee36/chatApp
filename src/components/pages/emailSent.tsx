import { Box, Text, Flex, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const EmailLink = () => {
  const navigate = useNavigate();
  return (
    <>
      <Center mt={{ md: "12%", base: "50%" }}>
        <Box>
          {" "}
          <Text fontSize={"30px"} fontWeight={"700"}>
            Check your email
          </Text>
          <Text>We've sent a notification to you email.</Text>
          <Flex>
            <Text mt="12px" mr="10px">
              {" "}
              You can also
            </Text>
            <Text
              mt="12px"
              mr="10px"
              cursor={"pointer"}
              color="blue"
              onClick={() => navigate("/setnew-password")}
            >
              click here...
            </Text>
            <Text mt="12px" mr="10px">
              {" "}
              to continue
            </Text>
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default EmailLink;
