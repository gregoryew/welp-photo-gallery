import React from 'react';
import Photo from './Photo.jsx'
import $ from 'jquery';


export default class PhotoGallery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            photos: [
            "https://s3-us-west-1.amazonaws.com/welp-photos/001-01.jpg",
            "https://s3-us-west-1.amazonaws.com/welp-photos/001-02.jpg",
            "https://s3-us-west-1.amazonaws.com/welp-photos/001-03.jpg",
            ]
        }
    }
    render() {
        return (
            <div>
                I am a photo gallery
                {this.state.photos.map((url)=> <Photo url = {url}/>)}
            </div>
        )
    }

}
