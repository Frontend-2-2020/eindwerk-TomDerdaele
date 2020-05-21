import React, { Component } from "react";
import testslider from "./testslider"; // DUMMY DATA
import Slider from "react-slick";
import PostsSliderPost from "./PostsSliderPost";
import "slick-carousel/slick/slick.css";
import "./PostsSlider.css"

class PostsSlider extends Component {
  sliderRef = React.createRef();

  componentDidMount() {
    window.addEventListener("wheel", this.slideWheel);
    console.log("add scroll event");
  }

  componentWillUnmount() {
    window.removeEventListener("wheel", this.slideWheel);
    console.log("Remove scroll event");
  }

  slideWheel = (e) => {
    console.log("scollr");
    this.slide(e.wheelDelta);
  };

  slide = (Delta) => {
    Delta > 0
      ? this.sliderRef.current.slickPrev()
      : this.sliderRef.current.slickNext();
  };

  render() {
    const settings = {
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      className: "post-slider",
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
          {testslider.map((post) => {
            return <PostsSliderPost post={post} key={post.id} />;
          })}
        </Slider>
      </div>
    );
  }
}

export default PostsSlider;
