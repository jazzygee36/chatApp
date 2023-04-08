import React from "react";
import { Input, Flex } from "@chakra-ui/react";

interface inputProps {
  placeholder?: string;
  type?: string;
}

export const InputField: React.FC<inputProps> = ({ placeholder, type }) => (
  <Input
    placeholder={placeholder}
    type={type}
    w="95%"
    h="50px"
    border="1px solid #ADADAD"
    borderRadius="9px"
    outline="none"
    mt="15px"
    pl="20px"
  />
);

export const InputGroup: React.FC<inputProps> = ({ placeholder, type }) => (
  <Flex>
    <Input
      placeholder="User name"
      type="text"
      w="95%"
      h="50px"
      border="1px solid #ADADAD"
      borderRadius="9px"
      outline="none"
      mt="15px"
      pl="20px"
      mr="5px"
    />
    <Input
      placeholder="User Number"
      type="number"
      w="95%"
      h="50px"
      border="1px solid #ADADAD"
      borderRadius="9px"
      outline="none"
      mt="15px"
      pl="20px"
      mb="13px"
    />
  </Flex>
);
export { Input };
