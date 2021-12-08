import React from 'react'
import Head from 'next/head'
import {Flex, Text} from '@chakra-ui/react'
import Nav from '../components/Nav';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { motion } from "framer-motion";
import {animationOne, transition} from "../animation/animation";

const MotionFlex = motion.custom(Flex)
const about =() => {
	return (
		<MotionFlex bg="#FFDBCF" height="100vh" direction="Column" initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
			<Flex justifyContent="start" p={10}>
					<Nav/>
			</Flex>
			<Flex>
				<Text fontSize="50px">My Name Is Maica Rumbaoa</Text>
			</Flex>
		</MotionFlex>
	)
}

export default about
