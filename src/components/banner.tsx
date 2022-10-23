import React, { Fragment } from 'react'
import Button from './common/button/Button'
import ImageComponent from './common/image/image'
import bannerImage from '../assets/meeting.jpeg'

const Banner: React.FC = () => {
  return (
        <Fragment>
            <div className='flex flex-row w-[90%] justify-between mt-[2rem] mx-auto h-[80vh]'>
                <div className='w-[48%] flex flex-col items-left px-[5px] h-[100%]'>
                    <h2 className='text-3xl'>
                    Software Development and SaaS Product Management
                    </h2>
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
                    <div className='w-[100%] h-auto flex flex-row mt-[2rem] justify-start items-center]'>
                    <Button dataTestId='action_btn' style='border w-[7rem]  rounded-md p-[5px]' >
                        Get started
                    </Button>
                    <Button dataTestId='action_btn' style='border w-[7rem] ml-8 rounded-md p-[5px]' >
                        About Me
                    </Button>
                    </div>
                </div>
                <div className='w-[48%] h-[100%] flex flex-col'>
                    <ImageComponent imageFile={bannerImage} />
                </div>
            </div>
        </Fragment>
  )
}
export default Banner
