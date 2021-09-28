import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import logoB from '../static/images/blue_logo.png';
import logoW from '../static/images/white_logo.png';
import globe from '../static/images/globe.png';

const HeaderContainer = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  width: 100vw;
  height: 80px;
  flex-direction: row;
  font-size: 15px;
  color: #fff;
  padding-right: 40px;
  padding-left: 40px;
  background-size: 50vw;
  object-fit: cover;
  font-family: 'Urbanist', sans-serif;

  @media screen and ${(props) => props.theme.mobile} {
    padding-left: 10px;
    padding-right: 30px;
  }
`;

const HeaderMobileMenu = styled.div`
  display: none;

  @media screen and ${(props) => props.theme.mobile} {
    & {
      display: flex;
      align-self: center;
      justify-self: center;
      cursor: pointer;
    }

    & > div > div {
      width: 30px;
      height: 2px;
      background-color: black;
      margin: 6px 0;
    }
  }
`;

const HeaderLogoContainer = styled.div`
  width: 400px;
  min-width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;

  & > img {
    height: 40px;
    cursor: pointer;
    max-width: 100%;
  }

  @media screen and (min-width: 770px) and (max-width: 1023px) {
    display: flex;
    width: 300px;
    min-width: 300px;
  }

  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: calc(100% - 70px);
    min-width: calc(100% - 70px);

    align-items: center;

    & > img {
      height: 40px;
      cursor: pointer;
    }
  }
