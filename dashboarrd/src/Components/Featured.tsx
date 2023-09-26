import { HStack, Heading, Icon, VStack } from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";

const Featured = () => {
  return (
    <VStack w="100%" p="10px" align="flex-start">
      <HStack w="100%" justify="space-between">
        <Heading size="md" color="gray.400">
          Totel Renvenu
        </Heading>
        <Icon as={MdMoreVert} />
      </HStack>
    </VStack>
  );
};

export default Featured;
