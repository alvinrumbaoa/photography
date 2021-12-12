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
            <Flex direction="row" m={5} justifyContent="center" width="15vw" height="12vh" data-aos="fade-down">
              <Image src="/images/Camera.svg" alt="logo" boxSize="60px" justifyContent="center"/>
            </Flex>
            <Divider orientation='horizontal' />
              <Button  m={10} p={6} fontSize="2xl" color="#fff" bg="none" variant='solid'><Link href="/about">Information</Link></Button>
              <Button  m={10} p={6}  fontSize="2xl" color="#fff" bg="none"  variant='solid'><Link href="/contact">Contact</Link></Button>
              <Button  m={10} p={6} fontSize="2xl"  color="#fff" bg="none" variant='solid'><Link href="/portfolio">Galleries</Link></Button>
            
            </Stack>
             <Heading data-aos="fade-left" fontSize={{ base: '60px', md: '70px', lg: '95px' , xl:'100px'}} bgGradient='linear(to-l, #000, #FFFAF0)' bgClip='text' textShadow="-3px -2px #fff" fontWeight='extrabold' align="right" justifyContent="center"  m={20}>Maica Rumbaoa Photography</Heading>
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