`;

const HeaderMenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 50px;
  z-index: 10;

  width: 100%;

  & > .dropdown {
    margin-right: 1em;
    position: relative;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
    }
  }

  & > .dropdown:hover .dropdown-content {
    display: block;
  }

  & > .dropdown > .dropdown-content {
    display: none;
    position: absolute;
    top: 80px;
    left: -10px;
    background-color: rgba(255, 255, 255, 0.7);
    min-width: 130px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;

    font-size: 15px;
  }

  & > .dropdown > .dropdown-content > a {
    display: block;
    padding-top: 0.5em;
    padding-bottom: 0.5em;

    &:hover {
      text-decoration: none;
      display: flex;
    }
  }

  @media screen and (min-width: 770px) and (max-width: 1192px) {
    & > .dropdown {
      margin-right: 1em;
      position: relative;
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;

      &:hover {
      }
    }

    & > .dropdown:hover .dropdown-content {
      display: block;
    }

    & > .dropdown > .dropdown-content {
      display: none;
      position: absolute;
      top: 80px;
      left: -10px;
      background-color: rgba(255, 255, 255, 0.7);
      min-width: 80px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 12px 16px;
      z-index: 1;

      font-size: 13px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    & {
      display: none;
    }
  }
`;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0);

  &:focus {
    outline: none;
  }

  div {
    width: 24px;
    height: 0.18rem;
    border-radius: 0px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.8px;
    background: ${({ open }) => (open ? '#2a6eb1;' : '#fff')};

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const StyledMenu = styled.nav`
  display: inline-block;
  width: 100vw;
  z-index: 15;
  background: #fff;
  opacity: 0.95;
  height: 100vh;
  max-height: 100vh;
  text-align: center;
  padding-top: 30%;
  padding-bottom: 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  & > div {
    padding-bottom: 0.5em;
  }

  & > div > span {
    font-size: 21px;
    margin-bottom: 0.5em;
    padding: 0.5em;
    color: #2a6eb1;
    font-weight: bolder;
    display: block;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }

  & > div > a {
    text-transform: uppercase;
    display: block;
    padding: 0.25em;
    margin-bottom: 0.5em;
    color: #2a6eb1;
    font-size: 19px;

    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 20px;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const Header = ({ isTransparent }) => {
  const [open, setOpen] = useState(false);
  const bgColor = isTransparent;
  const link1 = [
    '/introduce/',
    '/introduce/goal/',
    '/introduce/prospect/',
    '/introduce/direction/',
  ];
  const link2 = ['/professor-list/'];
  const link3 = ['/study/roadmap/', '/study/curriculum/'];
  const link4 = ['/study/student-union/'];
  const link5 = [
    '/board-list/general/',
    '/board-list/college/',
    '/board-list/free/',
    '/board-list/filebox/',
  ];

  const handleClick = (e, path) => {
    setOpen(false);
  };

  console.log(bgColor);

  return (
    <HeaderContainer
      style={
        bgColor
          ? { backgroundColor: 'rbga(0,0,0,0)' }
          : { backgroundColor: 'rgba(48, 116, 189, 1)' }
      }
    >
      <HeaderLogoContainer>
        <Link href='/'>
          {bgColor ? <img src={logoB}></img> : <img src={logoW}></img>}
        </Link>
      </HeaderLogoContainer>
      <HeaderMobileMenu>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <StyledMenu open={open} setOpen={setOpen}>
          <div>
            <Link href='/company/'>
              <span>COMPANY</span>
            </Link>
            <Link href='/company/'>
              <a onClick={() => setOpen(!open)}>회사개요</a>
            </Link>
            <Link href='/greeting/'>
              <a onClick={() => setOpen(!open)}>인사말</a>
            </Link>
            <Link href='/history/'>
              <a onClick={() => setOpen(!open)}>연혁</a>
            </Link>
            <Link href='/address/'>
              <a onClick={() => setOpen(!open)}>오시는길</a>
            </Link>
          </div>
          <div>
            <Link href='/business/'>
              <span>BUSINESS</span>
            </Link>
            <Link href='/business/cosmetics'>
              <a onClick={() => setOpen(!open)}>화장품</a>
            </Link>
            <Link href='/business/'>
              <a onClick={() => setOpen(!open)}>잡화류</a>
            </Link>
            <Link href='/business/'>
              <a onClick={() => setOpen(!open)}>식품류</a>
            </Link>
          </div>
          <div>
            <Link href='/distribution/'>
              <span>DISTRIBUTION</span>
            </Link>
          </div>
          <div>
            <Link href='/contact/'>
              <span>CONTACT</span>
            </Link>
          </div>
        </StyledMenu>
      </HeaderMobileMenu>
      <HeaderMenuContainer>
        <div className='dropdown'>
          <Link href='/company/'>
            <span>COMPANY</span>
          </Link>
          <div className='dropdown-content'>
            <Link href='/company/'>
              <a onClick={() => setOpen(!open)}>회사개요</a>
            </Link>
            <Link href='/greeting/'>
              <a onClick={() => setOpen(!open)}>인사말</a>
            </Link>
            <Link href='/history/'>
              <a onClick={() => setOpen(!open)}>연혁</a>
            </Link>
            <Link href='/address/'>
              <a onClick={() => setOpen(!open)}>오시는길</a>
            </Link>
          </div>
        </div>
        <div className='dropdown'>
          <span>BUSINESS</span>
          <div className='dropdown-content'>
            <Link href='/business/cosmetics'>
              <a onClick={() => setOpen(!open)}>화장품</a>
            </Link>
            <Link href='/business/'>
              <a onClick={() => setOpen(!open)}>잡화류</a>
            </Link>
            <Link href='/business/'>
              <a onClick={() => setOpen(!open)}>식품류</a>
            </Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link href='/distribution'>
            <span>DISTRIBUTION</span>
          </Link>
        </div>
        <div className='dropdown'>
          <Link href='/contact/'>
            <span>CONTACT</span>
          </Link>
        </div>
        <div className='dropdown'>
          <Link href='/study/student-union/'>
            <span>
              <img src={globe} style={{ height: '20px' }}></img>
            </span>
          </Link>
          <div className='dropdown-content'>
            <Link href='/study/student-union/'>
              <a onClick={() => setOpen(false)}>EN</a>
            </Link>
            <Link href='/study/student-union/'>
              <a onClick={() => setOpen(false)}>KR</a>
            </Link>
          </div>
        </div>
      </HeaderMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
