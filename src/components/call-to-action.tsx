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
    <div className='flex flex-row w-[100%] bg-slate-500 justify-center mx-auto h-[50vh]'>
         <div className='flex flex-col w-[90%]'>
            <Card style=' flex flex-col space-y-4 w-2/4 mx-auto h-auto p-[2rem] items-center' title={heading} />
            <div className='flex justify-center grid grid-col-2 grid-flow-col gap-4 mt-[2rem]'>
                    {actionFlow.map((item, index) => (
                        <Card key={index} title={item.title} buttonComponent={item.button} text={item.text} style='flex flex-col items-center rounded-lg w-80 box-content shadow-2xl justify-center p-[1rem] space-y-6' />
                    ))}
            </div>
         </div>
    </div>
  )
}
export default CAT
