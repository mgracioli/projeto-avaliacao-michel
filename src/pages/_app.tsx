import { AppProps } from 'next/app'
import Head from 'next/head';
import React from 'react'
import './styles/globals.css'
import './styles/variables.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const favicon = '/favicon.ico';

  return (
    <>
      <Head>
        <link rel='shortcut icon' href={favicon} />
        <title>Projeto avaliação</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
