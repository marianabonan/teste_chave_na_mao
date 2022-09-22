import React from 'react';

// import {HiMagnifyingGlass} from "react-icons/hi"
import { Input } from '../Input';

export const Heather = (searchCard, setMoviesList) => {

  return (
    <div>
      <div>
        <Input searchCard={searchCard} setMoviesList={setMoviesList}/>
        <button>oie</button>
      </div>
    </div>
  );
};
