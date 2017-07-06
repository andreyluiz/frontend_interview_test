// @flow
import React from 'react';
import TypeBadge from './components/TypeBadge';
import Info from './components/Info';
import './styles.scss';

export default () => (
  <div styleName="card">
    <div styleName="image">
      <TypeBadge />
      <img
        src="https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg"
        alt="Thumb"
        width="100%"
        height="auto"
      />
    </div>
    <Info />
  </div>
);
