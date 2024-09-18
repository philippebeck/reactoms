import { IconProps } from '../../atoms/icon/IconProps'

/**
 * ! TITLE PROPS INTERFACE
 * @interface TitleProps
 * @description The Properties of the Title
 * 
 * @property {string} txt
 *  The Text of the Title
 *
 * @property {number} [lvl=4]
 *  The Level of the Title
 *  @default 4
 *
 * @property {string} [sub=""]
 *  The Subtitle of the Title
 *  @default ""
 *
 * @property {IconProps|undefined} [ico=undefined]
 *  The Icon of the Title
 *  @default undefined
 */
export interface TitleProps {
  txt: string
  lvl?: number
  sub?: string
  ico?: IconProps | undefined
}
