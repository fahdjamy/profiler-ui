import React from 'react'
import Container from '../common/container/revamp-container/container'

interface aboutProp {
  visible: boolean
}

const AboutComponent: React.FC<aboutProp> = ({ visible }) => {
  return (
    <Container>
      <div className={`${visible ? 'flex flex-col space-y-8 items-left font-Nunito ml-[2rem] md:ml-[4rem] px-[5px] h-[100%] transition-opacity duration-500 ease-out mt-[8rem] w-[100%]' : 'opacity-0'}`}>
        <h2 className="flex items-center w-[50%] relative text-4xl sm:text-5xl lg:text-6xl whitespace-nowrap">
          <span className="absolute left-0 text-green-500 font-mono text-lg font-bold mr-4">01.</span>
          <span className="relative z-10 px-4 text-3xl ml-4 sm:text-5xl lg:text-2xl font-bold ">About me</span>
          <span className="flex-grow h-px bg-gray-400 ml-4"></span>
        </h2>
        <div className='w-full h-auto grid grid-cols-2 '>
          <div>
            <div className='space-y-8'>
              <p>
              Hello! My name is Junior Dev and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
            <p>
              Here are a few technologies I’ve been working with recently:
            </p>
            </div>
           <ul className="grid grid-cols-2 gap-0 md:gap-2 px-0 pt-6 list-none">
                <li>
                  JavaScript
                </li>
                 <li>
                  JavaScript
                </li>
                 <li>
                  JavaScript
                </li>
                 <li>
                  JavaScript
                </li>
                 <li>
                  JavaScript
                </li>
                 <li>
                  JavaScript
                </li>
            </ul>
          </div>
          <div className='ml-8'>
            <img src={'https://res.cloudinary.com/dykx1utnl/image/upload/v1674470107/test_image/Cars_7_Copy_2x_u4v3lg.jpg'} alt='profile-image' className="w-[300px] h-[300px] object-cover rounded-lg mb-4" />
          </div>
        </div>
        </div>
    </Container>
  )
}

export default AboutComponent
