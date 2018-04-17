import React from 'react';
import $ from 'jquery';
import Photo from './Photo.jsx'

const queryString = require('query-string');

export default class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount(){
    const parsed = queryString.parse(location.search);
    this.getPhotos(Number(parsed.id))
  }

  getPhotos(id) {
    $.ajax({
      type: 'GET',
      url: `/api/photo/${id}`,
      dataType: 'json', 
      contentType: 'application/json',
      success: (results) => {
        const restaurantPhotos = []
        for (let i = 0; i < results.length; i++) {
          restaurantPhotos.push(results[i]);
        }
        this.setState({
          photos: restaurantPhotos,
        });
      },
      error: (error) => {
        console.log('get request error')
      }
    })
  }

  render() {
    return (
      <div>
        <div>I am a photo gallery</div>
        {this.state.photos.map((photo)=> <Photo photo = {photo}/>)}
      </div>
    );
  }
}
