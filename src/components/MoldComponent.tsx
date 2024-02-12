import styled from "styled-components";
import Buttons from "./Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 350px;
  p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    color: #b8b7b7;
  }
  h1 {
    margin-bottom: 10px;
    font-size: 80px;
    font-weight: 700;
    line-height: 104px;
    letter-spacing: 0px;
    text-align: left;
  }
  a {
    font-family: Spartan;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;

    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0px;
    text-align: left;
    color: #b8b7b7;
    margin-bottom: 3em;
  }
`;

const Source = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  width: 350px;
  gap: 10px;
`;

const Image = styled.img`
  max-width: 582px;
  max-height: 582px;
`;

const AdditionalImage = styled.img`
  position: absolute;
  top: 50%;
  left: 25%;
  max-width: 150px;
`;

interface PlanetProps {
  planetImg: string | undefined;
  planetAdditonalImg?: string | undefined;
  planetName: string;
  planetDesc: string;
  source: string | undefined;
  onOverView: React.MouseEventHandler<HTMLButtonElement>;
  onInternalStructure: React.MouseEventHandler<HTMLButtonElement>;
  onSurfaceGeology: React.MouseEventHandler<HTMLButtonElement>;
  isOverViewActive: boolean;
  isInternalStructureActive: boolean;
  isSurfaceGeologyActive: boolean;
}

export default function MoldComponent({
  planetImg,
  planetAdditonalImg,
  planetName,
  planetDesc,
  source,
  onOverView,
  onInternalStructure,
  onSurfaceGeology,
  isOverViewActive,
  isInternalStructureActive,
  isSurfaceGeologyActive,
}: PlanetProps) {
  return (
    <>
      <Container>
        <div>
          <Image src={planetImg} alt="" />
          <AdditionalImage src={planetAdditonalImg} alt="" />
        </div>
        <Info>
          <span>
            <h1>{planetName}</h1>
            <p>{planetDesc}</p>
          </span>
          <Source>
            <p>Source: </p>
            <a href={source}>WikiPedia ↗</a>
          </Source>
          <div>
            <Buttons
              isOverViewActive={isOverViewActive}
              isInternalStructureActive={isInternalStructureActive}
              isSurfaceGeologyActive={isSurfaceGeologyActive}
              overView={onOverView}
              internalStructure={onInternalStructure}
              surfaceGeology={onSurfaceGeology}
            />
          </div>
        </Info>
      </Container>
    </>
  );
}
