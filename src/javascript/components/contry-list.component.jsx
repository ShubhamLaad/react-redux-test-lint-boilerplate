import React, { PureComponent } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class ContryListComponent extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h2>Contries</h2>
        <ul>
          {
            _.map(this.props.contries, contry => <li key={contry.alpha3_code}>{contry.name}</li>)
          }
        </ul>
      </React.Fragment>
    );
  }
}

ContryListComponent.propTypes = {
  contries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ContryListComponent;
