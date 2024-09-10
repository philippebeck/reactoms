import { Card } from '../../lib/components/card/Card'
import { Collapse } from '../../lib/components/collapse/Collapse'
import { Icon } from '../../lib/components/icon/Icon'
import { Image } from '../../lib/components/image/Image'
import { Link } from '../../lib/components/link/Link'
import { List } from '../../lib/components/list/List'
import { Title } from '../../lib/components/title/Title'

import tsLogo from '../assets/ts.svg'
import reactLogo from '../assets/react.svg'
import sassLogo from '../assets/sass.svg'
import viteLogo from '../assets/vite.svg'
import './app.css'

const App = () => {

  return (
    <article>
      <Icon
        name="user-ninja"
        cat="solid"
        option="10x"
      />

      <Title
        heading="Welcome to Reactoms !"
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

      <Collapse
        title="Edit src/App.jsx & save to test the components:"
        content={
          <List
            array={["Card,", "Collapse,", "Icon,", "Image,", "Link,", "List,", "Title"]}
          />
        }
      />
    </article>
  )
}

export default App
