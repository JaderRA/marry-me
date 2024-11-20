import { useRef, useState } from "react";
import "./App.css";
import TextCard from "../text-card/TextCard";
import Button from "../button/Button";
import Confetti from "../confetti/Confetti";
import ImageSlider from "../image-slider/Image-slider";

function App() {
  const firstButtonRef = useRef<HTMLButtonElement | null>(null);
  const secondButtonRef = useRef<HTMLButtonElement | null>(null);
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/330px-Flower_poster_2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/330px-Flower_poster_2.jpg",
  ];
  let paddingCounter = 10;
  let fontSizeCounter = 18;
  const [showConfettiAndYesText, setShowConfetti] = useState(false);

  const handleSecondButtonClick = () => {
    handleSizeVariations();
    handlePositionVariation();
  };

  const handleSizeVariations = () => {
    if (firstButtonRef.current) {
      firstButtonRef.current.style.padding = `${paddingCounter}px`;
      firstButtonRef.current.style.fontSize = `${fontSizeCounter}px`;
      paddingCounter += 6;
      fontSizeCounter += 4;
    }
  };

  const handlePositionVariation = () => {
    if (secondButtonRef.current) {
      const { innerWidth, innerHeight } = window;

      const buttonWidth = secondButtonRef.current.offsetWidth;
      const buttonHeight = secondButtonRef.current.offsetHeight;

      const randomTop = Math.floor(
        Math.random() * (innerHeight - buttonHeight)
      );
      const randomLeft = Math.floor(Math.random() * (innerWidth - buttonWidth));
      secondButtonRef.current.style.top = `${randomTop}px`;
      secondButtonRef.current.style.left = `${randomLeft}px`;
    }
  };
  return (
    <div
      className={`bg-gradient-to-t from-[#e2c1d0] to-[#fbfbfa] h-screen w-screen px-5 py-3 absolute ${
        showConfettiAndYesText ? "dark-overlay" : ""
      }`}
    >
      {showConfettiAndYesText && <Confetti />}
      {showConfettiAndYesText && (
        <div className="text-5xl font-leagueScript font-semibold h-screen w-screen absolute z-[15] flex items-center text-[#feb81d] animate-tracking-in-expand">
          Ela disse SIM!!!
        </div>
      )}
      <ImageSlider images={images} interval={3000}></ImageSlider>
      <TextCard></TextCard>
      <div className="flex flex-row w-full h-fit items-center justify-start px-10">
        <Button
          ref={firstButtonRef}
          label="Sim"
          bgColor="#a93c4a"
          clickFn={() => setShowConfetti(true)}
        />
        <span
          className="absolute w-fit h-fit right-[60px]"
          ref={secondButtonRef}
        >
          <Button
            label="Não"
            bgColor="#6e6e6d"
            clickFn={handleSecondButtonClick}
          />
        </span>
      </div>
    </div>
  );
}

export default App;
