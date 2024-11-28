import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ago2017 from "../../assets/img/ago_2017.jpg";
import photo2018 from "../../assets/img/2018.jpg";
import set2019 from "../../assets/img/set_2019.jpg";
import photo2020 from "../../assets/img/2020.jpg";
import jan2021 from "../../assets/img/jan_2021.jpg";
import mar22 from "../../assets/img/mar_2022.jpg";
import jan2023 from "../../assets/img/jan_2023.jpg";
import fev2023 from "../../assets/img/fev_2023.jpg";
import ago2024 from "../../assets/img/ago_2024.jpg";

const items = [
  <div className="bg-[#e2c1d0]/40 rounded-lg" data-value="1">
    <img
      src={ago2017}
      className="max-h-[240px] w-full h-full object-contain"
      alt=""
    ></img>
  </div>,
  <div className="bg-[#e2c1d0]/40 rounded-lg" data-value="2">
    <img
      className="max-h-[240px] w-full h-full object-contain"
      src={photo2018}
      alt=""
    ></img>
  </div>,
  <div className="bg-[#e2c1d0]/40 rounded-lg" data-value="3">
    <img
      className="max-h-[240px] w-full h-full object-contain"
      src={set2019}
      alt=""
    ></img>
  </div>,
  <div className="bg-[#e2c1d0]/40 rounded-lg" data-value="4">
    <img
      className="max-h-[240px] w-full h-full object-contain"
      src={photo2020}
      alt=""
    ></img>
  </div>,
  <div className="bg-[#e2c1d0]/40 rounded-lg" data-value="5">
    <img
      className="max-h-[240px] w-full h-full object-contain"
      src={jan2021}
      alt=""
    ></img>
  </div>,
  <div className="bg-[#e2c1d0]/40 rounded-lg" data-value="6">
    <img
      className="max-h-[240px] w-full h-full object-contain"
      src={mar22}
      alt=""
    ></img>
  </div>,
  <div className="bg-[#e2c1d0]/40 rounded-lg" data-value="7">
    <img
      className="max-h-[240px] w-full h-full object-contain"
      src={jan2023}
      alt=""
    ></img>
  </div>,
  <div className="bg-[#e2c1d0]/40 rounded-lg" data-value="8">
    <img
      className="max-h-[240px] w-full h-full object-contain"
      src={fev2023}
      alt=""
    ></img>
  </div>,
  <div className="bg-[#e2c1d0]/40 rounded-lg" data-value="9">
    <img
      className="max-h-[240px] w-full h-full object-contain"
      src={ago2024}
      alt=""
    ></img>
  </div>,
];

const Carousel = () => (
  <AliceCarousel
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={2000}
    animationDuration={1000}
    animationType="slide"
    infinite
    disableButtonsControls
    disableDotsControls
    touchTracking={true}
    items={items}
  />
);

export default Carousel;
