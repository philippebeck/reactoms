import { CardProps } from './CardProps'
import './card.scss'

/**
 * ! CARD ATOM COMPONENT
 * @name Card
 * @description Renders the Card with a Content & an optional Caption
 *
 * @param {CardProps} props
 *  The Properties of the Card
 *
 * @param {React.ReactElement} props.content
 *  The Content of the Card
 *
 * @param {React.ReactElement|string} [props.caption=""]
 *  The optional Caption of the Card
 *  @default ""
 *
 * @return {React.ReactElement<HTMLElement>}
 *  The rendered Card
 */
export const Card =
  ({ content, caption = "" }: CardProps):
  React.ReactElement<HTMLElement> => {

  return (
    <figure className="card">
      {content}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
