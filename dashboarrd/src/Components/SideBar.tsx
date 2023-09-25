import { HStack, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import {
  AiOutlineUser,
  AiFillHdd,
  AiOutlineCalendar,
  AiOutlineBarChart,
  AiOutlineBell,
  AiOutlineLineChart,
  AiFillSchedule,
  AiFillSetting,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaCarSide, FaUserCircle, FaThLarge } from "react-icons/fa";

import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <VStack
      align="flex-start"
      mt="1rem"
      p="10px"
      borderRight="solid"
      borderRightWidth="1px"
      borderRightColor="gray.300"
      color="blue.500"
    >
      <Heading
        fontSize="24px"
        textAlign="center"
        mb="1rem"
        borderBottom="2"
        borderBottomColor="red.400"
        width="100%"
      >
        Hotel
      </Heading>
      <VStack align="flex-start">
        <Text
          fontSize="12px"
          color="gray.400"
          mt="10px"
          _hover={{ color: "red.600" }}
          cursor="pointer"
        >
          MAIN
        </Text>
        <NavLink to="/">
          <HStack gap="15px" _hover={{ color: "pink.400" }}>
            <Icon as={FaThLarge} />
            <Text>Dashboard</Text>
          </HStack>
        </NavLink>
        <Text
          fontSize="12px"
          color="gray.400"
          mt="10px"
          _hover={{ color: "red.600" }}
          cursor="pointer"
        >
          LISTS
        </Text>
        <NavLink to="/users">
          <HStack gap="15px" _hover={{ color: "pink.400" }} pt="9px">
            <Icon as={AiOutlineUser} />
            <Text>Users</Text>
          </HStack>
        </NavLink>
        <NavLink to="/products">
          <HStack gap="15px" _hover={{ color: "pink.400" }} pt="9px">
            <Icon as={AiFillHdd} />
            <Text>Products</Text>
          </HStack>
        </NavLink>
        <NavLink to="/orders">
          <HStack gap="15px" _hover={{ color: "pink.400" }} pt="9px">
            <Icon as={AiOutlineCalendar} />
            <Text>Orders</Text>
          </HStack>
        </NavLink>
        <NavLink to="/delivery">
          <HStack gap="15px" _hover={{ color: "pink.400" }} pt="9px">
            <Icon as={FaCarSide} />
            <Text>Delivery</Text>
          </HStack>
        </NavLink>
        <Text
          fontSize="12px"
          color="gray.400"
          mt="10px"
          _hover={{ color: "red.600" }}
          cursor="pointer"
        >
          USEFUL
        </Text>
        <NavLink to="/states"></NavLink>
        <HStack gap="15px" _hover={{ color: "pink.400" }} pt="9px">
          <Icon as={AiOutlineBarChart} />
          <Text>States</Text>
        </HStack>
        <NavLink to="/notification">
          <HStack gap="15px" _hover={{ color: "pink.400" }} pt="9px">
            <Icon as={AiOutlineBell} />
            <Text>Notification</Text>
          </HStack>
        </NavLink>
        <Text
          fontSize="12px"
          color="gray.400"
          mt="10px"
          _hover={{ color: "red.600" }}
          cursor="pointer"
        >
          SERVICE
        </Text>
        <NavLink to="systemhealth">
          <HStack gap="15px" _hover={{ color: "pink.400" }} pt="9px">
            <Icon as={AiOutlineLineChart} />
            <Text>System Health</Text>
          </HStack>
        </NavLink>
        <NavLink to="/logs">
          <HStack gap="15px" _hover={{ color: "pink.400" }} pt="9px">
            <Icon as={AiFillSchedule}></Icon>
            <Text>Logs</Text>
          </HStack>
        </NavLink>
        <NavLink to="/setting">
          <HStack gap="15px" _hover={{ color: "pink.400" }} pt="9px">
            <Icon as={AiFillSetting}></Icon>
            <Text>Settings</Text>
          </HStack>
        </NavLink>
        <Text
          fontSize="12px"
          color="gray.400"
          mt="10px"
          _hover={{ color: "red.600" }}
          cursor="pointer"
        >
          USER
        </Text>
        <NavLink to="/profile">
          <HStack gap="15px">
            <Icon as={FaUserCircle}></Icon>
            <Text>Profile</Text>
          </HStack>
        </NavLink>
        <NavLink to="/logout">
          <HStack gap="15px" _hover={{ color: "pink.400" }} pt="9px">
            <Icon as={AiOutlineArrowRight}></Icon>
            <Text>Logout</Text>
          </HStack>
        </NavLink>
      </VStack>
    </VStack>
  );
};

export default SideBar;
