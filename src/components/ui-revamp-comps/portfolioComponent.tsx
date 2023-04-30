import React, { useState } from 'react'
import Container from '../common/container/revamp-container/container'

interface TabNavigationProps {
  tabs: Array<{ name: string, content: JSX.Element }>
  visible: boolean
}

const PortfolioComponent: React.FC<TabNavigationProps> = ({ tabs, visible }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name)

  const handleTabClick = (tabName: string): void => {
    setActiveTab(tabName)
  }

  return (
     <Container styles='flex flex-col ml-[2rem] w-screen mt-[8rem] p-[1rem] justify-start md:mx-auto min-h-[60vh] lg:w-[77%] md:flex-row justify-between 2xl:w-[60%] body-font font-Nunito '>
      <div className={`${visible ? 'flex flex-col space-y-8 items-left font-Nunito px-[5px] h-[100%] transition-opacity duration-500 ease-out mt-[8rem] w-[100%]' : 'opacity-0'}`}>
        <h2 className="flex items-center w-[50%] relative text-4xl sm:text-5xl lg:text-6xl whitespace-nowrap">
          <span className="absolute left-0 text-green-500 font-mono text-lg font-bold mr-4">02.</span>
          <span className="relative z-10 px-4 text-3xl ml-4 sm:text-5xl lg:text-2xl font-bold ">Where I’ve worked</span>
          <span className="flex-grow h-px bg-gray-400 ml-4"></span>
        </h2>
        <div className='w-full h-auto flex flex-row '>
            <div className='w-[20%] md:w-[11%]'>
            <ul className="flex flex-col">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className={` ${
                activeTab === tab.name ? 'border-l-2 border-gray-400 w-[100%]' : 'bg-white w-[100%]'
              }`}
            >
              <button
                className="py-2 px-4 text-gray-800 font-semibold"
                onClick={() => handleTabClick(tab.name)}
              >
                {tab.name}
              </button>
            </li>
          ))}
            </ul>
          </div>
             {tabs.map((tab) => (
          <div
            key={tab.name}
            className={activeTab === tab.name ? 'w-[80%] ml-0 p-[5px] md:w-[50%] md:ml-2' : 'hidden'}
          >
            <div className='flex flex-col space-y-1 py-3'>
            <h2 className='font-bold text-2xl '>Role @ Company name </h2>
            <span>May 2019-present</span>
            </div>
            {tab.content}
          </div>
             ))}
          </div>
          </div>
    </Container>
  )
}

export default PortfolioComponent
