import { Card } from '../../lib/atoms/card/Card'
import { Collapse } from '../../lib/atoms/collapse/Collapse'
import { Icon } from '../../lib/atoms/icon/Icon'
import { Image } from '../../lib/atoms/image/Image'
import { Link } from '../../lib/atoms/link/Link'
import { List } from '../../lib/atoms/list/List'

import { Slider } from '../../lib/molecules/slider/Slider'
import { Title } from '../../lib/molecules/title/Title'

import tsLogo from '../assets/ts.svg'
import reactLogo from '../assets/react.svg'
import sassLogo from '../assets/sass.svg'
import viteLogo from '../assets/vite.svg'

import './app.css'

/**
 * ! APP FUNCTION COMPONENT
 * @name App
 * @description The homepage of the Reactoms library
 *
 * @returns {React.ReactElement<HTMLElement>}
 *  The rendered Article with the lib components
 */
const App = () => {

  return (
    <article>

      <Title
        heading="Welcome to Reactoms!"
        level={1}
        subtitle="A React Components Library made with TypeScript, Sass & Vite" />

      <Card
        content={
          <>
            <Link
              url="https://www.typescriptlang.org"
              design="#"
              content={
                <Image
                  url={tsLogo}
                  alt="TypeScript logo"
                  design="#"
                />
              }
            />

            <Link
              url="https://react.dev"
              design="#"
              content={
                <Image
                  url={reactLogo}
                  alt="React logo"
                  design="react"
                />
              }
            />

            <Link
              url="https://sass-lang.com"
              design="#"
              content={
                <Image
                  url={sassLogo}
                  alt="Sass logo"
                  design="#"
                />
              }
            />

            <Link
              url="https://vitejs.dev"
              design="#"
              content={
                <Image
                  url={viteLogo}
                  alt="Vite logo"
                  design="#"
                />
              }
            />
          </>
        }
        caption="Click on the TypeScript, React, Sass & Vite logos to learn more..."
      />

      <Slider
        array={[
          <Icon
            name="address-card"
            cat="regular"
            option="10x"
          />,
          <Icon
            name="caret-down"
            cat="solid"
            option="10x"
          />,
          <Icon
            name="icons"
            cat="solid"
            option="10x"
          />,
          <Icon
            name="image"
            cat="regular"
            option="10x"
          />,
          <Icon
            name="link"
            cat="solid"
            option="10x"
          />,
          <Icon
            name="list"
            cat="solid"
            option="10x"
          />,
          <Icon
            name="photo-film"
            cat="solid"
            option="10x"
          />,
          <Icon
            name="heading"
            cat="solid"
            option="10x"
          />
        ]}
      />

      <Collapse
        title="Edit src/App.jsx & save to test the components:"
        content={
          <List
            array={[
              "Atoms: Card, Collapse, Icon, Image, Link, List",
              "Molecules: Slider, Title"
            ]}
          />
        }
      />
    </article>
  )
}

export default App
