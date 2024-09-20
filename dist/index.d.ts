import { default as default_2 } from 'react';

/**
 * ! BUTTON MOLECULE COMPONENT
 * @name Button
 * @description Renders the Button that displays a Link with an Icon & a Text
 *
 * @param {ButtonProps} props
 *  The Properties of the Button
 *
 * @param {LinkProps} props.link
 *  The Link of the Button
 *
 * @param {string} props.ico
 *  The Icon of the Button
 *
 * @param {string} props.txt
 *  The Text of the Button
 *
 * @returns {React.ReactElement<HTMLLinkElement>}
 *  The rendered Button
 */
export declare const Button: ({ link, ico, txt }: ButtonProps) => React.ReactElement<HTMLLinkElement>;

/**
 * ! BUTTON PROPS INTERFACE
 * @interface ButtonProps
 * @description The Properties of the Button
 *
 * @property {LinkProps} link
 *  The Link of the Button
 *
 * @property {IconProps} ico
 *  The Icon of the Button
 *
 * @property {string} txt
 *  The Text of the Button
 */
declare interface ButtonProps {
    link: LinkProps;
    ico: IconProps;
    txt: string;
}

/**
 * ! CARD ATOM COMPONENT
 * @name Card
 * @description Renders the Card with a Content & an optional Caption
 *
 * @param {CardProps} props
 *  The Properties of the Card
 *
 * @param {React.ReactElement|undefined} props.content
 *  The Content of the Card
 *
 * @param {React.ReactElement|string} [props.caption=""]
 *  The optional Caption of the Card
 *  @default ""
 *
 * @return {React.ReactElement<HTMLElement>}
 *  The rendered Card
 */
export declare const Card: ({ content, caption }: CardProps) => React.ReactElement<HTMLElement>;

/**
 * ! CARD PROPS INTERFACE
 * @interface CardProps
 * @description The Properties of the Card
 *
 * @property {React.ReactElement|undefined} content
 *  The Content of the Card
 *
 * @property {React.ReactElement|string} [caption=""]
 *  The optional Caption of the Card
 *  @default ""
 */
declare interface CardProps {
    content: React.ReactElement | undefined;
    caption?: React.ReactElement | string;
}

/**
 * ! COLLAPSE ATOM COMPONENT
 * @name Collapse
 * @description Renders the Collapse with a Summary & a Content
 *
 * @param {CollapseProps} props
 *  The Properties of the Collapse
 *
 * @param {React.ReactElement|string} props.title
 *  The Title of the Collapse
 *
 * @param {React.ReactElement|string} props.content
 *  The Content of the Collapse
 *
 * @return {React.ReactElement<HTMLDetailsElement>}
 *  The rendered Collapse
 */
export declare const Collapse: ({ title, content }: CollapseProps) => React.ReactElement<HTMLDetailsElement>;

/**
 * ! COLLAPSE PROPS INTERFACE
 * @interface CollapseProps
 * @description The Properties of the Collapse
 *
 * @property {React.ReactElement|string} title
 *  The Title of the Collapse
 *
 * @property {React.ReactElement|string} content
 *  The Content of the Collapse
 */
declare interface CollapseProps {
    title: React.ReactElement | string;
    content: React.ReactElement | string;
}

/**
 * ! FOOTER MOLECULE COMPONENT
 * @name Footer
 * @description Renders the Footer with an Items Array as an unordered list
 *
 * @param {FooterProps} props
 *  The Properties of the Footer
 *
 * @param {Array<ButtonProps>} props.array
 *  The Items Array of the Footer
 *
 * @returns {React.ReactElement<HTMLElement>}
 *  The rendered Footer
 */
export declare const Footer: ({ array }: FooterProps) => React.ReactElement<HTMLElement>;

/**
 * ! FOOTER PROPS INTERFACE
 * @interface FooterProps
 * @description The Properties of the Footer
 *
 * @property {Array<ButtonProps>} array
 *  The Items Array of the Footer
 */
declare interface FooterProps {
    array: Array<ButtonProps>;
}

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
export declare const Gallery: ({ array }: GalleryProps) => React.ReactElement<HTMLUListElement>;

/**
 * ! GALLERY ITEM PROPS INTERFACE
 * @interface GalleryItemProps
 * @description The Properties of the Gallery Item
 *
 * @property {string} url
 *  The URL of the Item
 *
 * @property {string} name
 *  The Name of the Item
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
declare interface GalleryItemProps {
    url: string;
    name?: string;
    detail?: string;
    caption?: {
        title: string;
        technos?: string[];
    };
    image?: {
        url: string;
        alt: string;
    };
}

/**
 * ! GALLERY PROPS INTERFACE
 * @interface GalleryProps
 * @description The Properties of the Gallery
 *
 * @property {Array<GalleryItemProps>} array
 *  The Items Array of the Gallery
 */
declare interface GalleryProps {
    array: Array<GalleryItemProps>;
}

/**
 * ! ICON ATOM COMPONENT
 * @name Icon
 * @description Renders the Icon with a Name, an optional Category,
 *  an optional Option, an optional Visibility & an optional Event
 *  If the event is defined, the onClick & onKeyDown events will be triggered
 * @see {@link https://fontawesome.com/v5/search?o=r&m=free}
 *
 * @param {IconProps} props
 *  The Properties of the Icon
 *
 * @param {string} props.name
 *  The Name of the Icon
 *
 * @param {string} [props.cat="brands"]
 *  The Category of the Icon
 *  @default "brands"
 *
 * @param {string} [props.option="2x"]
 *  The Option of the Icon
 *  @default "2x"
 *
 * @param {boolean} [props.isHidden=true]
 *  The Visibility of the Icon
 *  @default true
 *
 * @param {(React.MouseEvent<HTMLElement>|React.KeyboardEvent<HTMLElement>)|undefined} [props.event=undefined]
 *  The Event of the Icon
 *  @default undefined
 *
 * @return {React.ReactElement<HTMLElement>}
 *  The rendered Icon
 */
