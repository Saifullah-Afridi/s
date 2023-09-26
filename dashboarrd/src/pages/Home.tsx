import Navigation from "../Components/Navigation";

import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Widget from "../Components/Widget";
import Featured from "../Components/Featured";
import Charts from "../Components/Charts";

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
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
        mt="2rem"
        gap="2rem"
      >
        <GridItem boxShadow="lg">
          <Featured />
        </GridItem>
        <GridItem>
          <Charts />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
