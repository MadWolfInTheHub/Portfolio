import Head from 'next/head'
const name = 'Serhii\'s'

export default function Layuot({ info }) {
  return(
    <Head>
      <title>{name} {info}</title>
      <meta name="description" content="My CV" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
};