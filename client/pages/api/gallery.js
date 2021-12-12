import React, {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import {Flex, Heading, Text , Grid , Image, Box} from '@chakra-ui/react'
import { motion } from "framer-motion";
import Aos from "aos";
import { Spinner } from '@chakra-ui/react'
import { SRLWrapper } from "simple-react-lightbox";
import "aos/dist/aos.css"
const MotionFlex = motion(Flex)
React.useLayoutEffect = React.useEffect 

export default function gallery() {
	useEffect(() =>{
		Aos.init({duration: 1000})
	},[]);
	const images = [
		{
		  src: '/images/grid1.jpg',
		  thumbnail:'images/grid1.jpg',
		  caption: 'Kid Enjoying nature',
		  width: 2000,
		  height: 'auto',
		},
		{
		  src: '/images/grid2.jpg',
		  thumbnail: 'images/grid2.jpg',
		  caption: 'Jeep Photography',
		  width: 2000,
		  height: 'auto'
		},
		{
		  src: '/images/grid3.jpg',
		  thumbnail: '/images/grid3.jpg',
		  caption: 'bonfire photography',
		  width: 2000,
		  height: 'auto'
		},
		{
			src: '/images/grid4.jpg',
			thumbnail: '/images/grid4.jpg',
			caption: 'Newborn Photography',
			width: 2000,
			height: 'auto'
		},
		{
			src: '/images/grid5.jpg',
			thumbnail: '/images/grid5.jpg',
			caption: 'Getaway',
			width: 2000,
			height: 'auto'
		},
		{
			src: '/images/grid6.jpg',
			thumbnail: '/images/grid6.jpg',
			caption: 'Cheers to 3rd anniversary',
			width: 1000,
			height: 'auto'
		},
		{
			src: '/images/grid7.jpg',
			thumbnail: '/images/grid7.jpg',
			caption: 'baby getwawy',
			width: 2000,
			height: 'auto'
		},
		{
			src: '/images/grid8.jpg',
			thumbnail: '/images/grid8.jpg',
			caption: 'Lamp that lights up the night',
			width: 2000,
			height: 'auto'
		},
		{
			src: '/images/grid9.jpg',
			thumbnail: '/images/grid9.jpg',
			caption: 'family',
			width: 2000,
			height: 'auto'
		},
		{
			src: '/images/grid10.jpg',
			thumbnail: '/images/grid9.jpg',
			caption: 'Feasting',
			width: 2000,
			height: 'auto'
		},
		{
			src: '/images/grid11.jpg',
			thumbnail: '/images/grid9.jpg',
			caption: 'Holiday cups in a carousel',
			width: 2000,
			height: 'auto'
		},
		{
			src: '/images/grid12.jpg',
			thumbnail: '/images/grid9.jpg',
			caption: 'Consecutur adiscip elit',
			width: 2000,
			height: 'my techie stuff'
		},
		]

	return (
		<Flex  justifyContent="center" align="center" p={20}>
			
			<SRLWrapper>	
				
				<Grid templateColumns='repeat(3, 1fr)' gap={7} >  
					{
						images.map((image, idx)=>(
							<MotionFlex  borderRadius="md" whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.9 }} >			
									<Image src={image.src} data-aos="zoom-in" alt={image.caption} borderRadius="20px" boxShadow="3px 2px 2px gray"/>
							</MotionFlex>
						))
					}
				</Grid>
			</SRLWrapper>
			
			
		</Flex>
	)
}
