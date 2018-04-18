import React from 'react';
import CommentBox from './CommentBox.jsx';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal" onClick={this.props.handleClose} >
        <div className="modal-photo">
          <img src={this.props.selectedPhoto.photoUrl} />
        </div>
        <div className='modal-comment'>
          <CommentBox photo={this.props.selectedPhoto} />
        </div>
      </div>
    )
  }
}

export default Modal;