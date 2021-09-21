import React from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rater extends React.Component {
  state = {
    value: 3,
  };

  handleChange = value => {
    this.setState({ value });
  };

  render () {
    const { value } = this.state;
    return (
      <span >
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
      </span>
    );
  }
}

export default Rater;