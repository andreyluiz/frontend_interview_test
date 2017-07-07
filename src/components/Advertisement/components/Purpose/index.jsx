// @flow
import React from 'react';
import './styles.scss';

type Props = {
  purpose: number,
};

export default ({
  purpose,
}: Props) => (
  <div styleName="type">
    <span>{(purpose === 1) ? 'Kaufen' : 'Mieten'}</span>
  </div>
);
