import { ButtonProps } from '../button/ButtonProps'

/**
 * ! FOOTER PROPS INTERFACE
 * @interface FooterProps
 * @description The Properties of the Footer
 *
 * @property {string} id
 *  The Id of the Footer
 * 
 * @property {Array<ButtonProps>} links
 *  The Links Array of the Footer
 */
export interface FooterProps {
  id: string
  links: Array<ButtonProps>
}
