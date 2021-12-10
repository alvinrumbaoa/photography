import React, {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Flex, Heading, Text , Grid ,Image , Box} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css"
const MotionFlex = motion(Flex)
React.useLayoutEffect = React.useEffect 

export default function gallery() {
	const src=["./images/grid1.jpg",
				"images/grid2.jpg",
				"images/grid3.jpg",
				"/images/grid4.jpg",
			"","","","","",""]

			const onCloseHandler = () =>{
				<Link href="/home"/>
			}  

	return (
		<Flex justifyContent="center" align="center">
			<Grid templateColumns='repeat(3, 1fr)' gap={6}> 
			{
							src.map((image, idx)=>(
								<MotionFlex  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
									<Link href={"/images/" + image.src}>
									<Image src={image} alt="event images"/>

									</Link>
									

								</MotionFlex>
							))
			}
			</Grid>
		</Flex>
	)
}
