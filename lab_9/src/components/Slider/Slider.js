import React, {Component} from "react";
import Photo0 from './img/img1.jpg'
import Photo1 from './img/img2.jpg'
import Photo2 from './img/img3.jpg'
import Photo3 from './img/img4.jpg'
import Photo4 from './img/img5.jpg'
import Photo5 from './img/img6.jpg'
import style from './Slider.module.css'

class Slider extends Component {
    constructor(props){
        super(props)
        this.state = {
            images: [
                Photo0,
                Photo1,
                Photo2,
                Photo3,
                Photo4,
                Photo5
            ],
            currentImagesIndex: 0,
            isPreview: false,
            input: '',
            width: 300,
            height: 300
        }
    }

    nextSlideHandler = () => {
        if (this.state.currentImagesIndex < this.state.images.length - 1) {
            this.setState({currentImagesIndex: this.state.currentImagesIndex + 1})
        }
    }
    prevSlideHandler = () => {
        if (this.state.currentImagesIndex > 0) {
            this.setState({currentImagesIndex: this.state.currentImagesIndex - 1})
        }
    }
    deleteHandler = () => {
        let arr = this.state.images
        arr.splice(this.state.currentImagesIndex, 1)
        this.setState({images: arr})
    }

    checkImagePrev = () => {
        if (this.state.currentImagesIndex > 0) {
            return this.state.images[this.state.currentImagesIndex - 1];
        } else {
            return null;
        }
    }
    checkImageNext = () => {
        if (this.state.currentImagesIndex < this.state.images.length - 1) {
            return this.state.images[this.state.currentImagesIndex + 1];
        } else {
            return null;
        }
    }
    handleInputChange = (e) => {
        this.setState({input: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault()
        let arr = this.state.images;
        arr.push(this.state.input);
        console.log(this.state.images);
    }
    onPreview = (e) => {
        this.setState({isPreview: !this.state.isPreview})
        if (this.state.isPreview == true) {
            this.setState({
                width: 600,
                height: 600
            })
        } else if (this.state.isPreview == false) {
            this.setState({
                width: 250,
                height: 250
            })
        }
    }
    render() {
        const size = {
            width: this.state.width,
            height: this.state.height
        };
        return(
            <div className={style.slider}>
                <div>
                    <button onClick={this.prevSlideHandler}>Prev</button>
                </div>
                <div className={style.container}>
                    <img className={style.preview} alt=" " src={this.checkImagePrev()}/>
                    <div className={style.main}>
                        <img src={this.state.images[this.state.currentImagesIndex]} style={size} onClick={this.onPreview}alt="slider"/>
                        <button onClick={this.deleteHandler}>Delete</button>
                        <form>
                            Write your Img URL to Add
                            <input type="text" name="title" value={this.state.input} onChange={this.handleInputChange} />
                            <button type="button" onClick={this.onSubmit} className="btn">Save</button>
                        </form>
                    </div>
                    <img className={style.preview} alt=" " src={this.checkImageNext()}/>
                </div>
                <div>
                    <button onClick={this.nextSlideHandler}>Next</button>
                </div>
            </div>
        )
    }

}

export default Slider;