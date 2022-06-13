import Head from 'next/head'


export default function Layuot({ info }) {
  return(
    <Head>
      <title>Serhii's {info}</title>
      <meta name="description" content="My CV" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
};