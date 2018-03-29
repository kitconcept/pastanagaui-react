import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { Icon } from '../../components';
import '../../themes/pastanaga/Select/default.css';
import downSVG from '../../icons/down-key.svg';
import upSVG from '../../icons/up-key.svg';
import checkSVG from '../../icons/check.svg';

class WorkflowSelect extends Component {
  state = {
    selectedOption: { value: 'private', label: 'Private', color: '#ed4033' },
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Selected: ${selectedOption.label}`);
  };

  selectValue = option => {
    const stateDecorator = {
      marginLeft: '10px',
      marginRight: '10px',
      display: 'inline-block',
      backgroundColor: option.color || null,
      content: ' ',
      height: '10px',
      width: '10px',
      borderRadius: '50%',
    };
    return (
      <Fragment>
        <span style={stateDecorator} />
        <span className="Select-value-label">{option.label}</span>
      </Fragment>
    );
  };

  optionRenderer = option => {
    const stateDecorator = {
      marginLeft: '10px',
      marginRight: '10px',
      display: 'inline-block',
      backgroundColor:
        this.state.selectedOption.value === option.value ? option.color : null,
      content: ' ',
      height: '10px',
      width: '10px',
      borderRadius: '50%',
      border:
        this.state.selectedOption.value !== option.value
          ? `1px solid ${option.color}`
          : null,
    };

    return (
      <Fragment>
        <span style={stateDecorator} />
        <span style={{ marginRight: 'auto' }}>{option.label}</span>
        <Icon name={checkSVG} size="24px" />
      </Fragment>
    );
  };

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Fragment>
        <label htmlFor="state-select">State</label>
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
            { value: 'private', label: 'Private', color: '#ed4033' },
            { value: 'public', label: 'Public', color: '#007bc1' },
            { value: 'intranet', label: 'Intranet', color: '#51aa55' },
            { value: 'draft', label: 'Draft', color: '#f6a808' },
            { value: 'review', label: 'Review', color: '#f4e037' },
          ]}
          valueRenderer={this.selectValue}
          optionRenderer={this.optionRenderer}
        />
      </Fragment>
    );
  }
}

export default WorkflowSelect;
