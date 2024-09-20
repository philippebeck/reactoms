import { FooterProps } from './FooterProps'
import { Button } from '../button/Button'
import { List } from '../../atoms/list/List'
import './footer.scss'

/**
 * ! FOOTER MOLECULE COMPONENT
 * @name Footer
 * @description Renders the Footer with an Items Array as an unordered list
 *
 * @param {FooterProps} props
 *  The Properties of the Footer
 *
 * @param {Array<ButtonProps>} props.array
 *  The Items Array of the Footer
 *
 * @returns {React.ReactElement<HTMLElement>}
 *  The rendered Footer
 */
export const Footer =
  ({ array }: FooterProps):
  React.ReactElement<HTMLElement> => {

  return (
    <footer className="footer">
      <List
        array={array.map((item) =>
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
