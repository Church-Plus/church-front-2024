import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import vectorIcons from "../../assets/Icons/Vector.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 5rem;
  width: 350px;
  height: 10vh;

  position: relative;
  z-index: 1;
`;

const KeyDropdown = styled.div`
  border: 1px solid #281a47;
  width: 6rem;
  height: 2.2rem;
  padding-top: 0.5rem;
  border-radius: 2rem;
  margin-bottom: 0.3rem;
  text-align: center;
  text-shadow: 2px 2px 2px #c1c1c1;
  font-size: 21px;

  cursor: pointer;

  img {
    height: 0.4rem;
    padding-top: 0.6rem;
    padding-right: 0.7rem;
    float: right;
  }
`;

const KeyItems = styled.div`
  border: 1px solid #281a47;
  font-size: 18px;
  width: 17.5rem;
  height: 6.8rem;
  border-radius: 1.4rem;
  background-color: white;

  display: ${({ isActive }) =>
    isActive ? "block" : "none"}; /* isActive 상태에 따라 표시 여부 결정 */
`;

const KeyItemTop = styled.div`
  padding-left: 1.8rem;
  padding-top: 1.4rem;
  padding-bottom: 1.2rem;

  Span {
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin-right: 0.4rem;

    cursor: pointer;
  }

  Span:hover {
    background-color: #dfdfdf;
  }
`;

const KeyItemBottom = styled.div`
  padding-left: 1.3rem;
  Span {
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin-right: 0.4rem;

    cursor: pointer;
  }

  Span:hover {
    background-color: #dfdfdf;
  }
`;

const Span = styled.span`
  border: 1px solid #281a47;
`;

function SelectDropdown({ setSelectedKey }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState({ label: "", value: "" });
  const dropdownRef = useRef(null); // 드롭다운 요소에 대한 ref를 생성

  useEffect(() => {
    // document에 클릭 이벤트 리스너 추가
    document.addEventListener("click", handleClickOutside);

    return () => {
      // 컴포넌트 언마운트시 이벤트 리스너 제거
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    // 클릭한 요소가 드롭다운 외부에 있을 경우 드롭다운을 닫음
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

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

  const handleSelect = (keyOption) => {
    if (selected.label === keyOption.label) {
      // 이미 선택된 레이블을 다시 선택한 경우 선택을 해제
      setSelected({ label: "", value: "" });
      setSelectedKey(""); // 선택이 해제되었음을 상위 컴포넌트에 알림
    } else {
      setSelected(keyOption);
      setSelectedKey(keyOption.label); // 선택한 키 레이블을 상위 컴포넌트로 전달
    }
    setIsActive(false);
  };
  return (
    <Wrapper>
      <div ref={dropdownRef}>
        <KeyDropdown onClick={(e) => setIsActive(!isActive)}>
          {selected.label !== "" ? selected.label : ""} Key
          <span>
            <img src={vectorIcons} alt="벡터 아이콘" />
          </span>
        </KeyDropdown>
        <KeyItems style={{ display: isActive ? "block" : "none" }}>
          {isActive && (
            <KeyItemTop>
              {keyOptions1.map((keyOption) => (
                <Span
                  key={keyOption.value} // key 속성은 고유해야 함.
                  onClick={(e) => handleSelect(keyOption)}
                >
                  {keyOption.label}
                </Span>
              ))}
            </KeyItemTop>
          )}
          {isActive && (
            <KeyItemBottom>
              {keyOptions2.map((keyOption) => (
                <Span
                  key={keyOption.value} // key 속성은 고유해야 하므로 keyOption.value로 변경
                  onClick={(e) => handleSelect(keyOption)}
                >
                  {keyOption.label}
                </Span>
              ))}
            </KeyItemBottom>
          )}
        </KeyItems>
      </div>
    </Wrapper>
  );
}

export default SelectDropdown;
