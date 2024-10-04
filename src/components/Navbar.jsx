import { SimpleGrid, GridItem, Flex } from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom';
import React from 'react'

 function Navbar() {
  return (
    <SimpleGrid  alignItems="center" 
    color="#fff" 
    bg="black" 
    columns={{ base: 2, md: 3 }} 
      p={{ base: "2", md: "4" }}
    position="fixed"
    top="0" 
    width="100%" 
    zIndex="999"
    templateColumns="repeat(3, 1fr)" >

    <GridItem fontSize={{ base: "1.5rem", md: "2.5rem" }}  fontWeight="bold">
      <RouterLink to="/">Maah.Dev</RouterLink>
    </GridItem>
    <GridItem>
      <Flex align="center"
       justify={{ base: "space-around", md: "space-between" }} 
          fontSize={{ base: "1rem", md: "1.3rem" }}
          wrap="wrap" >
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/About">About</RouterLink>
        <RouterLink to="/Services">Services</RouterLink>
        <RouterLink to="/Portfolio">Portfolio</RouterLink>
        <RouterLink to="/Contact">Contact</RouterLink>
      </Flex>
    </GridItem>
    <Flex  align="flex-end"justify="center"  fontSize={{ base: "1rem", md: "1.5rem" }} 
        ml={{ base: "0", md: "4rem" }} 
        p={{ base: "1", md: "2" }}
     style={{ background: 'linear-gradient(267deg, #ff7e5f, #b923e1)',  borderRadius: '2rem'}}
     _hover={{ transform: 'scale(1.05)'}}>
    <GridItem p="2" cursor="pointer">Connect with Me</GridItem>
    </Flex>
  </SimpleGrid>
  )
}
export default Navbar
