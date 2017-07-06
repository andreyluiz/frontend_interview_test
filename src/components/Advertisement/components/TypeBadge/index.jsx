// @flow
import React from 'react';
import './styles.scss';

type Props = {
  sell: boolean,
};

export default ({
  sell,
}: Props) => (
  <div styleName="type">
    <span>{sell ? 'Kaufen' : 'Mieten'}</span>
  </div>
);
