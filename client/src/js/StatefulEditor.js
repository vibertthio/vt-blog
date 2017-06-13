import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';
import './../css/StatefulEditor.css';

/**
 * [state description]
 * @type {Object}
 */
class StatefulEditor extends Component {

  /**
   * [constructor description]
   */
  constructor() {
    super();
    this.state = {
      value: RichTextEditor.createEmptyValue(),
    };
  }

  /**
   * [onChange description]
   * @param  {[type]} value [description]
   */
  onChange(value) {
    this.setState({
      value,
    });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(value.toString('html'));
    }
  }

  /**
   * [render description]
   * @return {Element} [description]
   */
  render() {
    return (
      <RichTextEditor
        editorClassName="react-rte"
        value={this.state.value}
        onChange={value => this.onChange(value)}
      />
    );
  }
}

StatefulEditor.propTypes = {
  onChange: PropTypes.func,
};

const noop = () => {};
StatefulEditor.defaultProps = {
  onChange: noop,
};

export default StatefulEditor;
