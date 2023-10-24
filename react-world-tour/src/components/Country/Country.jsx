import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry }) => {
    const { name, flags, population, area, cca3 } = country;

    const [Visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!Visited);
    }

    const passWithParams = () => {
        handleVisitedCountry(country);
    }


    return (
        <div className={`country ${Visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{ color: Visited ? 'white' : 'red' }}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark Visited</button>
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Going'}</button>
            {Visited ? 'I have visited this country' : 'I want to visit'}

        </div>
    );
};

export default Country;