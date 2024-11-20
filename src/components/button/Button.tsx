import { forwardRef } from "react";

interface ButtonProps {
  label: string;
  bgColor: string;
  clickFn?: () => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, bgColor, clickFn }, ref) => {
    const convertHexToRGBA = (hex: string, opacity = 1): string => {
      const tempHex = hex.replace("#", "");
      const r = parseInt(tempHex.substring(0, 2), 16);
      const g = parseInt(tempHex.substring(2, 4), 16);
      const b = parseInt(tempHex.substring(4, 6), 16);

      return `rgba(${r},${g},${b},${opacity})`;
    };

    const getContrastColor = (
      R: number,
      G: number,
      B: number,
      A: number
    ): string => {
      const brightness = R * 0.299 + G * 0.587 + B * 0.114 + (1 - A) * 255;
      return brightness > 186 ? "#000" : "#FFF";
    };

    const getRGBAandContrastColor = (rgba: string): string => {
      const r = parseInt(rgba.substring(5, 8));
      const g = parseInt(rgba.substring(9, 12));
      const b = parseInt(rgba.substring(13, 16));
      return getContrastColor(r, g, b, 1);
    };

    const labelColor = getRGBAandContrastColor(convertHexToRGBA(bgColor));

    return (
      <button
        ref={ref}
        className="rounded-xl h-fit w-fit leading-6 font-normal font-roboto"
        style={{
          backgroundColor: `${bgColor}`,
          color: `${labelColor}`,
          padding: "8px",
          fontSize: "16px",
        }}
        onClick={clickFn}
      >
        {label}
      </button>
    );
  }
);

export default Button;
