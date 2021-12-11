import React, {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Flex, Heading, Text , Grid , Image , Box} from '@chakra-ui/react'

import { motion } from "framer-motion";
import Aos from "aos";
import { SRLWrapper } from "simple-react-lightbox";
import "aos/dist/aos.css"
const MotionFlex = motion(Flex)
React.useLayoutEffect = React.useEffect 

export default function gallery() {

	const images = [
		{
		  src: '/images/grid1.jpg',
		  thumbnail:'images/grid1.jpg',
		  caption: 'Sample1',
		  width: 2000,
		  height: 'auto',
		},
		{
		  src: '/images/grid2.jpg',
		  thumbnail: 'images/grid2.jpg',
		  caption: 'Consecutur adiscip elit',
		  width: 2000,
		  height: 'auto'
		},
		{
		  src: '/images/grid3.jpg',
		  thumbnail: '/images/grid3.jpg',
		  caption: 'Consecutur adiscip elit',
		  width: 2000,
		  height: 'auto'
		},
		{
			src: '/images/grid4.jpg',
			thumbnail: '/images/grid4.jpg',
			caption: 'Consecutur adiscip elit',
			width: 2000,
			height: 'auto'
		},
		  {
			src: '/images/grid5.jpg',
			thumbnail: '/images/grid5.jpg',
			caption: 'Consecutur adiscip elit',
			width: 2000,
			height: 'auto'
		  },
		  {
			src: '/images/grid6.jpg',
			thumbnail: '/images/grid6.jpg',
			caption: 'Consecutur adiscip elit',
			width: 2000,
			height: 'auto'
		  },
		  {
			src: '/images/grid7.jpg',
			thumbnail: '/images/grid7.jpg',
			caption: 'Consecutur adiscip elit',
			width: 2000,
			height: 'auto'
		  },
		  {
			src: '/images/grid8.jpg',
			thumbnail: 'images/grid8.jpg',
			caption: 'Consecutur adiscip elit',
			width: 2000,
			height: 'auto'
		  },
		  {
			src: '/images/grid9.jpg',
			thumbnail: '/images/grid9.jpg',
			caption: 'Consecutur adiscip elit',
			width: 2000,
			height: 'auto'
		  },
		]

	return (
		<Flex  justifyContent="center" align="center" p={20}>
			
			<SRLWrapper>	
				
			<Grid templateColumns='repeat(3, 1fr)' gap={7} >  
			{
							images.map((image, idx)=>(
								<MotionFlex  whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >
									<Link href="/api/images">
										<Image src={image.src} alt="Portfolio" borderRadius='lg' boxShadow='xl'/>
									</Link>
								</MotionFlex>
							))
			}
			</Grid>
			</SRLWrapper>
			
			
		</Flex>
	)
}
