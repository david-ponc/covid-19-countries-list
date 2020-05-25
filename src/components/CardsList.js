import React, { useState } from 'react';
import Card from '../components/Card';
import './styles/CardsList.css';

// function useFilteredCountries(countries, query) {
//   const [filteredContries, setFilteredContries] = useState(countries);
//   const result = countries.filter(country => {
//     return country.Country.toLowerCase().includes(query.toLowerCase());
//   });
//   if (result !== 0) setFilteredContries(result);
//   return filteredContries;
// }

class CardsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="grid">
          {this.props.countries.map(country => {
            return <Card key={country.CountryCode} country={country} />;
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default CardsList;
