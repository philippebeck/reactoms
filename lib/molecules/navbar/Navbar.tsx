import { NavbarProps } from './NavbarProps'
import { Button } from '../button/Button'
import { List } from '../../atoms/list/List'
import './navbar.scss'

/**
 * ! NAVBAR MOLECULE COMPONENT
 * @name Navbar
 * @description Renders the Navbar with an Items Array as an unordered list
 * 
 * @param {NavbarProps} props
 *  The Properties of the Navbar
 *
 * @param {Array<ButtonProps>} props.array
 *  The Items Array of the Navbar
 *
 * @returns {React.ReactElement<HTMLElement>}
 *  The rendered Navbar
 */
export const Navbar =
  ({ array }: NavbarProps) :
  React.ReactElement<HTMLElement> => {

  return (
    <nav className="navbar">
      <List
        array={array.map((item) =>
          <Button
            link={item.link}
            ico={item.ico}
            txt={item.txt}
          />
        )}
      />
    </nav>
  )
}
