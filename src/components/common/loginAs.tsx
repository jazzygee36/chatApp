import { Box, Text, Wrap, WrapItem, Avatar } from "@chakra-ui/react";

const LoginAs = () => {
  return (
    <Box mt="20px" ml="50px" display={{ base: "none", md: "block" }}>
      <Text
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="400"
        fontSize="16px"
        mb="26px"
      >
        Login as
      </Text>
      <Box
        w="145px"
        h="164px"
        bg="#EFF8FF"
        textAlign="center"
        borderRadius="8px"
        cursor="pointer"
      >
        <Wrap
          display="flex"
          justifyContent="center"
          alignItems="center"
          pt="20px"
        >
          <WrapItem>
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
              w="80px"
              h="80px"
              borderRadius="50px"
            />
          </WrapItem>
        </Wrap>
        <Text
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="500"
          fontSize="15px"
          mt="10px"
        >
          John Peter
        </Text>
        <Text
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="400"
          fontSize="13px"
          color="#ADADAD"
        >
          Active one day ago
        </Text>
      </Box>
    </Box>
  );
};
export default LoginAs;
