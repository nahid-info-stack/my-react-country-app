import React, { use, useState } from 'react';
import './country.css';

const Country = ({country}) => {
    //console.log(country)
    const handleVisited = () => {
        //console.log("Button Clicked...")
        //setVisited(true)
        // option: 1.Basic if/else
         if(visited){
             setVisited(false)
         }else{
             setVisited(true)
         }
        // option: 2.ternary oparetor
        //setVisited(visited ? false : true);

        // option: 3.use logical not !
        //setVisited(!visited)
    }
   const [visited , setVisited] = useState(false)
    return (
        <div className={ ` country  ${visited ? 'country-visited' : 'country-notvisited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Country Name: {country.name.common}</h3>
            <p>Area: {country.area.area}{country.area.area > 300000 ? "Big Countriy" : "Small Countriy"}</p>
            <p>Population: {country.population.population} </p>
            <p>Religion: {country.region.region} </p>
            <p>Country Code: {country.cca3.cca3} </p>

            <button onClick={handleVisited}> {visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;

/**
 *  1. inline css (style object)
 * 2.
 */