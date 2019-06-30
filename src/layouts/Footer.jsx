import React from 'react';
import styled from '@emotion/styled';
import scipy from '../../static/logo/scipy.png';
import leaflet from '../../static/logo/leaflet.png';
// import scipy from '../../static/logo/scipy.png';
// import scipy from '../../static/logo/scipy.png';

const Wrapper = styled.footer`
  position: relative;
  padding-top: 1rem;
  bottom: 0;
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding-top: 7rem;
  }
`;

const Text = styled.div`
  margin: 0;
  padding-bottom: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Img = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  margin: 2px;
`;

const Footer = () => (
  <Wrapper>
    <Text>
      <span>
        Gatsby Tutorial Starter -{' '}
        <a href="https://justinformentin.com">Justin Formentin</a>
      </span>
      <Img src={scipy} alt=""/>
      <Img src={leaflet} alt=""/>
    </Text>
  </Wrapper>
);
export default Footer;
