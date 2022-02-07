import Head from 'next/head';
import {Box} from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout =({children})=>(
<>
    <Head>
        <title>Real Estate</title>
    </Head>
    <Box maxWidth="1500px" m="auto" bg ="blackAlpha.900"  >
        <header>
           <Navbar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </Box>
</>
)
export default Layout;