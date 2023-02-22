import PropTypes from 'prop-types';

import React, { Component } from 'react';

class Filter extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default Filter;
