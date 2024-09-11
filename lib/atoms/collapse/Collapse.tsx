import { CollapseProps } from './CollapseProps'
import "./collapse.scss";

/**
 * ! COLLAPSE ATOM COMPONENT
 * @name Collapse
 * @description Renders the Collapse with a Summary & a Content
 *
 * @param {CollapseProps} props
 *  The Properties of the Collapse
 *
 * @param {React.ReactElement|string} props.title
 *  The Title of the Collapse
 *
 * @param {React.ReactElement|string} props.content
 *  The Content of the Collapse
 *
 * @return {React.ReactElement<HTMLDetailsElement>}
 *  The rendered Collapse
 */
export const Collapse =
  ({ title, content }: CollapseProps):
  React.ReactElement<HTMLDetailsElement> => {

  return (
    <details className="collapse">
      <summary>{title}</summary>
      <figure>{content}</figure>
    </details>
  )
}
