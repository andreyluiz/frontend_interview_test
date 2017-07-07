// @flow
import React from 'react';
import './styles.scss';

type Props = {
  children: ?String,
}

export default ({
  children,
}: Props) => (
  <div styleName="error">
    <span>{ children }</span>
  </div>
);
