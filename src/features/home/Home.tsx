import { FormEvent, FC, useMemo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Center, Container } from '@chakra-ui/react';
import { parse } from 'query-string';

import { getHerosByQuery } from '../../core/services';
import Heros from '../shared/heros/Heros';

import SearchBar from './components/SearchBar';

import { useForm } from './hooks/useForm';

const Home: FC<RouteComponentProps> = ({ history, location }) => {
  const { q = '' } = parse(location.search) as { q: string };

  const { formState, setNewInputValue } = useForm({
    searchTerm: q,
  });

  const { searchTerm } = formState;

  const searchHeros = (event: FormEvent) => {
    event.preventDefault();

    if (searchTerm.length > 0) {
      history.push(`?q=${searchTerm}`);
      return;
    }
    history.push(location.pathname);
  };

  const filteredHeros = useMemo(() => {
    if (!q) {
      return [];
    }
    return getHerosByQuery(q);
  }, [q]);

  return (
    <Container minH="calc(100vh - 96px)" minW="100%">
      <Center>
        <SearchBar
          searchHeros={searchHeros}
          setNewInputValue={setNewInputValue}
          searchTerm={searchTerm}
        />
      </Center>

      <Center>{q !== '' && <Heros herosList={filteredHeros} />}</Center>
    </Container>
  );
};

export default Home;
