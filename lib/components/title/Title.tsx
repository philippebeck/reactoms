import React from 'react'
import { TitleProps } from "./TitleProps"
import "./title.scss"

/**
 * ! TITLE COMPONENT
 * @name Title
 * @description Renders the Title with a Heading Text,
 *  an optional Level, an optional Prefix & an optional Subtitle
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
 * @param {React.ReactElement|string} [props.prefix=""]
 *  The Prefix of the Title
 *  @default ""
 *
 * @param {React.ReactElement|string} [props.subtitle=""]
 *  The Subtitle of the Title
 *  @default ""
 *
 * @returns {React.ReactElement<HTMLHeadingElement>}
 *  The rendered Title
 */
export const Title =
  ({ heading, level = 4, prefix = "", subtitle = "" }: TitleProps):
  React.ReactElement<HTMLHeadingElement> => {

    level = Number(level)
    if (level < 1 || level > 3) level = 4
    const HeadingLevel = `h${level}`

  return (
    <hgroup className="title">
      {prefix && <p>{prefix}</p>}
      {React.createElement(HeadingLevel, {}, heading)}
      {subtitle && <p>{subtitle}</p>}
    </hgroup>
  )
}
