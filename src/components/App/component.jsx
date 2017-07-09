// @flow
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
    const { ads, isLoading, error } = this.props;
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      return <ErrorMessage>{ error }</ErrorMessage>;
    }
    return (
      <Grid fluid>
        {ads.map((row, index) => (
          <Row key={index}>
            {row.map(ad => (
              <Col key={ad.id} md={4}>
                <Advertisement {...ad} />
              </Col>
            ))}
          </Row>
        ))}

      </Grid>
    );
  }
}
