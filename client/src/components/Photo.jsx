import React from 'react';
import CommentBox from './CommentBox.jsx';


export default class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered:false
    };
  }

  mouseOnPic() {
    this.setState({
      hovered: true
    });
  }

  mouseLeavePic() {
    this.setState({
      hovered:false
    });
  }

  render() {
    if (this.state.hovered === true) {
      return (
        <span className="square" onMouseEnter={() => this.mouseOnPic()} onMouseLeave={() => this.mouseLeavePic()}>
          <a href={this.props.photo.photoUrl} data-lightbox = "food" ><img height="250" width = "250" src={this.props.photo.photoUrl} className="image" /></a>
          <CommentBox photo={this.props.photo}/> 
        </span>
      )
    } else {
      return (
      <span className="square" onMouseEnter={() => this.mouseOnPic()} onMouseLeave={() => this.mouseLeavePic()}>
          <a href={this.props.photo.photoUrl} data-lightbox="food" ><img height="220" width="220" src={this.props.photo.photoUrl} className="image" /></a>
        <CommentBox photo={this.props.photo} /> 
      </span>
       )
     }
  }
}