import React from 'react'
import { Stack, HStack, VStack , Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import {Flex,Image, Button} from '@chakra-ui/react'
import { motion } from "framer-motion";
import {animationOne, transition} from "../animation/animation";


const Nav = () => {

	const MotionFlex = motion(Flex);

	return (
		
		<MotionFlex direction="row" justifyContent="spaceBetween" initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
			<HStack spacing="20px">
				<Tooltip label="Home" >
				<Button m={3} size="md" color="#fff" bg="none" variant='solid'><Link href="/"><Image src="images/Home Page.svg" alt="" boxSize="60px" /></Link></Button>
				</Tooltip>
				<Tooltip label="About" >   
					<Button m={3} size="md" color="#fff"bg="none" variant='solid'><Link href="/about"><Image src="images/about.svg" alt=""  boxSize="60px"/></Link></Button>	
				</Tooltip>
				<Tooltip label="Contact" > 
					<Button m={3} size="md" color="#fff" bg="none" variant='solid'><Link href="/contact"><Image src="images/contact.svg" alt="" boxSize="60px"/></Link></Button>
				</Tooltip>
				<Tooltip label="Galleries" >  
					<Button m={3} size="md"  color="#fff" bg="none" variant='solid'><Link href="/portfolio"><Image src="images/works.svg" alt="" boxSize="60px"/></Link></Button>
				</Tooltip>

			</HStack>
			
        </MotionFlex>
	)
}


export default Nav;	