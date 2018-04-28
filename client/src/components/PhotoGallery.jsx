import React from 'react';
import $ from 'jquery';
import Photo from './Photo.jsx';
import Modal from './Modal.jsx';

const queryString = require('query-string');

export default class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPhotos: [],
      showModal: false,
      selectedPhoto: [],
      index: 0,
      modalIndex: 0,
      totalNumberOfPics: 0,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.previousPhoto = this.previousPhoto.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.sliderNext = this.sliderNext.bind(this);
    this.sliderPrevious = this.sliderPrevious.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    const parsed = queryString.parse(location.search);
    this.getPhotos(Number(parsed.id));
  }

  getPhotos(id) {
    $.ajax({
      type: 'GET',
      url: `http://54.147.42.91:80/api/photo/${id}`,
      dataType: 'json', 
      contentType: 'application/json',
      success: (results) => {
        const restaurantPhotos = []
        for (let i = 0; i < results.length; i++) {
          restaurantPhotos.push(results[i]);
        }
        const firstThreePhotos = restaurantPhotos.slice(0, 3);
        this.setState({
          photos: restaurantPhotos,
          currentPhotos: firstThreePhotos,
          totalNumberOfPics: restaurantPhotos.length,
        });
      },
      error: (error) => {
        console.log('get request error')
      }
    })
  };

  handleOpen(photo) {
    const index = this.state.photos.indexOf(photo);
    this.setState({
      showModal: true,
      selectedPhoto: photo,
      modalIndex: index,
    });
  }

  handleClose() {
    this.setState({
      showModal: false,
      selectedPhoto: [],
    });
  }


  previousPhoto() {
    let previousOne;
    if (this.state.modalIndex === 0) {
      previousOne = this.state.photos[this.state.photos.length - 1];
    } else {
      previousOne = this.state.photos[this.state.modalIndex - 1];
    }
    let newModalIndex = this.state.modalIndex - 1;
    if (newModalIndex === -1) {
      newModalIndex = this.state.totalNumberOfPics - 1;
    }
    this.setState({
      selectedPhoto: previousOne,
      modalIndex: newModalIndex,
    });
  }

  nextPhoto() {
    let nextOne;
    if (this.state.modalIndex === (this.state.photos.length - 1)) {
      nextOne = this.state.photos[0];
    } else {
      nextOne = this.state.photos[this.state.modalIndex + 1];
    }
    let newModalIndex = this.state.modalIndex + 1;
    if (newModalIndex === this.state.totalNumberOfPics) {
      newModalIndex = 0;
    }
    this.setState({
      selectedPhoto: nextOne,
      modalIndex: newModalIndex,
    });
  }

  sliderNext() {
    if (this.state.index < this.state.photos.length - 3) {
      const nextThree = this.state.photos.slice((this.state.index + 1), (this.state.index + 4));
      this.setState({
        index: this.state.index + 1,
        currentPhotos: nextThree,
      });
    }
  }

  sliderPrevious() {
    if (this.state.index > 0) {
      const previousThree = this.state.photos.slice((this.state.index - 1), (this.state.index + 2));
      this.setState({
        index: this.state.index - 1,
        currentPhotos: previousThree,
      });
    }
  }

  handleKeyPress(event) {
    if (event.keyCode === 27) {
      this.handleClose();
    } else if (event.keyCode === 37) {
      this.previousPhoto();
    } else if (event.keyCode === 39) {
      this.nextPhoto();
    }
  }

  render() {
    return (
      <div className="wrapper"> 
        <div className="intro" tabIndex={0} onKeyDown={this.handleKeyPress}>
          {this.state.totalNumberOfPics>=3 &&
            <a className="photo-gallery-prev" onClick={() => this.sliderPrevious()} ></a>
          }
            {this.state.currentPhotos.map((photo) => <Photo key={photo.photoId} photo = {photo} handleOpen = {this.handleOpen} totalNumberOfPics = {this.state.totalNumberOfPics} emptyPage = {this.state.emptyPage}/>)}
          {this.state.totalNumberOfPics >= 3 &&
            <a className="photo-gallery-next" onClick={() => this.sliderNext()}></a>
          }
          {this.state.totalNumberOfPics === 0 &&
            <span>
              <img height="220" width="660" src='https://s3-us-west-1.amazonaws.com/welp-icons/0Pictures.png' className="emptypage" />        
            </span>
          }
          {this.state.totalNumberOfPics === 1 &&
            <span>
              <img height="220" width="440" src='https://s3-us-west-1.amazonaws.com/welp-icons/1Pictures.png' className="emptypage" />
            </span>
          }
          {this.state.totalNumberOfPics === 2 &&
            <span>
              <img height="220" width="220" src='https://s3-us-west-1.amazonaws.com/welp-icons/2Pictures.png' className="emptypage" />
            </span>
          }
          {this.state.showModal && (
            <Modal
              selectedPhoto={this.state.selectedPhoto}
              handleClose={this.handleClose}
              previousPhoto={this.previousPhoto}
              nextPhoto={this.nextPhoto}
              modalIndex={this.state.modalIndex}
              totalNumberOfPics={this.state.totalNumberOfPics}
            />
          )}
        </div>
      </div>
    );
  }
}
