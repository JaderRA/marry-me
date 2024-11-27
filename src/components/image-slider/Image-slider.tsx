import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import flowerImage from "../../assets/img/flower.png";

const items = [
  <div className="bg-black text-white w-fit h-fit" data-value="1">
    <img src={flowerImage} alt=""></img>
  </div>,
  <div className="bg-black text-white w-full h-full" data-value="2">
    2
  </div>,
  <div className="bg-black text-white w-full h-full" data-value="3">
    3
  </div>,
  <div className="bg-black text-white w-full h-full" data-value="4">
    4
  </div>,
  <div className="bg-black text-white w-full h-full" data-value="5">
    5
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="slide"
    infinite
    disableButtonsControls
    touchTracking={true}
    items={items}
  />
);

export default Carousel;
