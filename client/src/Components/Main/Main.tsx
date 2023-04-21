import React from "react";
import HelperSection from "./HelperSection";
import Hero from "./Hero";
import PopularSection from "./PopularSection";

type Props = {};
const helperSectionImages = {
  1: "https://i.postimg.cc/CxWcF5T9/pexels-rodnae-productions-6708799-1.png",
  2: "https://i.postimg.cc/VN9kYKHM/clasp-gbc0aafe19-1920.png",
};
function Main({}: Props) {
  return (
    <div className="main">
      <Hero></Hero>
      <PopularSection />
      <HelperSection
        img={helperSectionImages[1]}
        title="for your partner"
        body="Give them a gift to remind them of your love"
        buttonText="Discover"
      />
      <HelperSection
        img={helperSectionImages[2]}
        title="For your little one"
        body="Find out how cute could they look"
        buttonText="Shop Now"
      />
    </div>
  );
}

export default Main;
