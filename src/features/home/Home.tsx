import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { SyntheticEvent } from 'react';

const Home = () => {
  const searchHeros = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <Container minH="calc(100vh - 96px)" minW="100%">
      <Center>
        <form onSubmit={searchHeros}>
          <Box p={6} maxW={96}>
            <FormControl>
              <FormLabel>Search</FormLabel>

              <Input type="text" placeholder="type your hero..." />
            </FormControl>

            <Center mt={6}>
              <Button type="submit" colorScheme="yellow" variant="outline">
                search
              </Button>
            </Center>
          </Box>
        </form>
      </Center>
    </Container>
  );
};

export default Home;
