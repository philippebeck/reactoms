import { default as default_2 } from 'react';

/**
 * ! CARD ATOM COMPONENT
 * @name Card
 * @description Renders the Card with a Content & an optional Caption
 *
 * @param {CardProps} props
 *  The Properties of the Card
 *
 * @param {React.ReactElement} props.content
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
 * @property {React.ReactElement} content
 *  The Content of the Card
 *
 * @property {React.ReactElement|string} [caption=""]
 *  The optional Caption of the Card
 *  @default ""
 */
declare interface CardProps {
    content: React.ReactElement;
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
 * @property {string} [props.design="link"]
 *  The Design Class of the Link
 *  @default "link"
 *
 * @property {boolean} [props.label=""]
 *  The Aria Label of the Link
 *  @default ""
 *
 * @property {string} [props.title=""]
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
 * @param {Array} props.array
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
 * @property {Array} array
 *  The Items Array of the List
 */
declare interface ListProps {
    array: string[];
}

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
export declare const Title: ({ heading, level, prefix, subtitle }: TitleProps) => default_2.ReactElement<HTMLHeadingElement>;

/**
 * ! TITLE PROPS INTERFACE
 * @interface TitleProps
 * @description The Properties of the Title
 *
 * @property {string} heading
 *  The Text of the Title
 *
 * @property {number} [level = 4]
 *  The Level of the Title
 *  @default 4
 *
 * @property {React.ReactElement|string} [prefix=""]
 *  The Prefix of the Title
 *  @default ""
 *
 * @property {React.ReactElement|string} [subtitle=""]
 *  The Subtitle of the Title
 *  @default ""
 */
declare interface TitleProps {
    heading: string;
    level?: number;
    prefix?: React.ReactElement | string;
    subtitle?: React.ReactElement | string;
}

export { }
