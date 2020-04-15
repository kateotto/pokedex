import React from "react";
import "./StatusBar.scss";

const StatusBar = ({ stats }) => {
  const base_width = stats.base_stat + "%";
  const base = stats.base_stat;
  return (
    <div className="status-container">
      <div
        className="status-bar"
        style={{
          width: base_width
        }}
      >
        <div className="status-text">{base}%</div>
      </div>
    </div>
  );
};

export default StatusBar;
