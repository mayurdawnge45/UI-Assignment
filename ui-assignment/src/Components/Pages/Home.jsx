import React from "react";
import Banner from "../Banner/Banner";
import HomeCards from "../HomeCards/HomeCards";
import HowMuch from "../HowMuch/HowMuch";
import StreamSlider from "../StremSlider/StreamSlider";

const Home = () => {
  return (
    <>
      <Banner />
      <HomeCards />
      <HowMuch />
      <StreamSlider />
    </>
  );
};

export default Home;
