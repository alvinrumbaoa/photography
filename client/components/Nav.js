import React from 'react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import {Flex,Image, Button} from '@chakra-ui/react'
import { motion } from "framer-motion";
import {animationOne, transition} from "../animation/Animation";


const Nav = () => {

	const MotionFlex = motion.custom(Flex);	



	return (
		
		<MotionFlex direction="Column"  direction="row" justifyContent="spaceBetween" initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
			<HStack spacing="20px">
		    	<Button m={3} size="md" color="#fff" variant='solid'><Link href="/"><Image src="images/Home Page.svg" alt="" boxSize="60px" /></Link></Button>
              <Button m={3} size="md" color="#fff" variant='solid'><Link href="/about"><Image src="images/about.svg" alt=""  boxSize="60px"/></Link></Button>
              <Button m={3} size="md" color="#fff" variant='solid'><Link href="/contact"><Image src="images/contact.svg" alt="" boxSize="60px"/></Link></Button>
              <Button m={3} size="md"  color="#fff" variant='solid'><Link href="/portfolio"><Image src="images/works.svg" alt="" boxSize="60px"/></Link></Button>

			</HStack>
			
        </MotionFlex>
	)
}


export default Nav;	