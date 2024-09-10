/**
 * ! COLLAPSE PROPS INTERFACE
 * @interface CollapseProps
 * @description The Properties of the Collapse
 *
 * @property {React.ReactElement|string} title
 *  The Title of the Collapse
 *
 * @property {React.ReactElement|string} content
 *  The Content of the Collapse
 */
export interface CollapseProps {
  title: React.ReactElement | string
  content: React.ReactElement | string
}
