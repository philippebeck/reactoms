/**
 * ! SLIDER PROPS INTERFACE
 * @interface SliderProps
 * @description The Properties of the Slider
 * 
 * @property {Array<React.ReactElement>} array
 *  The Items Array of the Slider
 *
 * @property {number} [timer=5000]
 *  The Timer of the Slider
 *  @default 5000
 */
export interface SliderProps {
  array: Array<React.ReactElement>
  timer?: number
}
