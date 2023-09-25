import Navigation from "../Components/Navigation";

import { Box, SimpleGrid } from "@chakra-ui/react";
import Widget from "../Components/Widget";

const Home = () => {
  return (
    <Box w={{ base: "100%", lg: "90%" }} mx="auto" mt="2rem">
      <Navigation />
      <SimpleGrid columns={{ base: 2, lg: 4 }} spacing="10px">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />

        <Widget type="balance" />
      </SimpleGrid>
    </Box>
  );
};

export default Home;
