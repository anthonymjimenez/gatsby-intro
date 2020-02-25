import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import ReadLink from '../components/read-link';

export default () => {
  return (
    <>
      <Layout>
        <h2>Projects page coming soon!</h2>
        <ReadLink to="https://github.com/securethebags">
          For now check out my github repos!
        </ReadLink>
      </Layout>
    </>
  );
};
