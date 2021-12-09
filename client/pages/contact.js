import React, {useEffect} from 'react'
React.useLayoutEffect = React.useEffect 
import Head from 'next/head'
import {Flex, Heading, Text , Image , Box} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import Nav from '../components/Nav';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css"
const MotionFlex = motion(Flex)

const contact = ()=> {
	useEffect(() =>{
		Aos.init({duration: 1000})
	},[]);


	return (

		<MotionFlex bg="#FFDBCF" height="100vh"  direction="column"  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} transition={{duration: 1.2}}> 

			<Flex justifyContent="start" m={10}>
					<Nav/>
			</Flex>
			<Flex direction="column" justifyContent="center" textAlign="center" data-aos="fade-left">
					<Heading  fontSize='90px' justifyContent="center" color="#B56226" textShadow="-3px 3px #fff">Follow Me:</Heading>
			</Flex>
		</MotionFlex>

  );
}



export default contact

