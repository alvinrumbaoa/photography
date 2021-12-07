import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image' 
import {Flex, Text, Spacer , Button, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'



const Nav = () => {

	const breakpoints = createBreakpoints({
		sm: '30em',
		md: '48em',
		lg: '62em',
		xl: '80em',
		'2xl': '96em',
	  })

	const {toggleColorMode} = useColorMode()


	return (
	
		<Flex direction="Column" justifyContent="spaceBetween">
			{/* <Switch onChange={toggleColorMode} justifyContent="center"/> */}
			<Button m={3} colorScheme='' color="#fff" variant='solid'> <Link href="/about">About</Link></Button>
			<Button m={3} colorScheme='' color="#fff" variant='solid'> Contact</Button>
			<Button m={3} colorScheme=''  color="#fff" variant='solid'>Portfolio</Button>
        </Flex>
	)
}


export default Nav;