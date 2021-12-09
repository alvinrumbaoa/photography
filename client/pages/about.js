import React, {useEffect} from 'react'
React.useLayoutEffect = React.useEffect 
import Head from 'next/head'
import {Flex, Heading, Text , Image , Box} from '@chakra-ui/react'
import Nav from '../components/Nav';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { motion } from "framer-motion";
import {animationOne, transition} from "../animation/animation";
import Aos from "aos";
import "aos/dist/aos.css"
const MotionFlex = motion(Flex)

const about =() => {

	useEffect(() =>{
		Aos.init({duration: 1000})
	},[]);


	return (
		<MotionFlex bg="#FFDBCF" height="120vh"   direction="column"  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} transition={{duration: 1.2}}> 

			<Flex justifyContent="start" m={10}>
					<Nav/>
			</Flex>
			<Flex direction="row" >
				<Flex direction="column" justifyContent="start" data-aos="fade-left">
					<Heading ml={20} fontSize='90px' color="#B56226" textShadow="-3px 3px #fff" >My Name Is Maica Rumbaoa</Heading>
					<Heading  ml={20} mt={10}  size='md' width="40vw" color="orange.900">I am a photographer based in Orange California. Love to Travel, Explore and Taking the Beauty of Nature.</Heading>
				</Flex>
				<Flex  >
					<Image src="/images/maica.png" data-aos="zoom-in" alt="avatar" boxSize='400px' mr={40}/>
				</Flex>
			</Flex  >
			<Flex position="relative">
				<Image src="/images/brownwaves.png"  w="100vw"data-aos="fade-up"alt="avatar"/>
			</Flex>
		</MotionFlex>
	)
}

export default about
