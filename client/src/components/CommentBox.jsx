import React from 'react';


export default class CommentBox extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.photo.userName}</div> 
        <div>
          <span>Followers: {this.props.photo.userFollowers}  </span>
          <span>  Reviews: {this.props.photo.userReviews}</span>
        </div> 
        <div>{this.props.photo.date}</div>
      </div>
    )
  }
}