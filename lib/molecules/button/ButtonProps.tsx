import { IconProps } from '../../atoms/icon/IconProps'
import { LinkProps } from '../../atoms/link/LinkProps'

/**
 * ! BUTTON PROPS INTERFACE
 * @interface ButtonProps
 * @description The Properties of the Button
 *
 * @property {LinkProps} link
 *  The Link of the Button
 *
 * @property {IconProps} ico
 *  The Icon of the Button
 *
 * @property {string} txt
 *  The Text of the Button
 */
export interface ButtonProps {
  link: LinkProps
  ico: IconProps
  txt: string
}
