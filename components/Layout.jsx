import Head from 'next/head'
const name = 'Serhii\'s'

export default function Layuot({ info }) {
  return(
    <Head>
      <title>{name} {info}</title>
      <meta name="description" content="My CV" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
        integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI="
        crossOrigin="anonymous"
      />
    </Head>
  )
};