import React from 'react';


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
          <span class="photo" onMouseEnter={() => this.mouseOnPic()} onMouseLeave={() => this.mouseLeavePic()} onClick = {() => this.props.handleOpen(this.props.photo)}>
          <img height="250" width="250" src={this.props.photo.photoUrl} className="image" />
        </span>
      )
    } else {
      return (
        <span class="photo" onMouseEnter={() => this.mouseOnPic()} onMouseLeave={() => this.mouseLeavePic()} onClick={() => this.props.handleOpen(this.props.photo)}>
          <img height="220" width="220" src={this.props.photo.photoUrl} className="image" />
      </span>
       )
     }
  }
}