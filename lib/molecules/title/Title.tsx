import React from 'react'
import { TitleProps } from "./TitleProps"
import { Icon } from '../../atoms/icon/Icon'
import "./title.scss"

/**
 * ! TITLE MOLECULE COMPONENT
 * @name Title
 * @description Renders the Title with a Heading Text,
 *  an optional Level, an optional Subtitle & an optional Icon
 *
 * @param {TitleProps} props
 *  The Properties of the Title
 *
 * @param {string} props.heading
 *  The Text of the Title
 *
 * @param {number} [props.level=4]
 *  The Level of the Title
 *  @default 4
 *
 * @param {string} [props.subtitle=""]
 *  The Subtitle of the Title
 *  @default ""
 *
 * @param {IconProps|undefined} [props.icon=undefined]
 *  The Icon of the Title
 *  @default undefined
 *
 * @returns {React.ReactElement<HTMLHeadingElement>}
 *  The rendered Title
 */
export const Title =
  ({ heading, level = 4, subtitle = "", icon = undefined }: TitleProps):
  React.ReactElement<HTMLHeadingElement> => {

    level = Number(level)
    if (level < 1 || level > 3) level = 4
    const HeadingLevel = `h${level}`

  return (
    <hgroup className="title">
      {icon && <p>{React.createElement(Icon, icon)}</p>}
      {React.createElement(HeadingLevel, {}, heading)}
      {subtitle && <p>{subtitle}</p>}
    </hgroup>
  )
}
