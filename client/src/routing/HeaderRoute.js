import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../presentational/Header';

const HeaderRoute = ({ render: InnerComponent, ...rest }) => (
  <Route
    {...rest}  // eslint-disable-line
    render={(props) => (
      <div className="m-0">
        <Header />
        <div id="headerBuffer" />
        <InnerComponent
          {...props}  // eslint-disable-line
        />
      </div>
    )}
  />
);

export default HeaderRoute;

HeaderRoute.propTypes = {
  render: PropTypes.func.isRequired,
};
