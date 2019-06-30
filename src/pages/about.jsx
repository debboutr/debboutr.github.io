import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="AboutDebbout">He's just a caddy, grandpa.</Header>
    <Container center={center}>
      <p>
        I am often found riding a bicycle. In the times that I am not, I enjoy
        dabbling and tinkering in what will likely ultimately be a failed
        attempt at figuring out the way things work. As always, it is littered
        with both successes and failures. I spent much of my younger years
        working as a caddy and learned how to make myself useful.
      </p>
      <p>
        Through a number of what would be seemingly dissociated degrees, jobs,
        and personal projects I have 
      </p>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
