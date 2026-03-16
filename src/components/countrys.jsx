import React, { use } from 'react';
import Country from './country/country';
import '../components/countrys/countrys.css'

const Countrys = ({countrysPromise}) => {
    const countriesData = use(countrysPromise);
    const countrys = countriesData.countries;
    //console.log(countrys)
    
    return (
        <div className='countrys-container'>
            
            {
               countrys. map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countrys;