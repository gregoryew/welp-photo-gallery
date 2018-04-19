import React from 'react';


export default class DescriptonBar extends React.Component {
  render() {
    return (
      <div className = "descriptionbar">
        <div>
        <img className="comment-userprofile" src="https://s3-us-west-1.amazonaws.com/welp-icons/userProfile.png" height="46" width="46" text-align = "center" /> 
        </div>
        <div className = 'descriptionbarcomment'>
          <div className = "shortcomment"> This is a short comment </div>
          <div className = "descriptionuser"> by {this.props.photo.userName} </div>
        </div>
      </div>
    )
  }
}