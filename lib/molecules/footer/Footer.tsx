import { FooterProps } from './FooterProps'
import { Button } from '../button/Button'
import { List } from '../../atoms/list/List'
import './footer.scss'

/**
 * ! FOOTER MOLECULE COMPONENT
 * @name Footer
 * @description Renders the Footer with a Links Array as an unordered list
 *
 * @param {FooterProps} props
 *  The Properties of the Footer
 *
 * @param {Array<ButtonProps>} props.links
 *  The Links of the Footer
 *
 * @returns {React.ReactElement<HTMLElement>}
 *  The rendered Footer
 */
export const Footer =
  ({ links }: FooterProps):
  React.ReactElement<HTMLElement> => {

  return (
    <footer id="contact">
      <List
        array={links.map((item) =>
          <Button
            link={item.link}
            ico={item.ico}
            txt=""
          />
        )}
      />
    </footer>
  )
}
