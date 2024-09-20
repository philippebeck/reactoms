import { useEffect, useState } from "react";
import { SliderProps } from "./SliderProps";
import { Icon } from "../../atoms/icon/Icon";
import "./slider.scss";

/**
 * ! SLIDER MOLECULE COMPONENT
 * @name Slider
 * @description Renders the Slider that displays an Array of items &
 *  allows the user to navigate through or to watch them in auto sequence
 *
 * @param {SliderProps} props
 *  The Properties of the Slider
 * 
 * @param {Array<React.ReactElement>} props.array
 *  The Items Array of the Slider
 * 
 * @param {number} props.timer
 *  The Timer of the Slider
 *  @default 5000
 *
 * @return {React.ReactElement<HTMLElement>}
 *  The rendered Slider
 */
export const Slider =
  ({ array, timer = 5000 }: SliderProps) :
  React.ReactElement<HTMLElement> => {

  const LENGTH: number = array.length;

  const [i, setIndex]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);
  const goNext: () => void = () => setIndex((i) => (i + 1) % LENGTH);
  const goPrevious: () => void = () => setIndex((i) => (i - 1 + LENGTH) % LENGTH);

  //! ********** AUTOPLAY **********

  let [isAuto, setAuto]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(timer !== 0);
  const toggleAuto: () => void = () => setAuto((state) => !state);

  useEffect(() => {
    let interval: number;
    if (isAuto) interval = setInterval(() => goNext(), timer);

    return () => clearInterval(interval);
  }, [isAuto, LENGTH]);

  //! ********** KEYBOARD EVENTS **********

  const handleKeyDown: (event: KeyboardEvent) => void = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        goPrevious();
        break;
      case 'ArrowRight':
        goNext();
        break;
      case 'a':
      case 'A':
      case 'p':
      case 'P':
        toggleAuto();
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  //! ********** RENDER **********

  return (
    <figure
      className="slider"
      role="region"
      aria-label="slider"
    >
      {array[i]}

      {LENGTH > 1 && (
        <nav>
          <Icon
            name="chevron-left"
            cat="solid"
            isHidden={false}
            event={goPrevious}
          />

          <Icon
            name="chevron-right"
            cat="solid"
            isHidden={false}
            event={goNext}
          />

          <Icon
            name={isAuto ? 'pause' : 'play'}
            cat="solid"
            isHidden={false}
            event={toggleAuto}
          />
        </nav>
      )}

      <progress value={(i + 1) / LENGTH}></progress>
    </figure>
  )
}
