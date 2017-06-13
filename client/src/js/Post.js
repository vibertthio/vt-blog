import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Redirect } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import './../css/post.css';


/**
 * [state description]
 * @type {Object}
 */
class Post extends Component {

  /**
   * [constructor description]
   */
  constructor() {
    super();
    this.state = {
      title: '',
      createdTime: Date(),
      body: '',
      comments: [],
      deleted: false,
    };
  }

  /**
   * [componentDidMount description]
   */
  componentDidMount() {
    fetch(`/api/post/${this.props.match.params.postId}`)
      .then(res => res.json())
      .then((p) => {
        this.setState({
          title: p.title,
          createdTime: p.createdTime,
          body: p.body,
          comments: p.comments,
        });
      })
      .catch(err => console.error(err));
  }

  /**
   * [handleDeleted description]
   */
  handleDelete() {
    console.log('deleting');
    fetch(`/api/post/${this.props.match.params.postId}`, {
      method: 'delete',
    })
    .then(res => res.json())
    .then((msg) => {
      console.log(msg);
      this.setState({
        deleted: true,
      });
    });
  }

  /**
   * [render description]
   * @return {Element} [description]
   */
  render() {
    console.log('single post');
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.createdTime}</p>
        <div className="post-body">
          {ReactHtmlParser(this.state.body)}
        </div>
        <FlatButton
          label="Delete"
          onTouchTap={() => this.handleDelete()}
        />
        {!this.state.deleted ? null : (
          <Redirect to="/posts" />
        )}
      </div>
    );
  }
}

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Post;
