import React, { use } from 'react';
import './country.css';

const Country = ({country}) => {
    //console.log(country)
    const handleVisited = () => {
        //console.log("Button Clicked...")
    }
   
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Country Name: {country.name.common}</h3>
            <p>Area: {country.area.area}{country.area.area > 300000 ? "Big Countriy" : "Small Countriy"}</p>
            <p>Population: {country.population.population} </p>
            <p>Religion: {country.region.region} </p>

            <button onClick={handleVisited}> {Visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;

/**
 *  1. inline css (style object)
 * 2.
 */