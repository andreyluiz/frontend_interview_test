// @flow
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchAds } from '../../state';
import { selectIsLoading, selectAds, selectError } from '../../state/selectors';
import App from './component';

const mapStateToProps = createStructuredSelector({
  ads: selectAds,
  isLoading: selectIsLoading,
  error: selectError,
});

export default connect(mapStateToProps, { fetchAds })(App);
