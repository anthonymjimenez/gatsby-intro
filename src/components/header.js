import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
const Header = () => (
  <header
    css={css`
      margin-top: 0;
      background: #2012;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 650px - 0.5rem) / 2);
    `}
  >
    <NavLink to="/" fontWeight="bold">
      Home
    </NavLink>
    <nav
      css={css`
        margin-top: 0px;
      `}
    >
      <NavLink to="/blog" activeClassName="current-page">
        Blog
      </NavLink>
      <NavLink to="/about" activeClassName="current-page">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="current-page">
        Contact
      </NavLink>
      <NavLink to="/projects" activeClassName="current-page">
        Projects
      </NavLink>
    </nav>
  </header>
);

export default Header;
