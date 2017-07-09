// @flow
import React from 'react';
import './styles.scss';

// For docs about this prop, see Advertisement/index.jsx
type Props = {
  purpose: number,
};

/**
 * Renders the badge in the top left corner about the purpose of the advertisement.
 */
export default ({
  purpose,
}: Props) => (
  <div styleName="type">
    <span>{(purpose === 1) ? 'Kaufen' : 'Mieten'}</span>
  </div>
);
