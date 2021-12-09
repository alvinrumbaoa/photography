import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image' 
import {Flex, Text, Spacer , Button, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { motion } from "framer-motion";
import {animationOne, transition} from "../animation/animation";

const MotionFlex = motion.custom(Flex)

const contact = ()=> {



	return (

		<Flex direction="Column" justifyContent="center" initial={{opacity: 0}} animate={{opacity: 1}}exit={{opacity: 0 }} variants={animationOne} transition={transition}>
			<Text bgGradient='linear(to-l, #000, #FFFAF0)' bgClip='text' fontSize='7xl' textShadow="-3px -2px #fff" fontWeight='extrabold' align="right" justifyContent="center" m={10}> Follow Us:</Text>
		</Flex>

	)
}


export default contact

