import React from "react";

const OverallCard = ({ platform, username, followers, change, changeType }) => {
  const platformClass = `bar bar-${platform}`;
  const changeClass = `overall-today ${
    changeType === "up" ? "overall-up" : "overall-down"
  }`;

  return (
    <div className="overall-card">
      <div className={platformClass}></div>
      <div className="profile">
        <div className="icon">
          <img src={`/images/icon-${platform}.svg`} alt={`${platform} icon`} />
        </div>
        <p>{username}</p>
      </div>
      <p className="overall-number">{followers}</p>
      <p className="overall-unit text-regular">Followers</p>
      <div className={changeClass}>
        <div className="icon">
          <img
            src={`/images/icon-${changeType}.svg`}
            alt={`${changeType} icon`}
          />
        </div>
        <p>{change} Today</p>
      </div>
    </div>
  );
};

export default OverallCard;
