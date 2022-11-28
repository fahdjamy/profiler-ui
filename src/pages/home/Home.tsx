import React, { ReactElement, Fragment } from 'react'
import Layout from '../../components/Layout'
import Banner from '../../components/banner'
import Features from '../../components/feature'
import WorkFlow from '../../components/workFlow'
import Skills from '../../components/skills'
import CAT from '../../components/call-to-action'
import Testimonial from '../../components/testimonial'

const Home: React.FC = (): ReactElement => {
  return (
    <Layout>
      <Fragment>
        <Banner />
        <Features />
         <WorkFlow />
        <Skills />
        <CAT />
        <Testimonial />
      </Fragment>
    </Layout>
  )
}
export default Home
