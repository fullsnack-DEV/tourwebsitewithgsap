import React from "react";
import Phoneimg from "../Images/Saly-24.svg";

export const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__img">
          <div className="main__img-circle" />
          <img src={Phoneimg} alt="" className="main__img-svg" />
        </div>
        <div className="main__heading">
          <div className="main__heading-container">
            <div className="main__heading-container--1">
              <div className="main__heading-circle" />
              <h2>
                Be in a trend of <br /> new Music
              </h2>
              <p>
                Every week we create a new Playlists with current music <br />
                that most people listen to. Join them and be in the trend of new{" "}
                <br /> music
              </p>
            </div>
            <div className="main__heading-container--2">
              <div className="main__heading-container-circle" />

              <div className="main__heading-container-text">
                <h3>We adapt to you</h3>
                <p>
                  We analyze your media library and create <br /> Playlist that
                  match yout mood and music <br /> preferences.
                </p>
              </div>
            </div>
            <div className="main__heading-container--3">
              <div className="main__heading-container-circle" />
              <div className="main__heading-container-text">
                <h3>Your music your rules</h3>
                <p>
                  You can import your music from other music <br /> Platforms
                  and not waste time adding music match yout mood and music{" "}
                  <br /> Manually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
