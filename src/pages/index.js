import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Hey its your boy</h1>
    <Link to="/about/"> Learn about me &rarr;</Link>
  </Layout>
);
