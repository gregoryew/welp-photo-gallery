import React from 'react';
import Photo from './Photo.jsx'
import $ from 'jquery';


export default class PhotoGallery extends React.Component {
    render() {
        return (
            <div>
                I am photo gallery
                <Photo />
                <Photo />
                <Photo />
            </div>
        )
    }

}
