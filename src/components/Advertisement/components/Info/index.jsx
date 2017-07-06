// @flow
import React from 'react';
import './styles.scss';

type Props = {
  title: String,
  price: number,
  numberOfRooms: number,
  space: number,
};

export default ({
  title,
  price,
  numberOfRooms,
  space,
}: Props) => (
  <div styleName="info">
    <div styleName="body">
      <h2>{ title }</h2>
      <p>35764 Sinn / Fleisbach</p>
    </div>
    <div styleName="footer">
      <div styleName="price">
        <h2>{ price } €</h2>
      </div>
      <div styleName="size">
        <div styleName="bedrooms">
          <span>{ numberOfRooms } Zimmer</span>
        </div>
        <div styleName="metres">
          <span>ab { space } m²</span>
        </div>
      </div>
    </div>
  </div>
);
