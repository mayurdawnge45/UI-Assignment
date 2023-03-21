import React from "react";
import Slider from "react-slick";
import "./StreamSlider.scss";
import sliderImg1 from "../../Assets/images/stream-slider1.png";
import PlayIcon from "../../Assets/images/play-icon.png";

const StreamSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings} className="stream_slider">
        <div className="stream_slider_items">
          <img src={sliderImg1} alt="" width="100%" />
          <div className="stream_slider_title">
            <img src={PlayIcon} alt="" />
            <h3>Wtch our livestreams</h3>
          </div>
        </div>
        <div className="stream_slider_items">
          <img src={sliderImg1} alt="" width="100%" />
          <div className="stream_slider_title">
            <img src={PlayIcon} alt="" />
            <h3>Wtch our livestreams</h3>
          </div>
        </div>
        <div className="stream_slider_items">
          <img src={sliderImg1} alt="" width="100%" />
          <div className="stream_slider_title">
            <img src={PlayIcon} alt="" />
            <h3>Wtch our livestreams</h3>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default StreamSlider;
