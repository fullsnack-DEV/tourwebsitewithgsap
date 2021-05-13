import React from "react";
import Image2 from "../Images/Saly-13.svg";
export const Main2 = () => {
  return (
    <div className="sub">
      <div className="sub__container">
        <div className="sub__img">
          <div className="sub__img-circle" />
          <img src={Image2} alt="" className="sub__img-svg" />
        </div>
        <div className="sub__heading">
          <div className="sub__heading-container">
            <div className="sub__heading-container--1">
              <div className="sub__heading-circle" />
              <h2>
                Listen and <br /> Download Music
              </h2>
              <p>
                In our app you can download the music both in the app itself{" "}
                <br /> and on on your Smartphone. Try this feature today.
              </p>
            </div>
            <div className="sub__heading-container--2">
              <div className="sub__heading-container-circle" />

              <div className="sub__heading-container-text">
                <h3>Downloading in the app</h3>
                <p>
                  We analyze your media library and create <br /> Playlist that
                  match yout mood and music <br /> preferences.
                </p>
              </div>
            </div>
            <div className="sub__heading-container--3">
              <div className="sub__heading-container-circle" />
              <div className="sub__heading-container-text">
                <h3>Downloding to your smartphone</h3>
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
