import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DATA from "./data.json";

import PlanetaryAttributes from "./components/PlanetaryAttributes";
import MoldComponent from "./components/MoldComponent";
import Mercury from "./assets/planet-mercury.svg";
import Venus from "./assets/planet-venus.svg";
import Earth from "./assets/planet-earth.svg";
import Mars from "./assets/planet-mars.svg";
import Jupiter from "./assets/planet-jupiter.svg";
import Saturn from "./assets/planet-saturn.svg";
import Uranus from "./assets/planet-uranus.svg";
import Neptune from "./assets/planet-neptune.svg";

import MercuryInternal from "./assets/planet-mercury-internal.svg";
import VenusInternal from "./assets/planet-venus-internal.svg";
import EarthInternal from "./assets/planet-earth-internal.svg";
import MarsInternal from "./assets/planet-mars-internal.svg";
import JupiterInternal from "./assets/planet-jupiter-internal.svg";
import SaturnInternal from "./assets/planet-saturn-internal.svg";
import UranusInternal from "./assets/planet-uranus-internal.svg";
import NeptuneInternal from "./assets/planet-neptune-internal.svg";

import MercuryGeology from "./assets/geology-mercury.png";
import VenusGeology from "./assets/geology-venus.png";
import EarthGeology from "./assets/geology-earth.png";
import MarsGeology from "./assets/geology-mars.png";
import JupiterGeology from "./assets/geology-jupiter.png";
import SaturnGeology from "./assets/geology-saturn.png";
import UranusGeology from "./assets/geology-uranus.png";
import NeptuneGeology from "./assets/geology-neptune.png";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #070724;
    font-family: "Antonio", sans-serif;
    color: white;
  }
`;

const StyledHeader = styled.header`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ffffff;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 20px;
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: -1.0499999523162842px;
    text-align: left;
    cursor: pointer;
    color: #ffffff;
    transition: transform 0.3s;
  }

  ul:last-child li {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 2px;
    text-align: left;
    width: 67px;
    height: 25px;
    font-weight: 700;
    color: #969292;
  }

  ul:last-child li:hover {
    color: #ffffff;
    border-bottom: 2px solid #ffffff;
    transform: translateY(-3px);
  }

  ul:last-child li.active {
    color: white;
    border-bottom: 2px solid white;
    transform: translateY(-3px);
  }
`;

const PlanetComponents = [
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
];

const PlanetInternalComponents = [
  MercuryInternal,
  VenusInternal,
  EarthInternal,
  MarsInternal,
  JupiterInternal,
  SaturnInternal,
  UranusInternal,
  NeptuneInternal,
];

const PlanetGeologyComponents = [
  MercuryGeology,
  VenusGeology,
  EarthGeology,
  MarsGeology,
  JupiterGeology,
  SaturnGeology,
  UranusGeology,
  NeptuneGeology,
];

function App() {
  const [active, setActive] = useState<string | number>();
  const [planetName, setPlanetName] = useState<number | undefined>();
  const [isOverViewActive, setIsOverViewActive] = useState<boolean>(false);
  const [isInternalStructureActive, setIsInternalStructureActive] =
    useState<boolean>(false);
  const [isSurfaceGeologyActive, setIsSurfaceGeologyActive] =
    useState<boolean>(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * DATA.length);
    setPlanetName(randomIndex);
    setActive(randomIndex);
    setIsOverViewActive(true);
  }, []);

  const handlePlanetName = (
    _e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setPlanetName(index);
    setActive(index);
    setIsOverViewActive(true);
    setIsInternalStructureActive(false);
    setIsSurfaceGeologyActive(false);
  };

  const handlePlanetOverview = () => {
    setIsOverViewActive(true);
    setIsInternalStructureActive(false);
    setIsSurfaceGeologyActive(false);
  };

  const handlePlanetInternalStructure = () => {
    setIsOverViewActive(false);
    setIsInternalStructureActive(true);
    setIsSurfaceGeologyActive(false);
  };

  const handlePlanetSurfaceGeology = () => {
    setIsOverViewActive(false);
    setIsInternalStructureActive(false);
    setIsSurfaceGeologyActive(true);
  };

  return (
    <>
      <GlobalStyle />
      <StyledHeader>
        <nav>
          <ul>
            <li>THE PLANETS</li>
          </ul>
          <ul>
            {DATA.map((item, index) => (
              <li
                key={index}
                onClick={(e) => handlePlanetName(e, index)}
                id={index.toString()}
                className={active === index ? "active" : ""}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </StyledHeader>
      {planetName !== undefined && (
        <>
          {isOverViewActive && (
            <MoldComponent
              planetImg={PlanetComponents[planetName]}
              planetName={DATA[planetName].name}
              planetDesc={DATA[planetName].overview.content}
              source={DATA[planetName].overview.source}
              onOverView={handlePlanetOverview}
              onInternalStructure={handlePlanetInternalStructure}
              onSurfaceGeology={handlePlanetSurfaceGeology}
              isOverViewActive={isOverViewActive}
              isInternalStructureActive={isInternalStructureActive}
              isSurfaceGeologyActive={isSurfaceGeologyActive}
            />
          )}
          {isInternalStructureActive && (
            <MoldComponent
              planetImg={PlanetInternalComponents[planetName]}
              planetName={DATA[planetName].name}
              planetDesc={DATA[planetName].structure.content}
              source={DATA[planetName].structure.source}
              onOverView={handlePlanetOverview}
              onInternalStructure={handlePlanetInternalStructure}
              onSurfaceGeology={handlePlanetSurfaceGeology}
              isOverViewActive={isOverViewActive}
              isInternalStructureActive={isInternalStructureActive}
              isSurfaceGeologyActive={isSurfaceGeologyActive}
            />
          )}
          {isSurfaceGeologyActive && (
            <MoldComponent
              planetImg={PlanetComponents[planetName]}
              planetAdditonalImg={PlanetGeologyComponents[planetName]}
              planetName={DATA[planetName].name}
              planetDesc={DATA[planetName].geology.content}
              source={DATA[planetName].geology.source}
              onOverView={handlePlanetOverview}
              onInternalStructure={handlePlanetInternalStructure}
              onSurfaceGeology={handlePlanetSurfaceGeology}
              isOverViewActive={isOverViewActive}
              isInternalStructureActive={isInternalStructureActive}
              isSurfaceGeologyActive={isSurfaceGeologyActive}
            />
          )}
          <PlanetaryAttributes
            rotationTime={DATA[planetName]?.rotation}
            revolutionTime={DATA[planetName]?.revolution}
            radius={DATA[planetName]?.radius}
            temperature={DATA[planetName]?.temperature}
          />
        </>
      )}
    </>
  );
}

export default App;
