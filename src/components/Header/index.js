import React from 'react';

// import {HiMagnifyingGlass} from "react-icons/hi"
import { Input } from '../Input';

export const Header = ({searchCard, setMoviesList}) => {

  return (
    <div>
      <div>
        <Input searchCard={searchCard} setMoviesList={setMoviesList}/>
      </div>
    </div>
  );
};
