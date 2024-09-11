import { IconProps } from '../../atoms/icon/IconProps'

/**
 * ! TITLE PROPS INTERFACE
 * @interface TitleProps
 * @description The Properties of the Title
 * 
 * @property {string} heading
 *  The Text of the Title
 *
 * @property {number} [level=4]
 *  The Level of the Title
 *  @default 4
 *
 * @property {string} [subtitle=""]
 *  The Subtitle of the Title
 *  @default ""
 *
 * @property {IconProps|undefined} [icon=undefined]
 *  The Icon of the Title
 *  @default undefined
 */
export interface TitleProps {
  heading: string
  level?: number
  subtitle?: string
  icon?: IconProps | undefined
}
