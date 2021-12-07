import Head from 'next/head'
import {Flex, Text, Spacer , Button, useColorMode, useColorModeValue} from '@chakra-ui/react'
import About from '../pages/about'
import Nav from '../components/Nav'
export default function Home() {
  const {toggleColorMode} = useColorMode()
  

  return (
    <Flex direction="column">
      <Head>
        <title>Welcome to my Page| Maica Rumbaoa </title>
        <meta name="description" content="Maica Rumbaoa, Photographer based in Orange County, California" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Flex height="100vh" backgroundImage="/images/bgbrown.jpg "backgroundPosition="center" backgroundRepeat="no-repeat" objectFit="cover" direction="column">
            <Flex mt={2} direction="row" justifyContent="center">
             <Nav/>   
             <Text bgGradient='linear(to-l, #000, #FFFAF0)' bgClip='text' fontSize='8xl' textShadow="-3px -2px #fff" fontWeight='extrabold' align="right" justifyContent="center"  m={10}>Maica Rumbaoa Photography</Text>
            </Flex>

      </Flex>
      <Flex height="100vh"  bgColor="orange.400" justifyContent="center"> 
            <About/>
      </Flex>
    </Flex>
  )
}



