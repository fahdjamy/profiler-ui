import Layout from '../../components/Layout'
import React, { Fragment } from 'react'
import { BioCard } from '../../components/aboutComponents'

export interface AboutProps {
  data: undefined | string
}

const About: React.FC = () => {
  return (
    <Layout>
      <Fragment>
          <div>
            <BioCard />
          </div>
      </Fragment>
    </Layout>
  )
}

export default About
