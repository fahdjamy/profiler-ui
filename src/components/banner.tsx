import React, { Fragment } from 'react'
import Button from './common/button/Button'
import ImageComponent from './common/image/image'
import bannerImage from '../assets/meeting.jpeg'

const Banner: React.FC = () => {
  return (
        <Fragment>
            <div className='flex flex-col w-screen p-[1rem] justify-start mt-[1rem] space-y-2 mx-auto h-auto lg:w-[90%] lg:mt-[4rem] md:flex-row justify-between 2xl:w-[60%]'>
                <div className='flex flex-col w-[100%] px-0 md:w-[48%] items-left px-[5px] h-[100%]'>
                    <h1 className='text-2xl lg:text-5xl font-black space-y-8 h-auto'>
                    Software Development and SaaS Product Management
                    </h1>
                    <p className='mt-[2rem]'>
                    With 20+ years of software development and
                    SaaS product management experience, I speak technology and business.

                    <p className='mt-[2rem]'>
                    I provide First Principles-based solutions for your company.
                    </p>
                    <p className='mt-[2rem]'>

                    My team of developers and I build custom software solutions for small businesses, individuals or startups.
                    </p>
                    <p className='mt-[2rem]'>

                    I 💓 to code and build 🔥 software solutions & products
                    </p>
                    </p>
                    <div className='w-[100%] flex flex-col h-auto mt-[2rem] space-y-[1rem] justify-between md:justify-start md:flex-row md:space-y-[0]  items-center]'>
                    <Button dataTestId='action_btn' title='Get started' style='border w-[100%] bg-[#005584]  rounded-md p-[5px] text-white md:w-[7rem]' />
                    <Button dataTestId='action_btn' style='border w-[100%] rounded-md p-[5px] md:ml-8 md:w-[7rem]' title='About Me' />
                    </div>
                </div>
                <div className='w-[100%] md:w-[48%] h-[100%] flex flex-col'>
                    <ImageComponent imageFile={bannerImage} />
                </div>
            </div>
        </Fragment>
  )
}
export default Banner
