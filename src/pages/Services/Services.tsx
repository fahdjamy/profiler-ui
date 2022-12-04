import Development from '../../components/servicesComponents/development'
import React, { Fragment } from 'react'
import Layout from '../../components/Layout'
import ManagementService from '../../components/servicesComponents/managment'
import ContactMe from '../../components/servicesComponents/contactMe'
import { ServiceCTA } from '../../components/servicesComponents'

const Services: React.FC = () => {
  return (
    <Layout>
        <Fragment>
         <Development />
         <ContactMe />
         <ManagementService />
         < ServiceCTA />
        </Fragment>
    </Layout>
  )
}

export default Services
