// @flow
import React, { Component } from 'react';
import Advertisement from '../Advertisement';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';
import './styles.scss';

type Props = {
  ads: Array<Object>,
  isLoading: boolean,
  error: ?String,
  fetchAds: Function,
};

export default class extends Component {
  static defaultProps = {
    ads: [],
    isLoading: false,
    fetchAds: () => {},
  }

  componentWillMount() {
    this.props.fetchAds();
  }

  props: Props

  render() {
    const { isLoading, error } = this.props;
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      return <ErrorMessage>{ error }</ErrorMessage>;
    }
    return (
      <div>
        <div styleName="row">
          <Advertisement />
          <Advertisement />
          <Advertisement />
        </div>
      </div>
    );
  }
}
