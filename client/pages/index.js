import Head from 'next/head'
import {Flex, Image, Text, Button} from '@chakra-ui/react'
import Link from 'next/link'  
import { Stack, HStack, VStack } from '@chakra-ui/react'

import { motion } from "framer-motion";
import {animationOne, transition} from "../animation/Animation";

const MotionFlex = motion.custom(Flex)
function Home() {

  

  return (
    <Flex direction="column">
      <Head>
        <title>Welcome to my Page| Maica Rumbaoa </title>
        <meta name="description" content="Maica Rumbaoa, Photographer based in Orange County, California" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <MotionFlex height="100vh" backgroundImage="/images/bgbrown.jpg "backgroundPosition="center" backgroundRepeat="no-repeat" objectFit="cover" direction="column" initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
            <Flex mt={2} direction="row" justifyContent="center">
            <Flex direction="Column" justifyContent="spaceBetween">
              <Button m={3} size="md" color="#fff" variant='solid'><Link href="/">Home</Link></Button>
              <Button m={4} size="md" color="#fff" variant='solid'><Link href="/about">About</Link></Button>
              <Button m={3} size="md" color="#fff" variant='solid'><Link href="/contact">Contact</Link></Button>
              <Button m={4} size="md"  color="#fff" variant='solid'><Link href="/portfolio">Portfolio</Link></Button>
            </Flex>
             <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }} bgGradient='linear(to-l, #000, #FFFAF0)' bgClip='text' textShadow="-3px -2px #fff" fontWeight='extrabold' align="right" justifyContent="center"  m={20}>Maica Rumbaoa Photography</Text>
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