export declare const Icon: ({ name, cat, option, isHidden, event }: IconProps) => React.ReactElement<HTMLElement>;

/**
 * ! ICON PROPS INTERFACE
 * @interface IconProps
 * @description The Properties of the Icon
 *
 * @property {string} name
 *  The Name of the Icon
 *
 * @property {string} [cat="brands"]
 *  The Category of the Icon
 *  @default "brands"
 *
 * @property {string} [option="2x"]
 *  The Option of the Icon
 *  @default "2x"
 *
 * @property {boolean} [isHidden=true]
 *  The Visibility of the Icon
 *  @default true
 *
 * @property {(React.MouseEvent<HTMLElement>|React.KeyboardEvent<HTMLElement>)|undefined} [event=undefined]
 *  The Event of the Icon
 *  @default undefined
 */
declare interface IconProps {
    name: string;
    cat?: string;
    option?: string;
    isHidden?: boolean;
    event?: (event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
}

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
declare const Image_2: ({ url, alt, design }: ImageProps) => React.ReactElement<HTMLImageElement>;
export { Image_2 as Image }

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
declare interface ImageProps {
    url: string;
    alt: string;
    design?: string;
}

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
export declare const Link: ({ content, url, design, label, title }: LinkProps) => React.ReactElement<HTMLLinkElement>;

/**
 * ! LINK PROPS INTERFACE
 * @interface LinkProps
 * @description The Properties of the Link
 *
 * @property {React.ReactElement|string} content
 *  The Content of the Link
 *
 * @property {string} url
 *  The URL of the Link
 *
 * @property {string} [design="link"]
 *  The Design Class of the Link
 *  @default "link"
 *
 * @property {boolean} [label=""]
 *  The Aria Label of the Link
 *  @default ""
 *
 * @property {string} [title=""]
 *  The Title of the Link
 *  @default ""
 */
declare interface LinkProps {
    content: React.ReactElement | string;
    url: string;
    design?: string;
    label?: string;
    title?: string;
}

/**
 * ! LIST ATOM COMPONENT
 * @name List
 * @description Renders the List with an Items Array as an unordered list
 *
 * @param {ListProps} props
 *  The Properties of the List
 *
 * @param {React.ReactElement[]|string[]} props.array
 *  The Array of items to render in the List
 *
 * @return {React.ReactElement<HTMLUListElement>}
 *  The rendered List
 */
export declare const List: ({ array }: ListProps) => React.ReactElement<HTMLUListElement>;

/**
 * ! LIST PROPS INTERFACE
 * @interface ListProps
 * @description The Properties of the List
 *
 * @property {React.ReactElement[]|string[]} array
 *  The Items Array of the List
 */
declare interface ListProps {
    array: React.ReactElement[] | string[];
}

/**
 * ! NAVBAR MOLECULE COMPONENT
 * @name Navbar
 * @description Renders the Navbar with an Items Array as an unordered list
 *
 * @param {NavbarProps} props
 *  The Properties of the Navbar
 *
 * @param {Array<ButtonProps>} props.array
 *  The Items Array of the Navbar
 *
 * @returns {React.ReactElement<HTMLElement>}
 *  The rendered Navbar
 */
export declare const Navbar: ({ array }: NavbarProps) => React.ReactElement<HTMLElement>;

/**
 * ! NAVBAR PROPS INTERFACE
 * @interface NavbarProps
 * @description The Properties of the Navbar
 *
 * @property {Array<ButtonProps>} array
 *  The Items Array of the Navbar
 */
declare interface NavbarProps {
    array: Array<ButtonProps>;
}

/**
 * ! SLIDER MOLECULE COMPONENT
 * @name Slider
 * @description Renders the Slider that displays an Array of items &
 *  allows the user to navigate through or to watch them in auto sequence
 *
 * @param {SliderProps} props
 *  The Properties of the Slider
 *
 * @param {Array<React.ReactElement>} props.array
 *  The Items Array of the Slider
 *
 * @param {number} props.timer
 *  The Timer of the Slider
 *  @default 5000
 *
 * @return {React.ReactElement<HTMLElement>}
 *  The rendered Slider
 */
export declare const Slider: ({ array, timer }: SliderProps) => React.ReactElement<HTMLElement>;

/**
 * ! SLIDER PROPS INTERFACE
 * @interface SliderProps
 * @description The Properties of the Slider
 *
 * @property {Array<React.ReactElement>} array
 *  The Items Array of the Slider
 *
 * @property {number} [timer=5000]
 *  The Timer of the Slider
 *  @default 5000
 */
declare interface SliderProps {
    array: Array<React.ReactElement>;
    timer?: number;
}

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
export declare const Title: ({ txt, lvl, sub, ico }: TitleProps) => default_2.ReactElement<HTMLHeadingElement>;

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
declare interface TitleProps {
    txt: string;
    lvl?: number;
    sub?: string;
    ico?: IconProps | undefined;
}

export { }
