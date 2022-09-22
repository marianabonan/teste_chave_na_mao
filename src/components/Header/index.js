import React from 'react';
import { Container } from './styled';
import { Input } from '../Input';

export const Header = ({searchCard, setMoviesList}) => {

  return (
      <Container>
        <Input searchCard={searchCard} setMoviesList={setMoviesList}/>
      </Container>
  );
};
