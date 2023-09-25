import { HStack, Heading, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { FaUser, FaWallet, FaMoneyCheckAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { ReactElement } from "react";
interface Props {
  type: String;
}
interface Data {
  title: String;
  isMoney: Boolean;
  icon: ReactElement;
  link: String;
}
const Widget = ({ type }: Props) => {
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USER",
        isMoney: false,
        icon: <Icon as={FaUser} color="pink.500" />,
        link: "View all user",
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        icon: <Icon as={AiOutlineShoppingCart} color="purple.400" />,
        link: "View all orders",
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        icon: <Icon as={FaWallet} color="green.500" />,
        link: "View detail",
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        icon: <Icon as={FaMoneyCheckAlt} color="yellow.500" />,
        link: "View detail",
      };
      break;
    default:
      break;
  }
  return (
    <VStack
      align="flex-start"
      mt="2rem"
      p="10px"
      boxShadow="lg"
      rounded="md"
      bgColor="gray.300"
      w="100%"
    >
      <HStack justify="space-between" w="100%">
        <Heading fontSize="14px" color="gray.400">
          {data && data.title}
        </Heading>
        <Text>20%</Text>
      </HStack>
      <Text fontSize="24px">100</Text>
      <HStack w="100%" justify="space-between">
        <Link borderBottom="solid" _hover={{ borderColor: "red.200" }}>
          {data && data.link}
        </Link>
        {data && data.icon}
      </HStack>
    </VStack>
  );
};

export default Widget;
