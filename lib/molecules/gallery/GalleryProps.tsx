/**
 * ! GALLERY ITEM PROPS INTERFACE
 * @interface GalleryItemProps
 * @description The Properties of the Gallery Item
 *
 * @property {string} url
 *  The URL of the Item
 *
 * @property {string} detail
 *  The Detail of the Item
 *
 * @property {Object} caption
 *  The Caption of the Item
 *
 * @property {string} caption.title
 *  The Title of the Item Caption
 *
 * @property {Array} caption.technos
 *  The Technologies of the Item Caption
 *
 * @property {Object} image
 *  The Image of the Item
 *
 * @property {string} image.url
 *  The URL of the Item Image
 *
 * @property {string} image.alt
 *  The Alternative Text of the Item Image
 */
export interface GalleryItemProps {
  url: string
  detail: string
  caption: {
    title: string
    technos?: string[]
  };
  image: {
    url: string
    alt: string
  }
}

/**
 * ! GALLERY PROPS INTERFACE
 * @interface GalleryProps
 * @description The Properties of the Gallery
 * 
 * @property {Array<GalleryItemProps>} array
 *  The Items Array of the Gallery
 */
export interface GalleryProps {
  array: Array<GalleryItemProps>
}
