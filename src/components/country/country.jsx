import React from 'react';

const Country = ({country}) => {
    //console.log(country)
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Country Name: {country.name.common}</h3>
            <p>Area: {country.area.area}</p>
            <p>Population: {country.population.population} </p>
            <p>Religion: {country.region.region} </p>
        </div>
    );
};

export default Country;