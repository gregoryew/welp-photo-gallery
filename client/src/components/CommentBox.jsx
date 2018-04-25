import React from 'react';
import moment from 'moment';


export default class CommentBox extends React.Component {
  render() {
    return (
      <div className = "comment">
        <div className = "commentblock1">
          <div>
            <img className="comment-userprofile" src="https://s3-us-west-1.amazonaws.com/welp-icons/userProfile.png" height="50" width="50" /> 
          </div>
          <div className ="commentblock2">
            <div>
              <span className = "comment-username" >{this.props.photo.userName}</span>
            </div>
            <div>
              <img className="comment-follwers" src="https://s3-us-west-1.amazonaws.com/welp-icons/followers.png" height="20" width="25" /><span>{this.props.photo.userFollowers}</span>
              <img className="comment-reviews" src="https://s3-us-west-1.amazonaws.com/welp-icons/reviews.png" height="20" width="25"/><span>{this.props.photo.userReviews}   </span>
              <span className="comment-elite">   Elite '18 </span>
            </div>
          </div>
        </div>
        <div className="comment-sentence">This is a comment</div> 
        <div className="comment-date">{moment(`${this.props.photo.date }`).format('LL')}</div>
        <div className = "comment-question" >Was this photo ...?</div>
        <div className = "comment-helpful">
          <button> Helpful  </button>
          <button> Not Helpful </button> 
        </div>
      </div>
    )
  }
}