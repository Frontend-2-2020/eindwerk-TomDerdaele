import React, { Component } from "react";
import PropTypes from 'prop-types';

import "slick-carousel/slick/slick.css";
import "./PostsSlider.css"

import Slider from "react-slick";
import PostsSliderPost from "./PostsSliderPost";

class PostsSlider extends Component {
  sliderRef = React.createRef();

  componentDidMount() {
    window.addEventListener("wheel", this.slideWheel);
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.slideWheel);
    console.log("Remove scroll event");
  }

  slideWheel = (e) => {
    this.slide(e.wheelDelta);
  };

  slide = (Delta) => {
    Delta > 0
      ? this.sliderRef.current.slickPrev()
      : this.sliderRef.current.slickNext();
  };

  render() {
    const {allposts} = this.props
    const settings = {
      className: "post-slider",
      infinite: false,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      vertical: false,
      verticalSwiping: false,
      swipeToSlide: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            swipeToSlide: true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            infinite: true,
            speed: 500,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
          },
        },
      ],
    };

    return (
      <div>
        <Slider ref={this.sliderRef} {...settings}>
          {allposts.map((post) => {
            return <PostsSliderPost post={post} key={post.id} />;
          })}
        </Slider>
      </div>
    );
  }
}

PostsSlider.propTypes = {
allposts: PropTypes.array.isRequired,
};

export default PostsSlider;