import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import styled, {keyframes} from '@emotion/styled';
import { Layout, Container } from 'layouts';
import '../styles/earth.css'

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="About">
        <div className="earth"></div>
    </Header>
    <Container center={center}>
      <h3>
        Hard to believe that I would tell you that I love the outdoors, yet my
        job keeps me indoors strapped to a desk. I started with the EPA a little
        over 5 years ago and I have been able to develop my skills as a GIS
        specialist and web developer in bigger ways than I ever would have imagined.
    </h3>
    <h3>
        I came into the GIS profession after doing golf course construction, I was
        tasked to learn to operate a Trimble GPS rover while working on a course in
        {' '}
        <a href="http://dmkgolfdesign.com/courses/huntsman-springs/">Driggs, ID</a>
        . This made me aware of how important it is to manage information and after
        the 2008 crash, I began to pursue a Master's degree in GIS.
    </h3>
    <h3>
        I love to play guitar, bike, and to eat good food. I am a minimalist and am
        hoping to begin building a cob tiny home later this year. I live near the
        ocean and love to breathe it all in.
    </h3>

    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
