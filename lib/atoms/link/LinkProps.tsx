/**
 * ! LINK PROPS INTERFACE
 * @interface LinkProps
 * @description The Properties of the Link
 * 
 * @property {React.ReactElement|string} content
 *  The Content of the Link
 *
 * @property {string} url
 *  The URL of the Link
 *
 * @property {string} [props.design="link"]
 *  The Design Class of the Link
 *  @default "link"
 *
 * @property {boolean} [props.label=""]
 *  The Aria Label of the Link
 *  @default ""
 *
 * @property {string} [props.title=""]
 *  The Title of the Link
 *  @default ""
 */
export interface LinkProps {
  content: React.ReactElement|string
  url: string
  design?: string
  label?: string
  title?: string
}
