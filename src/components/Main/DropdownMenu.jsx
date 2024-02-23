import React, { useState } from "react";
import styled from "styled-components";
import archiveIcons from "../../assets/Icons/archive.svg";
import vectorIcons from "../../assets/Icons/Vector.svg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: none;
  border-bottom: none;
  width: 326px;
  height: 100vh;
  font-size: 24px;
  border-right: 2px solid rgba(198, 196, 216, 0.1);
`;

const Dropdown = styled.div`
  width: 300px;
`;

const DropdownBtn = styled.div`
  height: 25px;
  border-top: 1px solid black;
  border-bottom: ${(props) => (props.$isActive ? "none" : "1px solid black")};
  padding-top: 15px;
  padding-left: 3.5px;
  height: ${(props) => (props.$isActive ? "2rem" : "3rem")};
  cursor: pointer;

  img {
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    float: right;
    width: 1rem;
  }
`;

const DropdownItem = styled.div`
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid black;
  div {
    cursor: pointer;
    padding-bottom: 0.8rem;

    img {
      height: 1.8rem;
      padding-right: 0.5rem;
      vertical-align: bottom;
    }
  }
`;

function DropdownMenu() {
  const [selectedYear, setSelectedYear] = useState(null); // 선택된 년도 상태
  const [selectedMonths, setSelectedMonths] = useState({}); // 선택된 월 상태
  const options = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const year = ["2024", "2025", "2026"];

  const toggleDropdown = (year) => {
    if (selectedYear === year) {
      setSelectedYear(null); // 같은 년도를 두 번 클릭하면 닫히도록 설정
    } else {
      setSelectedYear(year); // 다른 년도를 클릭하면 해당 년도의 드롭다운을 열도록 설정
    }
  };

  const toggleMonth = (yearItem, month) => {
    setSelectedMonths({
      ...selectedMonths,
      [yearItem]: month === selectedMonths[yearItem] ? "" : month, // 같은 월을 두 번 클릭하면 월 선택 해제
    });
    setSelectedYear(null); // 월을 선택하면 해당 년도의 드롭다운을 닫음
  };

  return (
    <Wrapper>
      {year.map((yearItem, index) => (
        <Dropdown key={yearItem}>
          <DropdownBtn
            $isActive={selectedYear === yearItem} // 선택된 년도인 경우에만 활성화
            onClick={() => toggleDropdown(yearItem)}
            style={{ borderTop: index === 0 ? "1px solid black" : "none" }} // 첫 번째 버튼은 상단 테두리가 있고, 나머지는 없음
          >
            {yearItem}년{" "}
            {selectedMonths[yearItem] ? selectedMonths[yearItem] + "월" : ""}
            {/* 선택된 월이 있을 경우만 표시 */}
            <span>
              <img src={vectorIcons} alt="벡터 아이콘" />
            </span>
          </DropdownBtn>
          {selectedYear === yearItem && ( // 선택된 년도의 드롭다운이 열린 경우에만 보여줌
            <DropdownItem>
              {options.map((option) => (
                <Link
                  key={option}
                  to={`/MonthPage/${option}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div
                    key={option}
                    onClick={() => toggleMonth(yearItem, option)}
                  >
                    <img src={archiveIcons} alt="월별 폴더 아이콘" />
                    {option + "월"}
                  </div>
                </Link>
              ))}
            </DropdownItem>
          )}
        </Dropdown>
      ))}
    </Wrapper>
  );
}

export default DropdownMenu;
