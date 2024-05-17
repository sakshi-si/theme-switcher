import React, { useState } from "react";
import "./style.css";
import Header from "./src/components/Header";
import OverallCard from "./src/components/OverallCard";
import OverviewCard from "./src/components/OverviewCard";
import Attribution from "./src/components/Attribution";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`theme ${theme === "light" ? "light" : "dark"}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <section className="overall">
          <div className="container">
            <div className="overall-cards">
              <OverallCard
                platform="facebook"
                username="@nathanf"
                followers="1987"
                change="12"
                changeType="up"
              />
              <OverallCard
                platform="twitter"
                username="@nathanf"
                followers="1044"
                change="99"
                changeType="up"
              />
              <OverallCard
                platform="instagram"
                username="@realnathanf"
                followers="11k"
                change="1099"
                changeType="up"
              />
              <OverallCard
                platform="youtube"
                username="@Nathan F."
                followers="8239"
                change="144"
                changeType="down"
              />
            </div>
          </div>
        </section>
        <section className="overview">
          <div className="container">
            <h3>Overview - Today</h3>
            <div className="overview-cards">
              <OverviewCard
                title="Page Views"
                platform="facebook"
                value="87"
                change="3"
                changeType="up"
              />
              <OverviewCard
                title="Likes"
                platform="facebook"
                value="52"
                change="2"
                changeType="down"
              />
              <OverviewCard
                title="Likes"
                platform="instagram"
                value="5462"
                change="2257"
                changeType="up"
              />
              <OverviewCard
                title="Profile Views"
                platform="instagram"
                value="52k"
                change="1375"
                changeType="up"
              />
              <OverviewCard
                title="Retweets"
                platform="twitter"
                value="117"
                change="303"
                changeType="up"
              />
              <OverviewCard
                title="Likes"
                platform="twitter"
                value="507"
                change="553"
                changeType="up"
              />
              <OverviewCard
                title="Likes"
                platform="youtube"
                value="107"
                change="19"
                changeType="down"
              />
              <OverviewCard
                title="Total Views"
                platform="youtube"
                value="1407"
                change="12"
                changeType="down"
              />
            </div>
          </div>
        </section>
      </main>
      <Attribution />
    </div>
  );
};

export default App;
