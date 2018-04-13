import React from 'react';


export default class Photo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            hovered: false
        }
    }

    mouseOnPic(){
        this.setState({
            hovered: true
        })
    }

    mousLeavePic(){
        this.setState({
            hovered:false
        })
    }

    render() {
        if (this.state.hovered === true) {
            return (
            <span class = "square" onMouseEnter={() => this.mouseOnPic()} onMouseLeave={() => this.mouseLeavePic()}>
                <a href={this.props.url} data-lightbox = "food" ><img height="250" width = "250" src={`${this.props.url}`} className="image" /></a>
            </span>
            ) 
        } else {
            return (
                <span class = "square" onMouseEnter={() => this.mouseOnPic()} onMouseLeave={() => this.mousLeavePic()}>
                    <a href={this.props.url} data-lightbox="food" ><img height="220" width = "220" src={`${this.props.url}`} className="image" /></a>
                </span>
            )
        }
    }
}


