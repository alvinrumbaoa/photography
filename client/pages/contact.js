import React, {useEffect} from 'react'
React.useLayoutEffect = React.useEffect 
import Head from 'next/head'
import Link from 'next/link'
import {Flex, Heading, Image , Input,Select, Stack, HStack, VStack , Button} from '@chakra-ui/react'
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
  } from '@chakra-ui/react'

import { Formik } from 'formik';
import Nav from '../components/Nav';
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css"
const MotionFlex = motion(Flex)

const contact = ()=> {
	useEffect(() =>{
		Aos.init({duration: 1000})
	},[]);


	return (

		<MotionFlex bg="#FFDBCF" direction="column"  initial={{ opacity: 0 }}
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
						<Heading  fontSize='90px' justifyContent="center" color="#B56226" textShadow="-3px 3px #fff">Let's Make it Happen!</Heading>
			</Flex >
			<HStack p={20} spacing={80} direction="column" textAlign="center" data-aos="fade-left">

						<Flex >
							<Image src="/images/contactpicture.svg" boxSize="600px" salt="contact picture" />
						</Flex>
						<VStack>
							<Heading  fontSize='50px' justifyContent="center" color="#B56226" textShadow="-3px 3px #fff">Follow Me:</Heading>
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
						</VStack>
						<form>
							<Stack p={30} w="500px" h="800px" direction="column" direction="column"  mr={10}data-aos="fade-right" align="center"  borderRadius="30px" boxShadow="3px 2px 10px gray" >
								<Image src="/images/events/pana.svg" alt="mailicon" boxSize="200px" objectFit="cover"/>
								<FormControl id='first-name' isRequired> <FormLabel>First name</FormLabel><Input placeholder='First name' /></FormControl>
								<FormControl id='last-name' isRequired> <FormLabel>Last name</FormLabel><Input placeholder='Last name' /></FormControl>
								<FormControl id='country'><FormLabel>Country</FormLabel>
									<Select placeholder='Select country'>
										<option>United Arab Emirates</option>
										<option>Nigeria</option>
										<option>United States</option>
										<option>Philippines</option>
									</Select>
								</FormControl>
								<FormControl id='email'><FormLabel>Email address</FormLabel><Input type='email' /> <FormHelperText>We'll never share your email.</FormHelperText></FormControl>
								<FormControl id='theme'><FormLabel>Theme</FormLabel>
									<Select placeholder='Theme'>
										<option>Wedding</option>
										<option>Modeling</option>
										<option>Newborn</option>
										<option>Event</option>
									</Select>
								</FormControl>
								<Button ml={20} mt={5} colorScheme='orange' size='lg' w="400px">Let's Get Started</Button>
							</Stack>	
						</form>
						
			</HStack>
			
		</MotionFlex>

  );
}



export default contact

