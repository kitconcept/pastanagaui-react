import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { Icon } from '../../components';
import '../../themes/pastanaga/Select/default.css';
import downSVG from '../../icons/down-key.svg';
import upSVG from '../../icons/up-key.svg';
import checkSVG from '../../icons/check.svg';

class DisplaySelect extends Component {
  state = {
    selectedOption: { value: 'standard', label: 'Standard' },
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Selected: ${selectedOption.label}`);
  };

  selectValue = option => (
    <Fragment>
      <span className="Select-value-label">{option.label}</span>
    </Fragment>
  );

  optionRenderer = option => (
    <Fragment>
      <span style={{ marginRight: 'auto' }}>{option.label}</span>
      <Icon name={checkSVG} size="24px" />
    </Fragment>
  );

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Fragment>
        <label htmlFor="display-select">View</label>
        <Select
          name="state-select"
          arrowRenderer={({ onMouseDown, isOpen }) =>
            isOpen ? (
              <Icon name={upSVG} size="24px" />
            ) : (
              <Icon name={downSVG} size="24px" />
            )
          }
          clearable={false}
          searchable={false}
          // onBlur={() => {
          //   debugger;
          // }}
          value={value}
          onChange={this.handleChange}
          options={[
            { value: 'standard', label: 'Standard' },
            { value: 'listing', label: 'Listing' },
            { value: 'album', label: 'Album' },
            { value: 'tabular', label: 'Tabular' },
            { value: 'extended', label: 'Extended' },
          ]}
          valueRenderer={this.selectValue}
          optionRenderer={this.optionRenderer}
        />
      </Fragment>
    );
  }
}

export default DisplaySelect;
