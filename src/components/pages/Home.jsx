import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

 function Home() {
  return (
   <Flex align="center" justify={"center"} flexDir="column">
    <Box >
    <Image 
        src="https://via.placeholder.com/400" 
        alt="Placeholder Image" 
        boxSize="300px" 
        objectFit="cover"
        borderRadius={"50%"}
        mt="10rem"
      />

      <Heading
      alignItems="center" 
            w="70%"
          fontSize="4rem"
          fontWeight="600"
      ><Text as="span"
      bgGradient="linear(to-r, #ff7e5f, #b923e1)" 
      bgClip="text" 
      color="transparent" 
             >I'm Maleeha Usman,</Text> frontend developer based in Lahore. </Heading>

 <Flex 
    align="center"
    w="50%"
    fontSize="2rem"
    lineHeight="6rem"><Text>I m frontend developer from KPK with zero experinces</Text></Flex>
     <Flex 
        align="center"
        fontSize="2rem"
        gap="2rem"
        fontWeight="500"
        mb="3rem" >
      
       <Box>Connect with Me</Box>
      <Box>My Resume</Box>
      </Flex>
    </Box>
   </Flex>
  )
}
export default Home
