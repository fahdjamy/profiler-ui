import React, { useEffect } from 'react'
import Card from '../common/cards/card'
import Header from '../common/header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store/configureStore'
import { setServices } from '../../redux/reducers/serviceSlice'
import { develop, heading, content } from '../../mockS/servicesData'

const Development: React.FC = () => {
  const dispatch = useDispatch()
  const development = useSelector((state: RootState) => state.service.serviceList)

  useEffect(() => {
    dispatch(setServices(develop))
  }, [dispatch])

  return (
    <div className='flex flex-row w-[100%] h-auto justify-center mt-[1rem] mx-auto lg:min-h-[50vh] lg:mt-[4rem]'>
      <div className='flex flex-col w-[100%] items-center p-[1rem] md:w-[90%] xl:space-y-6 2xl:w-[60%]'>
        <Header styles=' flex flex-col w-[100%] h-auto p-[1rem] text-3xl text-center items-center lg:space-y-4 lg:w-[70%] mx-auto lg:p-[1rem]' title={heading} subHeading={content} />
        <div className='flex grid grid-rows-1 grid-flow-rows gap-4 lg:grid-cols-2 grid-flow-cols xl:grid-cols-3 grid-flow-cols'>
            {
              development.map((projects, index) => (
                <Card key={index} titleStyle='text-xs font-bold' contentStyle='text-base text-[#3D3D3D]' style='flex flex-col space-y-6 p-[0.25rem] w-80 box-content text-left h-[90%] border' title={projects.title} text={projects.content} />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Development
