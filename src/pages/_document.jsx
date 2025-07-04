import { Head, Html, Main, NextScript } from 'next/document'

const image = '/assets/img/responsively-image.png'
const title = 'sneha sambrama charity foundation '
const description =
  'Sneha Sambrama Charity Foundation - Dedicated to spreading kindness and heartfelt service.'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
        <link rel="icon" type="image/jpeg" href="/assets/img/logos/logo.jpeg" />
        <link rel="apple-touch-icon" href="/assets/img/logos/logo.jpeg" />
        <meta
          data-react-helmet="true"
          name="description"
          content={description}
        />
        <meta data-react-helmet="true" property="og:title" content={title} />
        <meta
          data-react-helmet="true"
          property="og:description"
          content={description}
        />
        <meta data-react-helmet="true" property="og:type" content="website" />
        <meta data-react-helmet="true" property="og:image" content={image} />
        <meta
          data-react-helmet="true"
          property="twitter:image"
          content={image}
        />
        <meta
          data-react-helmet="true"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          data-react-helmet="true"
          name="twitter:creator"
          content="ResponsivelyApp"
        />
        <meta
          data-react-helmet="true"
          name="twitter:site"
          content="ResponsivelyApp"
        />
        <meta data-react-helmet="true" name="twitter:title" content={title} />
        <meta
          data-react-helmet="true"
          name="twitter:description"
          content={description}
        />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
