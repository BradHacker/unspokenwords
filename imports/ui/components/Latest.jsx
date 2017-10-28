import React, { Component, PropTypes } from 'react'
import moment from 'moment'

export default class Latest extends Component {
  render() {
    return (
      <li className="list-group-item">
        <p className="h6 m-0 float-left">
          { this.props.post.title ? this.props.post.title : 'No Title'}
        </p>
        <p className="h6 m-0 float-right"><small>{moment(this.props.post.createdAt).format('D MMM YY')}</small></p>
      </li>
    )
  }
}
