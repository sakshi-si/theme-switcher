
import React from "react";

const OverviewCard = ({ title, platform, value, change, changeType }) => {
  const changeClass = `overview-status ${
    changeType === "up" ? "overview-up" : "overview-down"
  }`;

  return (
    <div className="overview-card">
      <div className="overview-title">
        <p>{title}</p>
        <div className="icon">
          <img src={`images/icon-${platform}.svg`} alt={`${platform} icon`} />
        </div>
      </div>
      <div className={changeClass}>
        <p>{value}</p>
        <div className="overview-up">
          <div className="icon">
            <img src={`images/icon-${changeType}.svg`}
              alt={`${changeType} icon`}
            />
          </div>
          <p>{change}%</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
