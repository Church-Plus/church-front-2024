import React, { useState } from "react";
import styled from "styled-components";
import vectorIcons from "../../assets/Icons/Vector.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  font-size: 20px;
  color: #555555;
  font-weight: 200;
  position: relative;
  z-index: 1;
`;

const KeyDropdown = styled.div`
  border: 1px solid #c1c1c1;
  width: 333px;
  height: 35px;
  padding: 0.2rem;
  padding-top: 0.5rem;
  padding-left: 25px;
  border-radius: 16px;
  background-color: #efeff0;
  margin-bottom: 10px;

  cursor: pointer;

  img {
    height: 0.5rem;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
  }
`;

const KeyItems = styled.div`
  border: 1px solid #281a47;
  padding: 12px;
  border-radius: 20px;
  background-color: white;
  color: black;
  width: 220px;
  font-weight: 400;
  display: ${({ isActive }) =>
    isActive ? "block" : "none"}; /* isActive 상태에 따라 표시 여부 결정 */
`;

const KeyItemTop = styled.div`
  padding-bottom: 8px;
  text-align: center;
  Span {
    border-radius: 7px;
    padding: 0.1rem 0.3rem;
    margin-right: 5px;
    font-size: 18px;

    cursor: pointer;
  }

  Span:hover {
    background-color: #dfdfdf;
  }
`;

const KeyItemBottom = styled.div`
  text-align: center;

  Span {
    border-radius: 7px;
    padding: 1px 7px;
    margin-right: 5px;
    font-size: 18px;

    cursor: pointer;
  }

  Span:hover {
    background-color: #dfdfdf;
  }
`;

const Span = styled.span`
  border: 1px solid #281a47;
`;

function UploadModalSelectDropdown({ value, onChange, name }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState({ label: "", value: "" });
  const keyOptions1 = [
    { label: "Db", value: 1 },
    { label: "Eb", value: 2 },
    { label: "Gb", value: 3 },
    { label: "Ab", value: 4 },
    { label: "Bb", value: 5 },
  ];

  const keyOptions2 = [
    { label: "C", value: 6 },
    { label: "D", value: 7 },
    { label: "E", value: 8 },
    { label: "F", value: 9 },
    { label: "G", value: 10 },
    { label: "A", value: 11 },
    { label: "B", value: 12 },
  ];

  const handleItemClick = (keyOption) => {
    setSelected(keyOption);
    setIsActive(false);
    onChange({ target: { name, value: keyOption.label } });
  };

  return (
    <Wrapper>
      <div>
        <KeyDropdown onClick={() => setIsActive(!isActive)}>
          {selected.label ? null : "곡"} {selected.label} Key
          <span>
            <img src={vectorIcons} alt="벡터 아이콘" />
          </span>
        </KeyDropdown>
        <KeyItems style={{ display: isActive ? "block" : "none" }}>
          {isActive && (
            <>
              <KeyItemTop>
                {keyOptions1.map((keyOption) => (
                  <Span
                    key={keyOption.value}
                    onClick={() => handleItemClick(keyOption)}
                  >
                    {keyOption.label}
                  </Span>
                ))}
              </KeyItemTop>
              <KeyItemBottom>
                {keyOptions2.map((keyOption) => (
                  <Span
                    key={keyOption.value}
                    onClick={() => handleItemClick(keyOption)}
                  >
                    {keyOption.label}
                  </Span>
                ))}
              </KeyItemBottom>
            </>
          )}
        </KeyItems>
      </div>
    </Wrapper>
  );
}

export default UploadModalSelectDropdown;
