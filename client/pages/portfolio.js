import React, {useEffect} from 'react'
import Head from 'next/head'
import {Flex, Heading, Text , Image , Box} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
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

		<MotionFlex bg="#FFDBCF" height="1000vh"  direction="column"  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} transition={{duration: 1.2}}> 
		{/* Navigation */}
			<Flex position="relative">
				<Image src="/images/brownwaves2.png"  w="100vw" data-aos="fade-down"alt="avatar"/>
			</Flex>
			<Flex justifyContent="start" ml={10} >
					<Nav/>
			</Flex>
			
			<Flex direction="column" justifyContent="center" textAlign="center" data-aos="fade-left">
					<Heading  fontSize='90px' justifyContent="center" color="#B56226" textShadow="-3px 3px #fff">Portfolio</Heading>
			</Flex >
			<Flex justifyContent="center" align="center" mb={10}>
				<Gallery/>
			</Flex>
			<VStack>
				<Box></Box>
				<Box></Box>
				<Box></Box>
			</VStack>
		</MotionFlex>
    
  );
}



export default contact

