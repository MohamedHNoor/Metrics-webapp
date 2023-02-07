import React from 'react';
import PropTypes from 'prop-types';
import EachCountry from '../each-country/EachCountry';
import './all-countries.styles.css';

const AllCountry = ({ data }) => (
  <div className="countries-container">
    {data.map((country, idx) => (
      <EachCountry
        key={country.id}
        index={idx}
        id={country.id}
        image={country.image}
        population={country.population}
        name={country.name}
        langeuages={country.langeuages}
        capital={country.capital}
        timezone={country.timezone}
        subregion={country.subregion}
      />
    ))}
  </div>
);

AllCountry.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCountry;
