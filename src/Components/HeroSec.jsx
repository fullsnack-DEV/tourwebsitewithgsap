import React from "react";
import bgimg from "../Images/Saly-12.svg.svg";

export const HeroSec = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__heading">
          <div className="hero__heading--content">
            <h2>
              Introducing a new <br /> Music App Move <br /> Music!
            </h2>

            <p>
              Try the new Move messanger it will definetly impress you with its
              amazing feature that will make it easier for you to communicate
              with your friends.
            </p>
            <a href="/" className="hero__heading--a button">
              Start 14 days free trial
            </a>
            <h3>No credit required</h3>
          </div>
        </div>

        <div className="hero__img">
          <img src={bgimg} alt="mobile" className="hero__img--svg" />
        </div>
      </div>
    </div>
  );
};
