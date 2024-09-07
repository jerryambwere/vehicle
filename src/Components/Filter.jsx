import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Filter.css'; // Assuming you will add some CSS styles in this file

const Filter = ({ data, setData }) => {
  const [brand, setBrand] = useState('');
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (e) => {
    setBrand(e.target.value);
  };

  // Filter the data only if the brand is not empty
  const filteredData = brand
    ? data.filter((item) =>
        item.brand.toLowerCase().includes(brand.toLowerCase())
      )
    : [];

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Enter Brand"
        value={brand}
        onChange={handleChange}
        className="filter-input"
      />

      {brand && filteredData.length > 0 ? (
        <div className="filtered-results">
          {filteredData.map((item) => (
            <div key={item.id} className="result-item">
              <h3 className="result-brand">{item.brand}</h3>
              <p className="result-model">{item.model}</p>
              <p className="result-year">{item.year}</p>
              <div className="result-engine">
                <strong>Engine:</strong>
                <ul>
                  <li>Type: {item.engine.type}</li>
                  <li>Displacement: {item.engine.displacement}</li>
                  <li>Power (HP): {item.engine.power_hp}</li>
                </ul>
              </div>
              <div className="result-mileage">
                <strong>Mileage:</strong>
                <ul>
                  <li>City MPG: {item.fuel_efficiency.city_mpg}</li>
                  <li>Highway MPG: {item.fuel_efficiency.highway_mpg}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : brand ? (
        <p className="no-results">No brands found</p>
      ) : null}
    </div>
  );
};

export default Filter;
