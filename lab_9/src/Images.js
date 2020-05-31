import React, { Component } from "react";
import "./App.css";
import "./Images.css"
import Popup from "./Popup"

import Photo0 from './img/img1.jpg'
import Photo1 from './img/img2.jpg'
import Photo2 from './img/img3.jpg'
import Photo3 from './img/img4.jpg'
import Photo4 from './img/img5.jpg'
import Photo5 from './img/img6.jpg'

class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
            imageUrlArray: [
                Photo0,
                Photo1,
                Photo2,
                Photo3,
                Photo4,
                Photo5
            ],
            showModal: false,
            popImageUrl: ""
        }
    }
    imageSubmitter = (e) => {
        e.preventDefault();
        let imageUrlsArray = this.state.imageUrlArray;
        imageUrlsArray.push(this.state.imageUrl)
        this.setState({
            imageUrlsArray: imageUrlsArray
        })
    }

    handleLinkChange = (e) => {
        e.preventDefault();
        this.setState({
            imageUrl: e.target.value
        })
    }

    imageDeletter(url, e) {
        let imageUrlsArray = this.state.imageUrlArray;
        let indexSplice = imageUrlsArray.indexOf(url)
        imageUrlsArray.splice(indexSplice, 1)
        this.setState({
            imageUrlsArray: imageUrlsArray
        })
    }

    handlePopup = (url) => {
        this.setState({
            showModal: !this.state.showModal,
            popImageUrl: url
        })
    }


    ttt = (smth1, smth2) => {
        this.imageDeletter(smth1, smth2)
        this.handlePopup()
    }


    render() {
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index) => {
            return ( <
                img className = "singleImage"
                src = { url }
                key = { index }
                onClick = {
                    () => this.handlePopup(url)
                }
                />
            )
        })
        return ( < div className = "Images" >
            <
            form onSubmit = { this.imageSubmitter } >
            <
            input type = "text"
            placeholder = "Input url images"
            onChange = { this.handleLinkChange }
            /> <button type = "Submit"
            class = "SubmitButton" > Submit image </button></form> { images } {
                this.state.showModal ? ( <
                    Popup popImageUrl = { this.state.popImageUrl }
                    closePopup = { this.handlePopup }
                    deleteImage = { this.ttt.bind(this, this.state.popImageUrl) }
                    />
                ) : null
            } <
            /div>
        );
    }
}

export default Images;