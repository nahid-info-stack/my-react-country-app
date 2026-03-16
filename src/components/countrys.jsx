import React, { use } from 'react';
import Country from './country/country';

const Countrys = ({countrysPromise}) => {
    const countriesData = use(countrysPromise);
    const countrys = countriesData.countries;
    console.log(countrys)
    
    return (
        <div>
            <h1> Countrys:{countrys.length}</h1>
            {
               countrys. map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countrys;