import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import StatefulEditor from './StatefulEditor';


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
      finishSending: false,
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
   * [handleSendNewPost description]
   */
  handleSendNewPost() {
    // const postSchema = new Schema({
    //   author: String,
    //   title: { type: String, required: true },
    //   createdTime: Date,
    //   // updatedTime:ㄚ Date,
    //   body: String,
    //   comments: [commentSchema],
    //   // tag: String,
    // }, { collection: 'vtblogdb' });

    const author = 'Vibert Thio';
    const createdTime = new Date();
    const { title, body } = this.state;

    fetch('/api/posts', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author,
        title,
        createdTime,
        body,
      }),
    })
    .then(res => res.json())
    .then((res) => {
      console.log(res);
      this.setState({
        finishSending: true,
      });
    })
    .catch(err => console.error(err));
  }

  /**
   * [render description]
   * @return {Element} [description]
   */
  render() {
    return (
      <div>
        <TextField
          onChange={e => this.handleEditTitle(e.target.value)}
          className="title-input"
          floatingLabelText="Title"
          value={this.state.userName}
        /><br />
        <StatefulEditor onChange={input => this.handleEditBody(input)} />
        <FlatButton
          className="send-btn"
          label="Send"
          primary
          onTouchTap={() => this.handleSendNewPost()}
        />
        {!this.state.finishSending ? null : (
          <Redirect to="/posts" />
        )}
      </div>
    );
  }
}

export default AddNewPost;
