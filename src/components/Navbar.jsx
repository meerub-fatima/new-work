import { SimpleGrid, GridItem, Flex } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom';
import React from 'react'

 function Navbar() {
  return (
    <SimpleGrid alignItems="center" color="#fff" bg="black" columns="2" p="4">
    <GridItem fontSize="1.2rem" fontWeight="bold">
      <RouterLink to="/">Maah.Dev</RouterLink>
    </GridItem>
    <GridItem>
      <Flex align="center" justify="space-evenly">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/About">About</RouterLink>
        <RouterLink to="/Services">Services</RouterLink>
        <RouterLink to="/Portfolio">Portfolio</RouterLink>
        <RouterLink to="/Contact">Contact</RouterLink>
      </Flex>
    </GridItem>
    <GridItem>Connect with Me</GridItem>
  </SimpleGrid>
  )
}
export default Navbar
