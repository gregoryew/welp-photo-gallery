import React from 'react';
import CommentBox from './CommentBox.jsx';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <span className="close cursor" onClick={() => this.props.handleClose()}>Close  &times;</span>
        <div className="modal-photo">
          <a className="modal-prev" onClick = {()=> this.props.previousPhoto(this.props.selectedPhoto)}></a>
          <img className = "modal-selectedphoto" src={this.props.selectedPhoto.photoUrl} />
          <a className="modal-next" onClick={() => this.props.nextPhoto(this.props.selectedPhoto)}></a>
        </div>
        <div className='modal-comment'>
          <CommentBox photo={this.props.selectedPhoto} />
        </div>
      </div>
    )
  }
}

export default Modal;
