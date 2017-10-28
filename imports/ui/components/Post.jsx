import React, { Component, PropTypes } from 'react'
import moment from 'moment'

export default class Post extends Component {
  render() {
    return (
      <div className="card my-4">
        <div className="card-header">
          <p className="h5 m-0 mr-2 float-left">{ this.props.post.title ? this.props.post.title : 'No Title'}</p>
          <p className="h5 m-0 mt-auto float-left font-weight-light">- {this.props.post.author}</p>
          <p className="h6 m-0 float-right"><small>{moment(this.props.post.createdAt).format('D MMM YY h:mm a')}</small></p>
        </div>
        <div className="p-3">
          <p className="h6 m-0">{this.props.post.content}</p>
        </div>
      </div>
    )
  }
}
