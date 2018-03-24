import React, { Component } from 'react';
import Select from 'react-select';
import './themes/pastanaga/Select/default.css';

class Content extends Component {
  state = {
    selectedOption: '',
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Select
          name="form-field-name"
          value={value}
          onChange={this.handleChange}
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
        />
      </div>
    );
  }
}

export default Content;
