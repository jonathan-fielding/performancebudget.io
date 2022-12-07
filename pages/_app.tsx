/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from '../store';

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Component {...props.pageProps} />
      <Analytics />
    </Provider>
  );
}

export default App;
