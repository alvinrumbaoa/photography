import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Flex, Text, Box, Button, Heading, Input , useColorMode, useColorModeValue} from '@chakra-ui/react'

export default function Home() {
  const {toggleColorMode} = useColorMode()
  const formBackground = useColorModeValue("gray.100" , "gray.700")

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to my Page| Maica Rumbaoa </title>
        <meta name="description" content="Maica Rumbaoa, Photographer based in Orange County, California" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <Flex height="100vh" alignItems="center"  direction="column" justifyContent="center">
        <Button onClick={toggleColorMode}>Toggle Dark mode</Button>
        <Button>About</Button>
        <Button>Contact</Button>
        <Button>Portfolio</Button>
        <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  Maica Rumbaoa Photography
</Text>

       

      </Flex>
     
    </div>
  )
}
