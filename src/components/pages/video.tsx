import { Box, Flex, Center, Button } from "@chakra-ui/react";

const Video = () => {
  return (
    <Center mt="50px">
      <Flex flexDirection={"column"}>
        <Box h="400px" w="700px" bg="gray" borderRadius="8px" mb="30px"></Box>
        <Button fontSize={"20px"} _hover={{ bg: "#2186EB", color: "#ffffff" }}>
          Join Now
        </Button>
      </Flex>
    </Center>
  );
};

export default Video;
