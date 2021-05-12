import React from "react";
import Image2 from "../Images/Saly-13.svg";
export const Main2 = () => {
  return (
    <div className="sub">
      <div className="sub__container">
        <div className="sub__heading">
          <div className="sub__heading-1">
            <div className="sub__heading-circle" />
            <h2>
              Listen and <br /> Download Music
            </h2>
            <p>
              In our app you can download the music both in the app <br />
              itself on your Smartphone. Try this feature today.
            </p>
          </div>
          <div className="sub__heading-2">
            <div className="circle" />
            <div className="sub__heading-text">
              <h3>Downloading in the app</h3>
              <p>
                Owenrs of the reqular version of Move Music <br /> can only
                download music in the app and listen to <br /> it without the
                internet
              </p>
            </div>
          </div>
          <div className="sub__heading-3">
            <div className="circle" />
            <div className="sub__heading-text">
              <h3>
                Downloading to <br /> your Smartphone
              </h3>
              <p>
                Owenrs of the reqular version of Move Music <br /> can only
                download music in the app and listen to <br /> it without the
                internet
              </p>
            </div>
          </div>
        </div>
        <div className="sub__img">
          <div className="sub__img--circle" />
          <img src={Image2} alt="saly" />
        </div>
      </div>
    </div>
  );
};
