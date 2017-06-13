import React, { Component } from 'react';
import CommentInput from './CommentInput';

/**
 * [state description]
 * @type {Object}
 */
class AddNewPost extends Component {

  /**
   * [constructor description]
   */
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
    };
  }

  /**
   * [handleEditTitle description]
   * @param  {[type]} input [description]
   */
  handleEditTitle(input) {
    const title = input;
    this.setState({
      title,
    });
  }

  /**
   * [handleEditBody description]
   * @param  {[type]} input [description]
   */
  handleEditBody(input) {
    const body = input;
    this.setState({
      body,
    });
  }

  /**
   * [render description]
   * @return {Element} [description]
   */
  render() {
    return (
      <CommentInput
        userName={this.state.title}
        comment={this.state.body}
        handleEditUserName={input => this.handleEditTitle(input)}
        handleEditComment={input => this.handleEditBody(input)}
        handleSend={console.log}
      />
    );
  }
}

export default AddNewPost;
