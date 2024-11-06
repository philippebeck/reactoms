import { IconProps } from './IconProps'

/**
 * ! ICON ATOM COMPONENT
 * @name Icon
 * @description Renders the Icon with a Name, an optional Category,
 *  an optional Option, an optional Visibility & an optional Event
 *  If the event is defined, the onClick & onKeyDown events will be triggered
 * @see {@link https://fontawesome.com/v5/search?o=r&m=free}
 *
 * @param {IconProps} props
 *  The Properties of the Icon
 *
 * @param {string} props.name
 *  The Name of the Icon
 *
 * @param {string} [props.cat="brands"]
 *  The Category of the Icon
 *  @default "brands"
 *
 * @param {string} [props.option="2x"]
 *  The Option of the Icon
 *  @default "2x"
 *
 * @param {boolean} [props.isHidden=true]
 *  The Visibility of the Icon
 *  @default true
 *
 * @param {(React.MouseEvent<HTMLElement>|React.KeyboardEvent<HTMLElement>)|undefined} [props.event=undefined]
 *  The Event of the Icon
 *  @default undefined
 *
 * @return {React.ReactElement<HTMLElement>}
 *  The rendered Icon
 */
export const Icon =
  ({ name, cat = "brands", option = "2x", isHidden = true, event = undefined }: IconProps):
  React.ReactElement<HTMLElement> => {

  return (
    <i
      {...(event
        ? { 'className': `fa-${cat} fa-${name} fa-${option}` }
        : { 'className': `fa-${cat} fa-${name} fa-${option} fa-fw` }
      )}
      aria-hidden={isHidden}
      {...(event ? { 'onClick': (e) => event(e as React.MouseEvent<HTMLElement>) } : {})}
      {...(event ? { 'onKeyDown': (e) => event(e as React.KeyboardEvent<HTMLElement>) } : {})}
      {...(event ? { 'tabIndex': 0 } : {})}
    ></i>
  )
}
