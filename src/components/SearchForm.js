import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";



export default function SearchForm(props) {
  console.log(props)
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(props)
    const results = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    props.setCharacters(results);
    console.log(results)
  };

  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {/* <ul>
        {searchResults.map(item => (
          <li key={item.id}>{item}</li>
        ))}
      </ul> */}
    </section>
  );
};
