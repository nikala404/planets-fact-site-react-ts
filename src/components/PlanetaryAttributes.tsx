import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5em;

  div {
    width: 300px;
    height: 123px;
    border: 1px solid #8d8c8c;
    padding-left: 30px;
  }
  div p {
    color: #b8b7b7;
    font-size: 13px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2.5714285373687744px;
    text-align: left;
    margin-bottom: 10px;
    margin-top: 30px;
  }
  div h1 {
    margin-top: 0px;
  }
`;

interface PlanetaryAttributesProps {
  rotationTime: string;
  revolutionTime: string;
  radius: string;
  temperature: string;
}
export default function PlanetaryAttributes({
  rotationTime,
  revolutionTime,
  radius,
  temperature,
}: PlanetaryAttributesProps) {
  return (
    <>
      <Container>
        <div>
          <p>ROTATION TIME</p>
          <h1>{rotationTime}</h1>
        </div>
        <div>
          <p>REVOLUTION TIME</p>
          <h1>{revolutionTime}</h1>
        </div>
        <div>
          <p>RADIUS</p>
          <h1>{radius}</h1>
        </div>
        <div>
          <p>AVERAGE TEMP.</p>
          <h1>{temperature}</h1>
        </div>
      </Container>
    </>
  );
}
