// @flow
import React from 'react';
import Purpose from './components/Purpose';
import Info from './components/Info';
import './styles.scss';

type Props = {
  /**
   * The ad image source.
   */
  thumbnail: String,
  /**
   * 0 or 1 for Rent or Sell.
   */
  purpose: number,
  /**
   * The title of the Advertisement.
   */
  title: String,
  /**
   * The price of the advertisement.
   */
  price: number,
  /**
   * How many rooms has in the house.
   */
  numberOfRooms: number,
  /**
   * How much space the house have.
   */
  space: number,
};

/**
 * Stateless component that renders the Advertisement itself.
 */
export default ({
  thumbnail,
  purpose,
  title,
  price,
  numberOfRooms,
  space,
}: Props) => (
  <div styleName="card">
    <div styleName="image">
      <Purpose purpose={purpose} />
      <img
        src={thumbnail}
        alt="Thumbnail"
        width="100%"
        height="auto"
      />
    </div>
    <Info
      title={title}
      price={price}
      numberOfRooms={numberOfRooms}
      space={space}
    />
  </div>
);
