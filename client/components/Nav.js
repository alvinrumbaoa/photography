import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image' 
import {Flex, Text, Spacer , Button, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { motion } from "framer-motion";
import {animationOne, transition} from "../animation/Animation";


const Nav = () => {

	const MotionFlex = motion.custom(Flex);	
	const {toggleColorMode} = useColorMode()


	return (
	
		<MotionFlex direction="Column" justifyContent="spaceBetween" initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
			<Button m={1} colorScheme='' color="#fff" variant='solid'>Home</Button>
			<Button m={1} colorScheme='' color="#fff" variant='solid'>About</Button>
			<Button m={1} colorScheme='' color="#fff" variant='solid'>Contact</Button>
			<Button m={1} colorScheme=''  color="#fff" variant='solid'>Portfolio</Button>
        </MotionFlex>
	)
}


export default Nav;	