import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import logo from '../../static/logo/me.png';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`;

const StyledImg = styled.img`
  height: 90px;
  width: 90pv;
  border-style: solid;
  border-radius: 50%;
`;

const NavBar = () => (
  <Headroom calcHeightOnResize disableInlineStyles>
    <StyledLink to="/">
      <StyledImg src={logo} alt="Gatsby Logo" />
    </StyledLink>
    <Nav>
      <Link to="/blog">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
    </Nav>
  </Headroom>
);

export default NavBar;