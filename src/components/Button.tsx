import styled from "styled-components";

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 10px;

  Button {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 48px;
    color: white;
    border: 1px solid #ffffff;
    background: none;
    padding-left: 30px;
  }
  Button p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2.5714285373687744px;
    text-align: left;
    color: #b8b7b7;
  }
  Button:hover {
    background: #419ebb;
    cursor: pointer;
  }
  .isActive {
    background: #419ebb;
  }
  .yle {
    background: none;
  }
`;
interface ButtonsProps {
  overView: React.MouseEventHandler<HTMLButtonElement>;
  internalStructure: React.MouseEventHandler<HTMLButtonElement>;
  surfaceGeology: React.MouseEventHandler<HTMLButtonElement>;
  isOverViewActive: boolean;
  isInternalStructureActive: boolean;
  isSurfaceGeologyActive: boolean;
}

export default function Buttons({
  overView,
  internalStructure,
  surfaceGeology,
  isOverViewActive = false,
  isInternalStructureActive = false,
  isSurfaceGeologyActive = false,
}: ButtonsProps) {
  return (
    <>
      <ButtonsDiv>
        <button
          onClick={overView}
          className={isOverViewActive ? "isActive" : ""}
        >
          <p>01</p>
          <h3>OVERVIEW</h3>
        </button>
        <button
          onClick={internalStructure}
          className={isInternalStructureActive ? "isActive" : ""}
        >
          <p>02</p>
          <h3>INTERNAL STRUCTURE</h3>
        </button>
        <button
          onClick={surfaceGeology}
          className={isSurfaceGeologyActive ? "isActive" : ""}
        >
          <p>03</p>
          <h3>SURFACE GEOLOGY</h3>
        </button>
      </ButtonsDiv>
    </>
  );
}
