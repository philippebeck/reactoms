/**
 * ! ICON PROPS INTERFACE
 * @interface IconProps
 * @description The Properties of the Icon
 * 
 * @property {string} name
 *  The Name of the Icon
 *
 * @property {string} [cat="brands"]
 *  The Category of the Icon
 *  @default "brands"
 *
 * @property {string} [option="2x"]
 *  The Option of the Icon
 *  @default "2x"
 *
 * @property {boolean} [isHidden=true]
 *  The Visibility of the Icon
 *  @default true
 *
 * @property {(React.MouseEvent<HTMLElement>|React.KeyboardEvent<HTMLElement>)|undefined} [event=undefined]
 *  The Event of the Icon
 *  @default undefined
 */
export interface IconProps {
  name: string
  cat?: string
  option?: string
  isHidden?: boolean
  event?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void
}
