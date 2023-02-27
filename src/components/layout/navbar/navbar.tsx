import React, { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, Field } from 'formik'
import Button from '../../common/button/Button'

export interface HeaderProps {
  leftComponents?: undefined | ReactElement[] | ReactElement
  rightComponents?: undefined | ReactElement[] | ReactElement
}

interface FormValues {
  email: string
}
const validateEmail = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required')
})
const Navbar: React.FC<HeaderProps> = (props: HeaderProps): ReactElement => {
  const location = useLocation()
  return (
    <React.Fragment>
      <div className="flex items-center h-20 shadow-md body-font font-Nunito sticky top-0 z-30 bg-white ">
        <div className="flex flex-row w-[100%] justify-between items-center h-[100%] mx-auto lg:w-[90%] 2xl:w-[70%]">
            <div className="d-flex ">{props.rightComponents}</div>
            <div className="w-[40%] text-sm font-semibold">{props.leftComponents}</div>
            <div className='w-auto hidden md:flex justify-between'>
              { location.pathname === '/blog' &&
              (<><Formik initialValues={{ email: '' }}
                  validationSchema={validateEmail}
                  onSubmit={(values: FormValues) => {
                    console.log(values)
                  } }
                >
                  <Field name="email" type="email" className='block p-2 w-[70%] text-sm text-gray-900 bg-gray-50 rounded-[5px] border border-gray-300 focus:ring-blue-500 focus:border-blue-500' />
                </Formik><Button style=' shadow-lg w-[7rem] ml-[2px] rounded-[5px] bg-white  p-[2px] text-black' title='Mail me Back'/></>
              )}
            </div>
        </div>
      </div>
</React.Fragment>
  )
}
export default Navbar
