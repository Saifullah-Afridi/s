import {
  Box,
  Center,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <VStack w="100%" p="10px" align="flex-start" boxShadow="lg">
      <HStack w="100%" justify="space-between">
        <Heading size="md" color="gray.400">
          Totel Renvenu
        </Heading>
        <Icon as={MdMoreVert} />
      </HStack>
      <Box p="5px">
        <Center>
          <Box boxSize="200px" p="10px">
            <CircularProgressbar value={70} text="70%" strokeWidth={4} />
          </Box>
        </Center>

        <Text textAlign="center" fontSize="20px" py="3px">
          Totel sales made today
        </Text>
        <Text textAlign="center" fontSize="24px" mb="8px">
          $420
        </Text>

        <Text px="5px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
          dignissimos.
        </Text>
        <HStack w="100%" justify="space-between" my="10px">
          <Text>Target</Text>
          <Text>Last Week</Text>
          <Text>Last month</Text>
        </HStack>
        <HStack w="100%" justify="space-between">
          <Text>$200</Text>
          <Text>$300</Text>
          <Text>$899</Text>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Featured;
