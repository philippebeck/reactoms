import { GalleryItemProps } from './GalleryItemProps'
import { GalleryProps } from './GalleryProps'
import { Card } from '../../atoms/card/Card'
import { Icon } from '../../atoms/icon/Icon'
import { Image } from '../../atoms/image/Image'
import { List } from '../../atoms/list/List'
import { Link } from '../../atoms/link/Link'
import { Title } from '../title/Title'
import './gallery.scss'

/**
 * ! GALLERY MOLECULE COMPONENT
 * @name Gallery
 * @description Renders the Gallery that displays
 *  a list of links based on the provided array data
 *
 * @param {GalleryProps} props
 *  The Properties of the Gallery
 * 
 * @param {Array} props.array
 *  The Items Array of the Gallery
 * 
 * @param {string} props.array.url
 *  The URL of the Item
 * 
 * @param {string} props.array.name
 *  The Name of the Item
 * 
 * @param {string} props.array.detail
 *  The Detail of the Item
 * 
 * @param {Object} props.array.caption
 *  The Caption of the Item
 * 
 * @param {string} props.array.caption.title
 *  The Title of the Item
 * 
 * @param {Array} props.array.caption.technos
 *  The Technologies of the Item Caption
 * 
 * @param {Object} props.array.image
 *  The Image of the Item
 *
 * @param {string} props.array.image.url
 *  The URL of the Item Image
 *
 * @param {string} props.array.image.alt
 *  The Alternative Text of the Item Image
 *
 * @return {React.ReactElement<HTMLUListElement>}
 *  The rendered Links
 */
export const Gallery =
  ({ array }: GalleryProps):
  React.ReactElement<HTMLUListElement> => {

  const renderItem =
    (item: GalleryItemProps, index: number):
    React.ReactElement<HTMLLIElement> => {

    const itemProps = {
      url: item.url,
      title: item.detail ? item.detail : undefined,
      design: 'btn',
      content: (
        <Card
          caption={item.caption && <Title txt={item.caption.title} />}
          content={item.image && <Image url={item.image.url} alt={item.image.alt} />}
        />
      )
    };

    if (item.name) {
      itemProps.content = <>{item.name}</>

    } else if (item.caption && item.caption.technos) {
      itemProps.content = (
        <Card
          caption={
            <>
              <Title txt={item.caption.title} />
              <List
                array={item.caption.technos.map((techno) => 
                  <Icon name={techno} option="lg" isHidden={false} />
                )}
              />
            </>
          }
          content={<Image url={item.image?.url ?? ''} alt={item.image?.alt ?? ''} />}
        />
      );
    }

    return <Link key={index} {...itemProps} />;
  };

  return <List array={array.map(renderItem)} />;
}
