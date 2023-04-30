import React, { ReactElement, useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import Button from '../../components/common/button/Button'
import AboutComponent from '../../components/ui-revamp-comps/aboutComponent'
import PortfolioComponent from '../../components/ui-revamp-comps/portfolioComponent'
import Container from '../../components/common/container/revamp-container/container'

const Home = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined

    const handleScroll = (): void => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsVisible(true)
      }, 80)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])
  const tabs = [
    {
      name: 'Tab 1',
      content: (
        <div className='space-y-6 font-Nunito'>
      <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</p>
      <p>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</p>
      <p>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</p>
      <p>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</p>
    </div>
      )
    },
    {
      name: 'Tab 2',
      content: (
        <div className='space-y-6 font-Nunito'>
      <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</p>
      <p>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</p>
      <p>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</p>
      <p>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</p>
    </div>
      )
    },
    {
      name: 'Tab 3',
      content: (
        <div className='space-y-6 font-Nunito'>
      <p>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</p>
      <p>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</p>
    </div>
      )
    },
    {
      name: 'Tab 4',
      content: (
        <div className='space-y-6 font-Nunito'>
      <p>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</p>
      <p>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</p>
    </div>
      )
    },
    {
      name: 'Tab 5',
      content: (
        <div className='space-y-6 font-Nunito'>
      <p>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</p>
      <p>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</p>
      <p>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</p>
    </div>
      )
    }
  ]
  return (
    <Layout>
      <React.Fragment>
        <Container styles='flex flex-col w-screen mt-[4rem] ml-[2rem]  p-[1rem] justify-start md:mx-auto min-h-[60vh] w-[100%] lg:w-[77%] md:flex-row justify-between 2xl:w-[60%] body-font font-Nunito' >
        <div className='flex flex-col w-[100%] space-y-8 items-left px-[5px] h-[100%]'>
        <p>Hi, my name is </p>
        <h1 className='text-5xl mt-[1rem] lg:text-6xl font-black space-y-8 h-auto'>
          Junior Developer.
          </h1>
            <h1 className='text-5xl mt-[0.5rem] lg:text-6xl font-black space-y-8 h-auto'>
         I build things for the web.
          </h1>
          <p className='w-[50%] h-[117.5px] mt-[2rem] leading-6 py-4'>
            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Basekart.
          </p>
           <Button dataTestId='action_btn' style='border border-gray-500 text-left text-gray-500 w-[30%] rounded-md p-[15px] lg:w-[20%] transition-opacity duration-500 ease-out' title='Check out my portfolio' />
        </div>
      {/* </div> */}
        </Container>
      <AboutComponent visible={isVisible}/>
      <PortfolioComponent tabs={tabs} visible={isVisible} />
      </React.Fragment>
    </Layout>
  )
}

export default Home
