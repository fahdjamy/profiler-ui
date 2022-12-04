import Layout from '../../components/Layout'
import React, { Fragment } from 'react'

export interface AboutProps {
  data: undefined | string
}

const About: React.FC = () => {
  return (
    <Layout>
      <Fragment>
          <div>
            <h1>About me</h1>
          </div>
      </Fragment>
    </Layout>
  )
}

export default About
