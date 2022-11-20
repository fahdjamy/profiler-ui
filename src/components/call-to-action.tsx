import React from 'react'
import Button from './common/button/Button'
import Card from './common/cards/card'
import Header from './common/header/Header'

const CAT: React.FC = () => {
  const heading = 'Let us Make Your Software Project or Product Work'
  const actionFlow = [
    {
      title: 'Get started right away',
      text: 'Text me or schedule a call to discuss every detail of your software project or you problem to be resolved.',
      button: true,
      buttonText: 'Contact me',
      buttonStyle: 'border p-[0.65rem] bg-[#005584] text-white rounded-md mt-[8px]'
    },
    {
      title: 'Big Software Project?',
      text: 'As you can see from my portfolio, I am highly experienced in building and leading multinational software development teams.I can count on partners in different places in this world to bring any kind of project to a successful end and support it from there',
      button: false
    },
    {
      title: 'Not sure yet?',
      text: 'Browse my impressive portfolio and see what we are capable of.',
      button: true,
      buttonText: 'View portfolio',
      buttonStyle: 'border p-[0.65rem] text-[#005584] rounded-md mt-[8px] border-2 border-blue-600'
    }
  ]
  return (
    <div className='flex flex-row w-[100%] bg-[#3d3d3d] justify-center mx-auto h-auto py-[2rem] md:h-auto'>
         <div className='flex flex-col w-[90%] items-center 2xl:w-[60%]'>
            <Header styles=' flex flex-col space-y-4 w-[100%] mx-auto h-auto text-3xl p-[2rem] text-center text-white items-center md:w-2/4' title={heading} />
            <div className='flex justify-center grid grid-rows-2 grid-flow-rows mx-auto  md:grid-cols-2 grid-flow-cols gap-4 mt-[2rem]'>
                    {actionFlow.map((item, index) => (
                        <Card key={index} title={item.title}
                        buttonComponent={item.button
                          ? <Button title={item.buttonText}
                        style={item.buttonStyle} />
                          : null} text={item.text}
                          style='flex flex-col items-center rounded-lg w-80 bg-white box-content shadow-2xl text-center justify-center p-[1rem] space-y-6' />
                    ))}
            </div>
         </div>
    </div>
  )
}
export default CAT
