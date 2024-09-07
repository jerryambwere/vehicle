import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./DataDisplay.css"; // Import the CSS file

const DataDisplay = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/SingleData/${id}`);
  };

  const filteredData = data.filter(
    (item) => item && item.id && item.brand && item.model && item.year
  );

  if (filteredData.length === 0) {
    return <p className="no-data">No data available.</p>;
  }

  return (
    <div className="data-display-container">
      {filteredData.map((item) => (
        <div key={item.id} className="data-item">
          <div className="data-content">
            <h2 className="data-brand">{item.brand}</h2>
            <p className="data-model">Model: {item.model}</p>
            <p className="data-year">Year: {item.year}</p>
          </div>
          <button className="info-button" onClick={() => handleClick(item.id)}>
            <FontAwesomeIcon
              size="2x"
              icon={faCircleInfo}
              style={{ color: "#B197FC" }}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
