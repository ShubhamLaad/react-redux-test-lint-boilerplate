import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class RootComponent extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <header>header <Link to="/next-page">next page</Link></header>
        {this.props.children}
        <footer>footer</footer>
      </React.Fragment>
    );
  }
}

RootComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

RootComponent.defaultProps = {
  children: null,
};

export default RootComponent;
