import { SimpleGrid, GridItem, Flex } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom';
import React from 'react'

 function Navbar() {
  return (
    <SimpleGrid alignItems="center" color="#fff" bg="black" columns="3" p="4">
    <GridItem fontSize="2.5rem" fontWeight="bold">
      <RouterLink to="/">Maah.Dev</RouterLink>
    </GridItem>
    <GridItem>
      <Flex align="center" justify="space-between" fontSize="1.3rem">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/About">About</RouterLink>
        <RouterLink to="/Services">Services</RouterLink>
        <RouterLink to="/Portfolio">Portfolio</RouterLink>
        <RouterLink to="/Contact">Contact</RouterLink>
      </Flex>
    </GridItem>
    <Flex  align="flex-end"justify="center" fontSize="1.5rem" ml="4rem"
     style={{ background: 'linear-gradient(267deg, #ff7e5f, #b923e1)',  borderRadius: '2rem'}}
     _hover={{ transform: 'scale(1.05)'}}>
    <GridItem p="2" cursor="pointer">Connect with Me</GridItem>
    </Flex>
  </SimpleGrid>
  )
}
export default Navbar
