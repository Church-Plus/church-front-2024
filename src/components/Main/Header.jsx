import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logos/C+_Logo.svg";
import userIcons from "../../assets/Icons/user.svg";
import addUserIcons from "../../assets/Icons/addUser.svg";
import searchIcons from "../../assets/Icons/search.svg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  max-width: 100vw;
  height: 100px;

  //헤더 고정
  position: sticky;
  top: 0px;
  background-color: white;
  z-index: 2;
`;

const HeaderItems = styled.div`
  display: flex;
  align-items: center;

  padding: 14px;
`;

const HeaderItem = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ChurchLogo = styled.div`
  padding-left: 1rem;
  cursor: pointer;
  img {
    height: 55px;
    margin-right: 15rem;
  }
`;

const SearchBar = styled.div`
  position: relative;
  margin-right: 12.5rem;

  input {
    width: 43rem;
    height: 3rem;
    border-radius: 3rem;
    text-align: center;
    font-size: 20px;
  }
`;

const SearchBtn = styled.button`
  position: absolute;

  right: 0.8rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Icons = styled.div`
  flex-direction: row;

  img {
    height: 50px;
    cursor: pointer;
  }

  img:not(:last-child) {
    height: 28px;
    padding-bottom: 0.5rem;
    padding-right: 1rem;
  }
`;

function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
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
          <SearchBar>
            <input type="text" name="searchText" />
            <SearchBtn type="submit">
              <img src={searchIcons} alt="검색 아이콘" />
            </SearchBtn>
          </SearchBar>
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
