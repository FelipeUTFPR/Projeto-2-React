import React, { useState, useEffect } from "react";

import{Link} from 'react-router-dom';


import axios from "axios";

import "./styl.css";






function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /* useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]); */

  const onSearch = () => {
      setFilteredCountries(
          countries.filter(country => 
            country.name.toLowerCase().includes(search.toLowerCase())
            )
      );
  };

  if (loading) {
    return <p>Loading countries...</p>;
  }

  return (
    <div className="Appp">
      <h1>Consulte um Pais:</h1>

      <Link to="/logout" className="btn btn-outline-primary">Log Out</Link>
      <br/><br/>
      <input
        type="text"
        placeholder="Search Countries"
        onChange={(e) => setSearch(e.target.value)}
      />
      
      
      <button onClick={onSearch} >Pesquisar</button>
      {filteredCountries.map((country, idx) => (
        <CountryDetail key={idx} {...country} />
        
      ))}
      
    </div>
  );
}

const CountryDetail = (props) => {
  const { name,capital,population,area,flag } = props;

  return (
    <div>
      <p>
      <br/>
        <img src={flag} alt={name} style={{ width: "200px", height: "150px" }} />
      </p>
      <p><strong>Pais:</strong> {name}</p> 
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>População:</strong> {population} Habitantes</p>
      <p><strong>Area:</strong> {area} Km²</p>
      <br/><br/>

      <hr/>

      </div>
  );
};

export default Dashboard;



        


                
