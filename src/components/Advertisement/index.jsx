// @flow
import React from 'react';
import Purpose from './components/Purpose';
import Info from './components/Info';
import './styles.scss';

type Props = {
  thumbnail: String,
  purpose: number,
  title: String,
  price: number,
  numberOfRooms: number,
  space: number,
};

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
