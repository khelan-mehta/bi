import React from "react";

const NavOrbitIon = () => {
  return (
    <div className="outer">
      <div className="loading-icon">
        <div className="inner">
          <div className="back-circle"></div>
          <div className="planet-container">
            <div className="planet-outer">
              <div className="planet"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DualOrbitIon = () => {
  return (
    <div className="outer">
      <div className="loading-icon">
        <div className="inner">
          <div className="planet-container">
            <div className="planet-outer">
              <div className="planet"></div>
            </div>
          </div>
          <div className="planet-container">
            <div className="planet-outer-rev">
              <div className="planet"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavOrbitIon;
