import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultSize = '100%';

class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    size: defaultSize,
    color: null,
    className: null,
    title: null,
  };

  state = {
    source: {
      attributes: {
        xmlns: '',
        viewBox: '0 0 0 0',
      },
      content: '',
    },
  };

  componentWillMount() {
    import(`../../icons/${this.props.name}.svg`).then(source =>
      this.setState(() => ({ source })),
    );
  }

  render() {
    return (
      <svg
        xmlns={this.state.source.attributes.xmlns}
        viewBox={this.state.source.attributes.viewBox}
        style={{
          height: this.props.size,
          width: 'auto',
          fill: this.props.color || 'currentColor',
        }}
        className={
          this.props.className ? `icon ${this.props.className}` : 'icon'
        }
        dangerouslySetInnerHTML={{
          __html: this.props.title
            ? `<title>${this.props.title}</title>${this.state.source.content}`
            : this.state.source.content,
        }}
      />
    );
  }
}

export default Icon;
