import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
// import resume from '../../static/resume.pdf';


const Resume = center => (
  <Layout>
    <Helmet title={'Resume'} />
    <Header title="Resume">add link to download here</Header>
    <Container center={center}>
      {/* <img src={resume} alt=""/> */}
    </Container>
  </Layout>
);

export default Resume;

Container.propTypes = {
  center: PropTypes.object,
};
