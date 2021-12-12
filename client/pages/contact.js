import React, {useEffect} from 'react'
React.useLayoutEffect = React.useEffect 
import Head from 'next/head'
import Link from 'next/link'
import {Flex, Heading, Image } from '@chakra-ui/react'
import Nav from '../components/Nav';
import { HStack } from '@chakra-ui/react'
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
		<Head>
			<title>Contact Me| Maica Rumbaoa </title>
			<meta name="description" content="Maica Rumbaoa, Photographer based in Orange County, California" />
			<link rel="icon" href="/favicon.ico" />
      	</Head>
				<Flex mt={-50}>
					<Image src="/images/brownwaves2.png"h="20vh" w="100vw" alt="avatar"/>
				</Flex>
			<Flex justifyContent="start" m={10}>
					<Nav/>
			</Flex>
			<Flex direction="column" justifyContent="center" textAlign="center" data-aos="fade-left">
					<Heading  fontSize='90px' justifyContent="center" color="#B56226" textShadow="-3px 3px #fff">Follow Me:</Heading>
					<HStack spacing='30px' justifyContent='center' m={20}>
					<Link href="https://www.facebook.com/maicz.G">
						<Image src="/images/Facebook.svg" alt="facebookicon" boxSize="100px" objectFit="cover"/>
					</Link> 
					<Link href="https://www.instagram.com/_maics_/">
						<Image src="/images/Instagram.svg" alt="igicon" boxSize="100px" objectFit="cover"/>
					</Link>
					<Link href="mailto:maicaalvinwedding2018@gmail.com">
						<Image src="/images/New Message.svg" alt="mailicon" boxSize="100px" objectFit="cover"/>
					</Link>
					</HStack>
					<Flex>

					</Flex>
			</Flex>
		</MotionFlex>

  );
}



export default contact

