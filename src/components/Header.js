import React, { useState } from "react";
import CharacterList from './CharacterList';
import { Link } from 'react-router-dom';
import SearchForm from "./SearchForm";


export default function Header() {
  const [characters, setCharacters] = useState([]);
  return (
    <header className="ui centered">
      <SearchForm characters={characters} setCharacters={setCharacters} />
      <Link to={`/`}>
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </Link>
      <CharacterList setCharacters={setCharacters} filteredCharacters={characters} />
    </header>
  );
}
