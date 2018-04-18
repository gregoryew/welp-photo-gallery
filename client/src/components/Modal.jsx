import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal" onClick={this.props.handleClose} >
        <div className="modal-content">
          <img src={this.props.selectedPhoto.photoUrl} />
        </div>
      </div>
    )
  }
}

export default Modal;