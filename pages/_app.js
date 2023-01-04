import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../component/layout/main'

const Website = ({Components, pageProps, router}) => {
    return (
        <ChakraProvider>
            <Layout router={router}>
                <Components {...pageProps} key={router.route} /> 

            </Layout>
        </ChakraProvider>
    )
}

export default Website