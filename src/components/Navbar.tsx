import React from 'react';
import { Box, Divider, Flex, Heading, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Navbar: React.FC<{}> = () => {
  const router = useRouter();

  return (
    <>
      <Flex justify="center" m={4}>
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