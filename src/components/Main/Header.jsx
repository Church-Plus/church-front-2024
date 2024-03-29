import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/Logos/C+_Logo.svg";
import userIcons from "../../assets/Icons/user.svg";
import addUserIcons from "../../assets/Icons/addUser.svg";
import searchIcons from "../../assets/Icons/search.svg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  max-width: 100vw;
  height: 5rem;

  //헤더 고정
  position: sticky;
  top: 0px;
  background-color: white;
  z-index: 2;
  box-shadow: 8px 8px 8px rgba(232, 232, 239, 0.2);
`;

const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;

  padding: 1rem;
`;

//검색창 더 오른쪽에 위치하도록
const HeaderItem = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

const ChurchLogo = styled.div`
  padding-left: 1.7rem;
  cursor: pointer;
  img {
    height: 3.5rem;
  }
`;

const SearchBar = styled.div`
  position: relative;
  padding-left: 75px;

  input {
    padding-left: 25px;
    font-family: "Pretendard";
    width: 43rem;
    height: 3rem;
    border: 0.9px solid black;
    border-radius: 3rem;
    font-size: 20px;
  }

  input:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  position: absolute;

  right: 0.1px;
  top: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    padding-top: 0.3rem;
    height: 2.5rem;
  }
`;

const Icons = styled.div`
  float: right;
  padding-right: 2.3rem;

  img {
    height: 2.8rem;
    cursor: pointer;
  }

  img:not(:last-child) {
    height: 1.5rem;
    padding-bottom: 0.5rem;
    padding-right: 1rem;
  }
`;

function Header({ setSearch }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    setSearch(inputValue);
    // 사용자가 입력할 때마다 실시간으로 입력받기
  };

  const handleLogoClick = () => {
    navigate("/main");
  };
  return (
    <Wrapper>
      <HeaderItems>
        <HeaderItem>
          <ChurchLogo onClick={handleLogoClick}>
            <img src={Logo} alt="Church+ 아이콘" />
          </ChurchLogo>
        </HeaderItem>
        <HeaderItem>
          <div style={{ width: "770px" }}>
            <SearchBar>
              <input
                type="text"
                name="searchMusicName"
                value={searchInput}
                onChange={handleInputChange}
              />
              <SearchBtn type="submit">
                <img src={searchIcons} alt="검색 아이콘" />
              </SearchBtn>
            </SearchBar>
          </div>
        </HeaderItem>
        <HeaderItem>
          <Icons>
            <img src={addUserIcons} alt="사용자 추가 아이콘" />
            <img src={userIcons} alt="사용자 아이콘" />
          </Icons>
        </HeaderItem>
      </HeaderItems>
    </Wrapper>
  );
}

export default Header;
