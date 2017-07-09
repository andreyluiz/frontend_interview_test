// @flow
import React from 'react';
import './styles.scss';

type Props = {
  /**
   * A text representing an error comming from the API.
   */
  children: ?String,
}

/**
 * Simple component to show an error when the API fails to respond.
 */
const ErrorMessage = ({
  children,
}: Props) => (
  <div styleName="error">
    <span>{ children }</span>
  </div>
);

ErrorMessage.defaultProps = {
  children: 'Unknown Error',
};

export default ErrorMessage;
