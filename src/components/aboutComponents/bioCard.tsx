import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../common/header/Header'
import ProfileImage from '../../assets/ben.jpg'
import ImageComponent from '../common/image/image'

const BioCard: React.FC = () => {
  const route = '/contact'
  const user = 'Benard Jovita'
  const expertise = [
    {
      text: 'Software Consulting and Digitalization Strategy'
    },
    {
      text: 'Software Consultation and xyz'

    },
    {
      text: 'Software Consultation and xyz'
    }
  ]
  const Experience = '25+ years of Experience'
  const heading = 'Nice to meet you'
  const content = 'My approach is to take the complexity out of my communication and partnership with my clients. Hire me as your technology partner that delivers: A Fullstack Software Engineer and Product Manager.'
  return (
        <div className='flex flex-col w-screen p-[1rem] justify-start
        mt-[1rem] space-y-2 mx-auto h-auto lg:w-[80%] lg:my-[4rem]
        justify-between 2xl:w-[60%] '>
        <Header styles=' flex flex-col w-[100%] h-auto p-[1rem]
         text-5xl text-center items-center lg:space-y-4 lg:w-[50%]
          mx-auto lg:p-[1rem]' title={heading} subHeading={content} />
          <div className='shadow-lg w-[100%] lg:w-[80%]
           mx-auto md:min-h-[60vh]  flex flex-col md:flex-row p-[2px] rounded-md'>
            <div className='w-[100%] md:w-[30%] flex items-center'>
              <ImageComponent imageFile={ProfileImage} style='w-[100%] h-[100%]' />
            </div>
            <div className='w-[100%] md:w-[70%] border flex items-left p-0 md:p-[2rem] flex-col'>
              <Header styles='text-xl font-bold' title={Experience} />
                <div className='w-[100%] space-y-4'>
                  {
                    expertise.map((items, index) => (
                      <li key={index} className='text-sm'>
                        {items.text}
                      </li>
                    ))
                  }
                </div>
                <span className='mt-[1rem]'>{user}</span>
                <div className='mt-[1rem]'>
                  <Link className='text-blue-600 text-xs font-bold' to={route} >
                    Talk with me
                  </Link>
                </div>
            </div>
          </div>
        </div>
  )
}

export default BioCard
