import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types'

import { Posts } from '../api/posts.js';

import Post from './components/Post.jsx'
import Latest from './components/Latest.jsx'
import Nav from './components/Nav.jsx'

class App extends Component {
  renderPosts() {
    return this.props.posts.map((post) => (
      <Post key={post._id} post={post} />
    ));
  }
  renderLatest() {
    return this.props.posts.slice(0,10).map((post) => (
      <Latest key={post._id} post={post} />
    ));
  }
  render() {
    return (
      <div className="container-fluid p-0">
        <Nav />
        <div className="container p-4">
          <div className="row">
            <div className="col-8">
              {this.renderPosts()}
            </div>
            <div className="col-4">
              <ul className="list-group my-4">
                {this.renderLatest()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    posts: Posts.find({}).fetch(),
  };
}, App);
