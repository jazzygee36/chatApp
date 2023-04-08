import React from "react";
import { Input } from "@chakra-ui/react";

interface inputProps {
  placeholder?: string;
}

const InputField: React.FC<inputProps> = ({ placeholder }) => (
  <Input
    placeholder={placeholder}
    w="95%"
    h="50px"
    border="1px solid #ADADAD"
    borderRadius="9px"
    outline="none"
    mt="13px"
    pl="20px"
  />
);

export default InputField;
