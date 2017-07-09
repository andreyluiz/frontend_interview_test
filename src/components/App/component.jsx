// @flow
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Advertisement from '../Advertisement';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';

type Props = {
  /**
   * An array containing the normalized ads from the API.
   */
  ads: Array<Object>,
  /**
   * A flag thar indicates the API is still pending to respond.
   */
  isLoading: boolean,
  /**
   * If the API respond with an error, this will be the error string.
   */
  error: ?String,
  /**
   * The function to trigger the API call to fetch the ads.
   */
  fetchAds: Function,
};

/**
 * This component renders a grid of advertisements.
 */
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
