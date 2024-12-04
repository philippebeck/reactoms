import { NavbarProps } from './NavbarProps'
import { Button } from '../button/Button'
import { List } from '../../atoms/list/List'
import './navbar.scss'

/**
 * ! NAVBAR MOLECULE COMPONENT
 * @name Navbar
 * @description Renders the Navbar with a Brand, an Links Array as an unordered list & an Option
 * 
 * @param {NavbarProps} props
 *  The Properties of the Navbar
 *
 * @param {ButtonProps} props.brand
 *  The Brand of the Navbar
 *
 * @param {Array<ButtonProps>} props.links
 *  The Links of the Navbar
 *
 * @param {ButtonProps} props.contact
 *  The Contact of the Navbar
 *
 * @returns {React.ReactElement<HTMLElement>}
 *  The rendered Navbar
 */
export const Navbar =
  ({ brand, links, contact }: NavbarProps) :
  React.ReactElement<HTMLElement> => {

  return (
    <nav className="navbar">
      <Button
        link={brand.link}
        ico={brand.ico}
      />

      <List
        array={links.map((item) =>
          <Button
            link={item.link}
            ico={item.ico}
            txt={item.txt}
          />
        )}
      />

      <Button
        link={contact.link}
        ico={contact.ico}
      />
    </nav>
  )
}
