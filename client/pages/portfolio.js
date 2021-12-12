import React, {useEffect, Suspense} from 'react'
import Head from 'next/head'
import {Flex, Heading, Text , Image} from '@chakra-ui/react'

import Nav from '../components/Nav';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { motion } from "framer-motion";
import Aos from "aos";
import Gallery from "./api/gallery"
import "aos/dist/aos.css"
const MotionFlex = motion(Flex)
React.useLayoutEffect = React.useEffect 


const contact = ()=> {
	useEffect(() =>{
		Aos.init({duration: 1000})
	},[]);


	return (

		<MotionFlex bg="#FFDBCF" direction="column" w="100vw" initial={{ opacity: 0 }} animate={{ opacity: 1 }}  exit={{ opacity: 0 }} transition={{duration: 1.2}}> 
		<Head>
			<title>My Gallery | Maica Rumbaoa </title>
			<meta name="description" content="Maica Rumbaoa, Photographer based in Orange County, California" />
			<link rel="icon" href="/favicon.ico" />
      	</Head>
				<Flex mt={-50}>
					<Image src="/images/brownwaves2.png"  h="20vh" w="100vw" alt="avatar"/>
				</Flex>
				<Flex justifyContent="start" mt={10} >
						<Nav/>
				</Flex>
				
				<Flex direction="column" justifyContent="center" textAlign="center" data-aos="fade-left">
						<Heading  fontSize='90px' justifyContent="center" color="#B56226" textShadow="-3px 3px #fff">Galleries</Heading>
				</Flex >
				<Flex justifyContent="center" align="center" mb={10} >
				
						<Gallery/>
			
				</Flex>
				<Flex direction="column" justifyContent="center" textAlign="center" data-aos="fade-left" mb={20}>
						<Heading  fontSize='70px' justifyContent="center" color="#B56226" textShadow="-3px 3px #fff">I LOVE TO TAKE PICTURES FOR..</Heading>
				</Flex >
				<HStack justifyContent="center" spacing={20}>
					<Flex w="400px" h="600px" bgGradient='linear(to-r, #FFDBCF, #cea177)' direction="column" data-aos="fade-right"align="center" justifyContent="center" borderRadius="20px" boxShadow="3px 2px 10px gray" >
						<Image src="/images/teddy-bear/cuate.png" alt="newborn" width="250" height="250" />
						<Heading align="center" color="#B56226" textShadow="-3px 3px #fff" justifyContent="center">Newborn</Heading>
					</Flex>
					<Flex w="400px" h="600px" bgGradient='linear(to-r, #FFDBCF, #cea177)' direction="column"data-aos="fade-down" align="center" justifyContent="center" borderRadius="20px" boxShadow="3px 2px 10px gray" >
						<Image src="/images/focus/pana.png" alt="teddy" width="250" height="250"/>
						<Heading align="center" color="#B56226" textShadow="-3px 3px #fff"justifyContent="center">Portrait</Heading>
					</Flex>
					<Flex w="400px" h="600px" bgGradient='linear(to-r, #FFDBCF, #cea177)' direction="column" data-aos="fade-left" align="center" justifyContent="center" borderRadius="20px" boxShadow="3px 2px 10px gray" >
						<Image src="/images/forest/cuate.png" alt="nature" width="250" height="250"  />
						<Heading align="center"color="#B56226" textShadow="-3px 3px #fff" justifyContent="center">Nature</Heading>
					</Flex>
				</HStack>
			
				<Flex mt={-50}>
					<Image src="/images/brownwaves.png"  h="20vh" w="100vw" alt="avatar"/>
				</Flex>
		</MotionFlex>
    
  );
}



export default contact

