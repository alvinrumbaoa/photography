import React, {useEffect , Suspense} from 'react'
import Head from 'next/head'
import {Flex, Heading, Text , Image , Box} from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
import { Stack, HStack, VStack, Grid } from '@chakra-ui/react'
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css"

export default function gallery() {
	const src=["./images/grid1.jpg",
				"images/grid2.jpg",
				"images/grid3.jpg",
				"/images/grid4.jpg",
			"","","","","",""]


	return (
		<Flex justifyContent="center" align="center">
			<Grid templateColumns='repeat(3, 1fr)' gap={6}> 
			{
							src.map((image, idx)=>(
								<motion.div  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
									<Image src={image} alt="event images"/>
								</motion.div>
							))
			}
			</Grid>
		</Flex>
	)
}
