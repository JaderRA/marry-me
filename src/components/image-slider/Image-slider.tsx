import "./Image-slider.css";
import React, { useEffect, useState } from "react";

interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Controla a animação em andamento
  const [transitionImage, setTransitionImage] = useState<number | null>(null); // Índice da imagem saindo
  const length = images.length;

  // Avança para o próximo slide
  const handleNext = () => {
    if (isAnimating) return; // Evita ações durante a animação
    setTransitionImage(current); // Define a imagem atual como a que está saindo
    setIsAnimating(true);

    // Aguarda a animação terminar antes de atualizar o slide
    setTimeout(() => {
      setCurrent((current + 1) % length); // Avança para o próximo slide
      setTransitionImage(null); // Remove a imagem de transição
      setIsAnimating(false); // Animação concluída
    }, 300); // Tempo da animação (300ms)
  };

  // Retorna ao slide anterior
  const handlePrev = () => {
    if (isAnimating) return;
    setTransitionImage(current);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrent((current - 1 + length) % length); // Retorna ao slide anterior
      setTransitionImage(null);
      setIsAnimating(false);
    }, 300);
  };

  // Configura o ciclo automático
  useEffect(() => {
    const slideInterval = setInterval(handleNext, interval);
    return () => clearInterval(slideInterval);
  }, [current, interval]);

  return (
    <section className="relative flex justify-center items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={
            index === current
              ? "animate-slide-in-right transition duration-300 ease-in-out"
              : index === transitionImage
              ? "animate-slide-out-left transition duration-300 ease-in-out"
              : "hidden"
          }
        >
          {index === current && (
            <img
              src={image}
              alt="travel"
              className="w-[31.25rem] h-[18.75rem] rounded-xl"
            />
          )}
        </div>
      ))}
      <button
        className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 bg-white border-none p-3 rounded-[50%] select-none left-[1.563rem]"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 bg-white border-none p-3 rounded-[50%] select-none right-[1.563rem]"
        onClick={handleNext}
      >
        Next
      </button>
    </section>
  );
};

export default ImageSlider;
