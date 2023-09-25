import { Grid, GridItem } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

const RootLayout = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "230px 1fr" }}
      w={{ base: "100%", lg: "95%" }}
      mx="auto"
    >
      <GridItem>
        <SideBar />
      </GridItem>
      <GridItem>
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
