import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Flex, Button, Heading, Input , useColorMode, useColorModeValue} from '@chakra-ui/react'

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
        <Flex direction="column" background={formBackground} p={12} rounded={6} >
          <Heading mb={6}>Welcome</Heading>
          <Input placeholder="alvinrumbaoa@gmail.com" variant="filled" mb={3} type="email"/>
          <Input placeholder="****" varient="filled" mb={6} type="password"/> 
        <Button colorScheme="orange">Submit</Button>
       
        </Flex>
      </Flex>
     
    </div>
  )
}
