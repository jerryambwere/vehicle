import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DataDisplay.css"; // Import the CSS file

const SingleData = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://project22.vercel.app/vehicles/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">
  <div class="loader">
    <div class="loader_cube loader_cube--color"></div>
     <div class="loader_cube loader_cube--glowing"></div>
  </div></div>;
  if (error) return <div className="error">Error: {error.message}</div>;
  if (!data) return <div className="no-data">No data found</div>;

  return (
    <div className="single-data-container">
      <h1 className="data-title">
        {data.brand} {data.model}
      </h1>
      <p className="data-year">Year: {data.year}</p>
      <div className="data-engine">
        <h2>Engine Details</h2>
        <ul>
          <li>Type: {data.engine.type}</li>
          <li>Displacement: {data.engine.displacement}</li>
          <li>Power (HP): {data.engine.power_hp}</li>
        </ul>
      </div>
      <div className="data-fuel-efficiency">
        <h2>Fuel Efficiency</h2>
        <ul>
          <li>City MPG: {data.fuel_efficiency.city_mpg}</li>
          <li>Highway MPG: {data.fuel_efficiency.highway_mpg}</li>
        </ul>
      </div>
    </div>
  );
};

export default SingleData;
