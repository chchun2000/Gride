import React from 'react';
import Head from 'next/head'

class LandingPage extends React.Component
{
    render()
      {
          return (<React.Fragment>
              <Head>
                  <title>Home</title>
                  <link rel="icon" href="/favicon.ico" />
              </Head>
              <p>Landing Page</p>
          </React.Fragment>)
      }
}
export default LandingPage;

