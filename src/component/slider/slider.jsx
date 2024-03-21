import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./slider.module.css";

import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";

import Carousel from 'react-bootstrap/Carousel';

export default function SliderMain() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>

<Carousel data-bs-theme="dark">
      <Carousel.Item>
      <img src={img1} alt="" className={style.img} />
        <Carousel.Caption>
          <h5 className="h5">ФУТБОЛКА 1</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="" className={style.img} />
        <Carousel.Caption>
          <h5 className="h5">ФУТБОЛКА 2</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} alt="" className={style.img} />
        <Carousel.Caption>
          <h5 className="h5">ФУТБОЛКА 3</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}
