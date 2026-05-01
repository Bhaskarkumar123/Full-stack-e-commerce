import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";

const CountryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const countries = [
    'India',
    'USA',
    'UK',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'Japan',
    'China',
    'France',
    'Russia',
    'Nepal',
    'Spain',
    'South Africa',
    'Italy',
    'Mexico',
    'South Korea'
  ];

  return (
    <>
      <div className="country-dropdown-container" style={{ position: 'relative' }}>
        <Button className='countryDrop' onClick={toggleDropdown}>
          <div className='info d-flex flex-column'>
            <span className='label'>Your Location</span>
            <span className='name'>India</span>
          </div>
          <span className={`ml-auto icon ${isOpen ? 'rotate-180' : ''}`} style={{ transition: 'transform 0.3s' }}>
            <FaAngleDown />
          </span>
        </Button>
        {isOpen && (
          <div className="country-list" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 1000,
            maxHeight: '200px',
            overflowY: 'auto'
          }}>
            {countries.map((country, index) => (
              <div
                key={index}
                className="country-item"
                style={{
                  padding: '12px 16px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee'
                }}
                onClick={() => setIsOpen(false)}
              >
                {country}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CountryDropdown;
