import { ButtonProps } from '../button/ButtonProps'

/**
 * ! NAVBAR PROPS INTERFACE
 * @interface NavbarProps
 * @description The Properties of the Navbar
 *
 * @property {ButtonProps} brand
 *  The Brand of the Navbar
 *
 * @property {Array<ButtonProps>} links
 *  The Links of the Navbar
 *
 * @property {ButtonProps} contact
 *  The Contact of the Navbar
 */
export interface NavbarProps {
  brand: ButtonProps
  links: Array<ButtonProps>
  contact: ButtonProps
}
