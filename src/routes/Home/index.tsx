import React, { ReactElement, Fragment } from 'react'
import Layout from 'components/Layout'
import Banner from 'components/banner'
import CAT from 'components/call-to-action'
import Features from 'components/feature'
import Skills from 'components/skills'
import Testimonial from 'components/testimonial'
import WorkFlow from 'components/workFlow'

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
