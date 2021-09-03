import React, {useState, useEffect} from 'react';
import {Box, ScrollView} from 'native-base';
import {gql, useQuery} from '@apollo/client';

import Screen from '../../layouts/Screen';
import ListItem from '../../components/ListItem';
import SearchBar from '../../components/SearchBar';
import PageCtrlBar from '../../components/PageCtrlBar';

export type ICharacter = {
  id: string;
  name: string;
  gender: string;
  species: string;
  image: string;
  episode: Array<object>;
};

const QUERY = gql`
  query Sections($pageNumber: Int!, $phrase: String!) {
    characters(page: $pageNumber, filter: {name: $phrase}) {
      results {
        id
        name
        image
        species
        gender
        episode {
          id
          name
          air_date
        }
      }
    }
  }
`;

const CharacterList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [phrase, setPhrase] = useState('');

  const {data, loading} = useQuery(QUERY, {
    variables: {pageNumber: pageNumber, phrase: phrase},
  });

  useEffect(() => {
    setPageNumber(1);
  }, [phrase]);

  return (
    <Screen hasHeader title="Character List" isLoading={loading}>
      <Box flex={1}>
        <SearchBar
          value={phrase}
          onChange={(value: string) => {
            setPhrase(value);
          }}
        />
        <PageCtrlBar
          pageCount={pageNumber}
          disableNextBtn={data?.characters.results.length < 20 ? true : false}
          increaseCount={() => {
            setPageNumber(prev => prev + 1);
          }}
          decreaseCount={() => {
            setPageNumber(prev => prev - 1);
          }}
        />
        <ScrollView flex={1} w="100%" showsVerticalScrollIndicator={false}>
          {data?.characters.results.length > 0 &&
            data?.characters.results.map((item: ICharacter) => (
              <ListItem key={item.id} data={item} />
            ))}
        </ScrollView>
      </Box>
    </Screen>
  );
};

export default CharacterList;
