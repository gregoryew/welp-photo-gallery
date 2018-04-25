import React from 'react';
import CommentBox from './CommentBox.jsx';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal" onClick={() => this.props.handleClose()}>
        <span className="close cursor" onClick={() => this.props.handleClose()}>Close  &times;</span>
        <div className="modal-photo" onClick= {(event)=> event.stopPropagation()}>
          <a className="modal-prev" onClick = {()=> this.props.previousPhoto(this.props.selectedPhoto)}></a>
          <img className = "modal-selectedphoto" src={this.props.selectedPhoto.photoUrl} />
          <div className = 'modal-underbar'onClick= {(event)=> event.stopPropagation()}>
            <span className = 'modal-underbar-left'>   Browse All </span>
            <span className='modal-underbar-middle'> {this.props.modalIndex+1} of {this.props.totalNumberOfPics}</span>
            <span className='modal-underbar-right'> Share   </span>
          </div>
          <a className="modal-next" onClick={() => this.props.nextPhoto(this.props.selectedPhoto)}></a>
          
        </div>
        <div className='modal-comment' onClick={(event) => event.stopPropagation()}>
          <CommentBox photo={this.props.selectedPhoto} />
        </div>
      </div>
    )
  }
}

export default Modal;
