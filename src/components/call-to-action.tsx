import React from 'react'
import Button from './common/button/Button'
import Card from './common/cards/card'

const CAT: React.FC = () => {
  const heading = 'Let us Make Your Software Project or Product Work'
  const actionFlow = [
    {
      title: 'Get started right away',
      text: 'Text me or schedule a call to discuss every detail of your software project or you problem to be resolved.',
      button: <Button/>
    },
    {
      title: 'Big Software Project?',
      text: 'As you can see from my portfolio, I am highly experienced in building and leading multinational software development teams.I can count on partners in different places in this world to bring any kind of project to a successful end and support it from there'
    },
    {
      title: 'Not sure yet?',
      text: 'Browse my impressive portfolio and see what we are capable of.'
    }
  ]
  return (
    <div className='flex flex-row w-[100%] bg-[#3d3d3d] justify-center mx-auto h-auto py-[2rem] md:h-auto'>
         <div className='flex flex-col w-[90%] items-center md:w-[60%]'>
            <Card style=' flex flex-col space-y-4 w-[100%] mx-auto h-auto p-[2rem] text-center text-white items-center md:w-2/4' title={heading} />
            <div className='flex justify-center grid grid-rows-2 grid-flow-rows  md:grid-cols-2 grid-flow-cols gap-4 mt-[2rem]'>
                    {actionFlow.map((item, index) => (
                        <Card key={index} title={item.title} buttonComponent={item.button} text={item.text} style='flex flex-col items-center rounded-lg w-80 bg-white box-content shadow-2xl justify-center p-[1rem] space-y-6' />
                    ))}
            </div>
         </div>
    </div>
  )
}
export default CAT
