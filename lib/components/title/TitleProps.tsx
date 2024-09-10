/**
 * ! TITLE PROPS INTERFACE
 * @interface TitleProps
 * @description The Properties of the Title
 * 
 * @property {string} heading
 *  The Text of the Title
 *
 * @property {number} [level = 4]
 *  The Level of the Title
 *  @default 4
 *
 * @property {React.ReactElement|string} [prefix=""]
 *  The Prefix of the Title
 *  @default ""
 *
 * @property {React.ReactElement|string} [subtitle=""]
 *  The Subtitle of the Title
 *  @default ""
 */
export interface TitleProps {
  heading: string
  level?: number
  prefix?: React.ReactElement | string
  subtitle?: React.ReactElement | string
}
