import React, {useEffect} from 'react'
React.useLayoutEffect = React.useEffect 
import Head from 'next/head'
import {Flex, Image, Text, Button, Box , Heading, Spinner , Divider} from '@chakra-ui/react'
import Link from 'next/link'  
import { Stack, HStack, VStack } from '@chakra-ui/react'
import Aos from "aos";
import "aos/dist/aos.css"
import { motion } from "framer-motion";

const MotionFlex = motion(Flex)
function Home() {
        
  useEffect(() =>{
		Aos.init({duration: 1000})
	},[]);

  return (
    <Flex direction="column">
      <Head>
        <title>Welcome to my Page| Maica Rumbaoa </title>
        <meta name="description" content="Maica Rumbaoa, Photographer based in Orange County, California" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MotionFlex height="100vh" backgroundImage="/images/bgbrown.jpg "backgroundPosition="center" backgroundRepeat="no-repeat" objectFit="cover" direction="column" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} transition={{duration: 1}}>

            <Flex mt={2} direction="row" justifyContent="center">
            <Stack direction="column" justifyContent="spaceBetween" height="10vh">
            <Flex direction="row" m={5}  bg="#B9825B" justifyContent="spaceBetween" width="15vw" height="12vh" data-aos="fade-down">
              <Image src="/images/Camera.svg" alt="logo" boxSize="60px" mb={20} justifyContent="center"/>
              <Box mt={2} size="lg" color="#fff" variant='solid' textAlign="start"><Link href="/">Maica Rumbaoa</Link></Box>
            </Flex>
            <Divider orientation='horizontal' />
              <Button  m={6} p={5} size="lg" color="#fff" bg="none" variant='solid'><Link href="/about">About</Link></Button>
              <Button  m={6} p={5}  size="lg" color="#fff" bg="none"  variant='solid'><Link href="/contact">Contact</Link></Button>
              <Button  m={6} p={5} size="lg"  color="#fff" bg="none" variant='solid'><Link href="/portfolio">Portfolio</Link></Button>
            
            </Stack>
             <Heading data-aos="fade-left" fontSize={{ base: '50px', md: '60px', lg: '70px' , xl:'90px'}} bgGradient='linear(to-l, #000, #FFFAF0)' bgClip='text' textShadow="-3px -2px #fff" fontWeight='extrabold' align="right" justifyContent="center"  m={20}>Maica Rumbaoa Photography</Heading>
            </Flex>
            <HStack spacing='30px' justifyContent='end' mr={20}>
              <Image src="/images/Facebooklight.svg" alt="facebookicon" boxSize="60px" objectFit="cover"/>
              <Image src="/images/Instagramlight.svg" alt="igicon" boxSize="60px" objectFit="cover"/>
              <Image src="/images/Newmaillight.svg" alt="mailicon" boxSize="60px" objectFit="cover"/>
            </HStack>
      </MotionFlex>
    </Flex>
  )
}



export default Home