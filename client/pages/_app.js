import { ChakraProvider } from '@chakra-ui/react'
import SimpleReactLightbox from 'simple-react-lightbox';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
       <SimpleReactLightbox>
         <Component {...pageProps} />
       </SimpleReactLightbox>
    </ChakraProvider>
  )
}

export default MyApp
