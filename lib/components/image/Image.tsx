import { ImageProps } from './ImageProps'
import './image.scss'

/**
 * ! IMAGE ATOM COMPONENT
 * @description Renders the Image with an URL & an Alternative Text
 *
 * @param {ImageProps} props
 *  The Properties of the Image
 *
 * @param {string} props.url
 *  The URL of the Image
 *
 * @param {string} props.alt
 *  The Alternative Text of the Image
 *
 * @param {string} [props.design="image"]
 *  The Design Class of the Image
 *
 * @return {React.ReactElement<HTMLImageElement>}
 *  The rendered Image
 */
export const Image =
  ({ url, alt, design = 'image' }: ImageProps):
  React.ReactElement<HTMLImageElement> => {

  return (
    <img
      src={url}
      alt={alt}
      className={design}
      loading="lazy"
    />
  )
}
