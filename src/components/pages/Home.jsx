import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

 function Home() {
  return (
   <Flex align="center" justify={"center"} flexDir="column" minH="100%" minW="100%" 
    p={{ base: "2", md: "4" , lg:"6", xl:"8" }} 
    border="2px solid red">
    <Box>
    <Image 
        src="https://via.placeholder.com/400" 
        alt="Placeholder Image" 
        boxSize={{ base: "200px", md: "300px", lg:"400px" }} 
        objectFit="cover"
        borderRadius={"50%"}
        mb={{ base: "4", md: "10" }} />

      <Heading
      w={{ base: "90%", md: "70%" }}
      alignItems="center" 
      fontSize={{ base: "4xl", md: "6xl" }} 
          fontWeight="600">
<Text as="span"
      bgGradient="linear(to-r, #ff7e5f, #b923e1)" 
      bgClip="text" 
      color="transparent" 
             >I'm Maleeha Usman,</Text> frontend developer based in Lahore. </Heading>

 <Flex 
    align="center"
    w={{ base: "90%", md: "50%" }}
    fontSize={{ base: "lg", md: "2xl" }}
    lineHeight="1.5"  mb="4"><Text>I m frontend developer from KPK with zero experinces</Text></Flex>
     <Flex 
        align="center"
        fontSize={{ base: "lg", md: "2xl" }}
        gap="2rem"
        fontWeight="500"
        mb="3rem" >
      
       <Box  border="2px solid red"
          borderRadius="3rem"
          p={{ base: "0.5rem 1rem", md: "1rem 2rem" }}
           bgGradient="linear(to-r, #ff7e5f, #b923e1)"
            cursor="pointer" _hover={{border:"2px solid white"}}>Connect with Me</Box>
      <Box 
       borderRadius="3rem"
       p={{ base: "0.5rem 1rem", md: "1rem 4rem" }}
        border="2px solid #FFF"
        cursor="pointer" _hover={{borderColor:"#b415ff"}} >My Resume</Box>
      </Flex>
    </Box>
   </Flex>
  )
}
export default Home
