import { ButtonProps } from './ButtonProps'
import { IconProps } from '../../atoms/icon/IconProps'
import { LinkProps } from '../../atoms/link/LinkProps'
import { Icon } from '../../atoms/icon/Icon'
import { Link } from '../../atoms/link/Link'
import './button.scss'

/**
 * ! BUTTON MOLECULE COMPONENT
 * @name Button
 * @description Renders the Button that displays a Link with an Icon & a Text
 *
 * @param {ButtonProps} props
 *  The Properties of the Button
 *
 * @param {LinkProps} props.link
 *  The Link of the Button
 *
 * @param {string} props.ico
 *  The Icon of the Button
 *
 * @param {string} props.txt
 *  The Text of the Button
 *
 * @returns {React.ReactElement<HTMLLinkElement>}
 *  The rendered Button
 */
export const Button =
  ({ link, ico, txt }:
  ButtonProps): React.ReactElement<HTMLLinkElement> => {

  const { url, label }: LinkProps = link
  const { name, cat, option }: IconProps = ico

  return (
    <Link
      url={url}
      label={label}
      design="link button"
      content={

        <>
          <Icon
            name={name}
            cat={cat}
            option={option}
            isHidden={false}
            event={undefined}
          />
          {txt && <b>{txt}</b>}
        </>
      }
    />
  )
}
