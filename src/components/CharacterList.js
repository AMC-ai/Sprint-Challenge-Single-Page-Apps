import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((response) => {
        // console.log(response);
        setCharacter(response.data.results);

      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <section className="character-list">
      {character.map((person) => (
        <CharacterCard char={person} key={person.id} />
      ))}
    </section>
  );
}
