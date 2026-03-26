import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";


import { LoadingScreen } from "../components/LoadingScreen";

import styles from "../styles/Home.module.css";

export const App = () => {
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/data"); 
      const data = await res.json();
      setWeatherData(data);
    };
    getData();
  }, []);

  return weatherData ? (
    <div className={styles.wrapper}>
      <MainCard
        city={"Nantes"}
        country={"FR"}
        description={weatherData?.current?.temperature_2m}
        iconName={weatherData.current?.weather_code}
        unitSystem={"metric"}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={"metric"} />
        </Header>
      </ContentBox>
    </div>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
