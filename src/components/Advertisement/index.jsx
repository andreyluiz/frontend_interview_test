// @flow
import React from 'react';
import TypeBadge from './components/TypeBadge';
import './styles.scss';

export default () => (
  <div styleName="card">
    <div styleName="image">
      <TypeBadge />
      <img
        src="https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5908c4916a1ca6.30802316.jpg"
        alt="Thumb"
      />
    </div>
    <div styleName="info">
      <div styleName="body">
        <h2>Casa Casa Casa Casa Casa Casa Casa Casa Casa Casa Casa Casa Casa Casa</h2>
        <p>35764 Sinn / Fleisbach</p>
      </div>
      <div styleName="footer">
        <div styleName="price">
          <h2>1.954 €</h2>
        </div>
        <div styleName="size">
          <div styleName="bedrooms">
            <span>3 Zimmer</span>
          </div>
          <div styleName="metres">
            <span>ab 35 m²</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
