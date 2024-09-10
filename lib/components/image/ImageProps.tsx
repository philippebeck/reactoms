/**
 * ! IMAGE PROPS INTERFACE
 * @interface ImageProps
 * @description The Properties of the Image
 *
 * @property {string} url
 *  The URL of the Image
 *
 * @property {string} alt
 *  The Alternative Text of the Image
 *
 * @property {string} [design="image"]
 *  The Design Class of the Image
 */
export interface ImageProps {
  url: string
  alt: string
  design?: string
}
