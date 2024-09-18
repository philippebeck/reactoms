import { LinkProps } from './LinkProps'
import './link.scss'

/**
 * ! LINK ATOM COMPONENT
 * @name Link
 * @description Renders the Link with a Content, an URL,
 *  an optional Design class, an optional Aria Label & an optional Title
 *  If the URL starts with "https", it will be rendered as an external Link
 *  with target="_blank" & rel="noopener noreferrer"
 *
 * @param {LinkProps} props
 *  The Properties of the Link
 *
 * @param {React.ReactElement|string} props.content
 *  The Content of the Link
 *
 * @param {string} props.url
 *  The URL of the Link
 *
 * @param {string} [props.design="link"]
 *  The Design Class of the Link
 *  @default "link"
 *
 * @param {string} [props.label=""]
 *  The Aria Label of the Link
 *  @default ""
 *
 * @param {string} [props.title=""]
 *  The Title of the Link
 *  @default ""
 *
 * @return {React.ReactElement<HTMLLinkElement>}
 *  The rendered Link
 */
export const Link =
  ({ content, url, design="link", label="", title="" }: LinkProps):
  React.ReactElement<HTMLLinkElement> => {

  const isExternal = url.startsWith('https')

  return (
    <a
      href={url}
      className={`${design}`}
      {...(label ? { 'aria-label': label } : {})}
      {...(title ? { 'title': title } : {})}
      {...(isExternal ? { 'rel': 'noopener noreferrer' } : {})}
      {...(isExternal ? { 'target': '_blank' } : {})}
    >
      {content}
    </a>
  )
}
