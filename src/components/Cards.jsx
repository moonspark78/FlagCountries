import React from 'react'
import "./Cards.css"

export const Cards = ({countries}) => {
  return (
    <div className='card'>
      {countries.map((country, index) => (
          <div key={index}>
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital}</p>
            {country.flags.png && (
              <img
                src={country.flags.png}
                alt={`${country.name.common} Flag`}
                style={{ width: '100px', height: 'auto' }}
              />
            )}
          </div>
        ))}
    </div>
  )
}
