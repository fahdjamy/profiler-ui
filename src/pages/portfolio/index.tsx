import Layout from '../../components/Layout'
import React, { Fragment } from 'react'
import { Customer, ClientTable, PortfolioCTA } from '../../components/portfolioComponents'

const Portfolio: React.FC = () => {
  return (
    <Layout>
      <Fragment>
        <Customer />
        <ClientTable />
        <PortfolioCTA />
      </Fragment>
    </Layout>
  )
}

export default Portfolio
