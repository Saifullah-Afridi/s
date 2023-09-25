import {
  Avatar,
  Box,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Wrap,
  Badge,
} from "@chakra-ui/react";
import { FaRegMoon, FaSearch, FaRegBell } from "react-icons/fa";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquare } from "react-icons/bi";

const Navigation = () => {
  return (
    <HStack px="1rem" mt="2rem" justify="space-between" align-item="center">
      <InputGroup w="30%">
        <Input
          placeholder="Search"
          w="100%"
          px="10px"
          border="solid"
          borderWidth="1px"
          borderColor="gray"
          borderRadius="5px"
        />
        <InputRightElement p="5px">
          <Icon as={FaSearch} />
        </InputRightElement>
      </InputGroup>
      <HStack gap="20px" fontSize="18px">
        <Icon as={FaRegMoon} cursor="pointer" />
        <Box position="relative">
          <Icon as={FaRegBell} cursor="pointer" />
          <Badge
            color="white"
            position="absolute"
            top="-6px"
            right="-6px"
            fontSize="12px"
            backgroundColor="red"
            borderRadius="500px"
            px="5px"
          >
            2
          </Badge>
        </Box>
        <Box position="relative">
          <Icon as={BiMessageSquare} cursor="pointer" />
          <Badge
            color="white"
            position="absolute"
            top="-6px"
            right="-6px"
            fontSize="12px"
            backgroundColor="red"
            borderRadius="500px"
            px="5px"
          >
            2
          </Badge>
        </Box>
        <Icon as={AiOutlineUnorderedList} cursor="pointer" />

        <Avatar
          backgroundColor="blue.200"
          icon={<AiOutlineUser fontSize="1.5rem" />}
        />
      </HStack>
    </HStack>
  );
};

export default Navigation;
