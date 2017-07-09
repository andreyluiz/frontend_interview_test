// @flow
import React from 'react';
import './styles.scss';

type Props = {
  children: ?String,
}

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
