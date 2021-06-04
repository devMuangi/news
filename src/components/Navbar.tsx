import React from 'react';
import { Box, Divider, Flex, Heading, Link,Button, useColorMode} from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Navbar: React.FC<{}> = () => {
  const router = useRouter();
  const { colorMode , toggleColorMode} = useColorMode()

  return (
    <>
      <Flex justify="center" align="center" m={4}>
        <Heading onClick={() => router.push('/')} as="button">
          devMuangi
        </Heading>
  
        <Box>
            <Link 
            onClick={() => router.push('/about')}
            fontWeight={
                router.pathname === '/about' ? 'extrabold' : 'normal'
            }>
                about
            </Link>
        </Box>

        <Box>
            <Link 
            onClick={() => router.push('/about')}
            fontWeight={
                router.pathname === '/about' ? 'extrabold' : 'normal'
            }>
                github
            </Link>
        </Box>
        <Box>
              <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
        </Box>
      </Flex>
      <Divider
        css={{
          boxShadow: '1px 1px #888888',
        }}
      />
    </>
  );
};

export default Navbar;