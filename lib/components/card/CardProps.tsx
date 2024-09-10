/**
 * ! CARD PROPS INTERFACE
 * @interface CardProps
 * @description The Properties of the Card
 *
 * @property {React.ReactElement} content
 *  The Content of the Card
 *
 * @property {React.ReactElement|string} [caption=""]
 *  The optional Caption of the Card
 *  @default ""
 */
export interface CardProps {
  content: React.ReactElement
  caption?: React.ReactElement | string
}
