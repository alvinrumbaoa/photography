import React, {useEffect} from 'react'
React.useLayoutEffect = React.useEffect 
import Head from 'next/head'
import {Flex, Heading, Text , Image , Button, Box} from '@chakra-ui/react'
import Nav from '../components/Nav';
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css"
const MotionFlex = motion(Flex)

const about =() => {

	useEffect(() =>{
		Aos.init({duration: 1000})
	},[]);


	return (
		<MotionFlex bg="#FFDBCF" height="100vh" direction="column"  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} transition={{duration: 1.2}}> 
				<Flex mt={-50}>
					<Image src="/images/brownwaves2.png"h="20vh" w="100vw" alt="avatar"/>
				</Flex>
			<Flex justifyContent="start" m={10}>
					<Nav/>
			</Flex>
			<Flex direction="row" >
				<Flex direction="column" justifyContent="start" data-aos="fade-left">
					<Heading ml={20} fontSize='74px' color="#B56226" textShadow="-3px 3px #fff" >PLEASURE TO MEET YOU</Heading>
					<Heading  ml={20} mt={10}  size='lg' width="50vw" color="orange.900" textShadow="-3px 3px #fff">I'm Maica, a photographer based in Orange California. Love to Travel, Explore and Taking the Beauty of Nature.</Heading>
					<Text ml={20} mt={10}  size='lg' width="40vw" color="orange.800">
						Inspired and fascinated by connection, my passion is storytelling, and I want to help tell the story of your life and love! I will take the time to learn your journey, so we can create images which speak to who you are--Images which are curated moments, meant to showcase your pure, beautiful, quirky, authentic self. Let's shake it up and get away from the standard Pinterest poses...</Text>
					<Button ml={20} mt={5} colorScheme='orange' size='md' w="200px">Let's Get Started</Button>
				</Flex>
				
				<Flex  >
					<Image src="/images/maica.png" data-aos="zoom-in" alt="avatar" boxSize='400px' mr={40}/>
				</Flex>
			</Flex  >
		
		</MotionFlex>
	)
}

export default about
