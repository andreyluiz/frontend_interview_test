// @flow
import { connect } from 'react-redux';
import { fetchAds } from '../../state';
import App from './component';

// TODO Use reselect.
const mapStateToProps = state => ({
  ads: state.ads,
  isLoading: state.isLoading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchAds })(App);
