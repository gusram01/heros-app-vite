import { ChangeEventHandler, FC, FormEvent } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

interface Props {
  searchHeros: (event: FormEvent<HTMLFormElement>) => void;
  setNewInputValue: ChangeEventHandler<HTMLInputElement>;
  searchTerm: string;
}

const SearchBar: FC<Props> = ({
  searchHeros,
  searchTerm,
  setNewInputValue,
}) => {
  return (
    <form onSubmit={searchHeros}>
      <Box p={6} maxW={96}>
        <FormControl>
          <FormLabel>Search</FormLabel>

          <Input
            type="text"
            placeholder="type your hero..."
            value={searchTerm}
            onChange={setNewInputValue}
            name="searchTerm"
          />
        </FormControl>

        <Center mt={6}>
          <Button type="submit" colorScheme="yellow" variant="outline">
            search
          </Button>
        </Center>
      </Box>
    </form>
  );
};

export default SearchBar;
