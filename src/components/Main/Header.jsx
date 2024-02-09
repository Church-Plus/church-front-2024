import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logos/Church + Logo 1.svg";
import userIcons from "../../assets/Icons/user.svg";
import bellIcons from "../../assets/Icons/bell.svg";
import heartIcons from "../../assets/Icons/heart.svg";
import searchIcons from "../../assets/Icons/search.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  border: 1px solid #281a47;
`;

const HeaderItems = styled.div`
  display: flex;
  align-items: center;

  padding: 14px;
`;

const HeaderItem = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  &:not(:last-child) {
    padding-right: 190px;
  }
`;

const ChurchLogo = styled.div`
  padding-left: 35px;
  img {
    height: 55px;
  }
`;

const SearchBar = styled.div`
  position: relative;

  input {
    width: 650px;
    height: 45px;
    border-radius: 40px;
  }
`;

const SearchBtn = styled.button`
  position: absolute;

  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Icons = styled.div`
  flex-direction: row;
  width: 150px;

  img {
    height: 50px;
  }

  img:not(:last-child) {
    height: 28px;
    padding-bottom: 8px;
  }

  img:not(:last-child) {
    padding-right: 10px;
  }
`;

function Header() {
  return (
    <Wrapper>
      <HeaderItems>
        <HeaderItem>
          <ChurchLogo>
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
            <img src={heartIcons} alt="하트 아이콘" />
            <img src={bellIcons} alt="벨 아이콘" />
            <img src={userIcons} alt="사람 아이콘" />
          </Icons>
        </HeaderItem>
      </HeaderItems>
    </Wrapper>
  );
}

export default Header;
