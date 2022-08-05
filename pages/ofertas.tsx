import { NextPage } from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../components/Layout/Layout'
import OfertasLayout from '../components/Layout/OfertasLayout'


const Oferta: NextPage = () => {
  return (
      <div>
        <Head>
          <title>Desde ofertas</title>
        </Head>
        <h1>Ofertas</h1>
        <h2>mas ofertas </h2>
      </div>
  )
}



export default Oferta