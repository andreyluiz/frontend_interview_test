// @flow
import React from 'react';
import './styles.scss';

// For docs about these props, see Advertisement/index.jsx
type Props = {
  title: String,
  price: number,
  numberOfRooms: number,
  space: number,
};

/**
 * This component renders the informations about the advertisement.
 */
const Info = ({
  title,
  price,
  numberOfRooms,
  space,
}: Props) => (
  <div styleName="info">
    <div styleName="body">
      <div styleName="title">
        <h2 title={title}>{ title }</h2>
      </div>
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
          <span>ab { parseInt(space, 10) } m²</span>
        </div>
      </div>
    </div>
  </div>
);

Info.defaultProps = {
  title: 'Advertisement title',
  price: 0,
  numberOfRooms: 0,
  space: 0,
};

export default Info;
