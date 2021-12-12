import React, {useEffect} from 'react'
React.useLayoutEffect = React.useEffect 
import Head from 'next/head'
import {Flex, Image, Heading, Divider} from '@chakra-ui/react'
import Link from 'next/link'  
import { Stack, HStack } from '@chakra-ui/react'
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
              <Image src="/images/Camera.svg" alt="logo" boxSize="100px" justifyContent="center"/>
            </Flex>
            <Divider orientation='horizontal' />
              <Heading  m={10} p={6} fontSize="3xl" color="#a44200"  textShadow="3px -3px  #fff"bg="none" variant='solid'><Link href="/about">Information</Link></Heading>
              <Heading  m={10} p={6}  fontSize="3xl" color="#a44200"  textShadow="3px -3px  #fff"bg="none"  variant='solid'><Link href="/contact">Contact</Link></Heading>
              <Heading  m={10} p={6} fontSize="3xl"  color="#a44200"  textShadow="3px -3px  #fff"bg="none" variant='solid'><Link href="/portfolio">Galleries</Link></Heading>
            
            </Stack>
             <Heading data-aos="fade-left" fontSize={{ base: '75px', md: '90px', lg: '120px' , xl:'150px'}} bgGradient='linear(to-r, #fff, #f2c17d)'
  bgClip='text'  bgClip='text' textShadow="-10px -10px  #a44200" fontWeight='extrabold' align="right" justifyContent="center"  m={20}>Maica Rumbaoa Photography</Heading>
            </Flex>
            <HStack spacing='30px' justifyContent='end' mr={20}>
                <Link href="https://www.facebook.com/maicz.G">
                  <Image src="/images/Facebooklight.svg" alt="facebookicon" boxSize="100px" objectFit="cover"/>
                </Link> 
                <Link href="https://www.instagram.com/_maics_/">
                  <Image src="/images/Instagramlight.svg" alt="igicon" boxSize="100px" objectFit="cover"/>
                </Link>
                <Link href="mailto:maicaalvinwedding2018@gmail.com">
                  <Image src="/images/Newmaillight.svg" alt="mailicon" boxSize="100px" objectFit="cover"/>
                </Link>
            </HStack>
      </MotionFlex>
    </Flex>
  )
}



export default Home