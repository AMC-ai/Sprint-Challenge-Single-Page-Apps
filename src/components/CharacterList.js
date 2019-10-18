import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';


export default function CharacterList(props) {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((response) => {
        // console.log(response);
        setCharacter(response.data.results);
        props.setCharacters(response.data.results);

      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <section className="character-list">
      {props.filteredCharacters.map((person) => (
        <CharacterCard char={person} key={person.id} />
      ))}
    </section>
  );
}
