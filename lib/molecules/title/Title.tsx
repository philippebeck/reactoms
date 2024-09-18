import React from 'react'
import { TitleProps } from "./TitleProps"
import { Icon } from '../../atoms/icon/Icon'
import "./title.scss"

/**
 * ! TITLE MOLECULE COMPONENT
 * @name Title
 * @description Renders the Title with a Main Text,
 *  an optional Level, an optional Subtitle & an optional Icon
 *
 * @param {TitleProps} props
 *  The Properties of the Title
 *
 * @param {string} props.txt
 *  The Text of the Title
 *
 * @param {number} [props.lvl=4]
 *  The Level of the Title
 *  @default 4
 *
 * @param {string} [props.sub=""]
 *  The Subtitle of the Title
 *  @default ""
 *
 * @param {IconProps|undefined} [props.ico=undefined]
 *  The Icon of the Title
 *  @default undefined
 *
 * @returns {React.ReactElement<HTMLHeadingElement>}
 *  The rendered Title
 */
export const Title =
  ({ txt, lvl = 4, sub = "", ico = undefined }: TitleProps):
  React.ReactElement<HTMLHeadingElement> => {

    lvl = Number(lvl)
    if (lvl < 1 || lvl > 3) lvl = 4
    const Heading = `h${lvl}`

  return (
    <hgroup className="title">
      {ico && <p>{React.createElement(Icon, ico)}</p>}
      {React.createElement(Heading, {}, txt)}
      {sub && <p>{sub}</p>}
    </hgroup>
  )
}
