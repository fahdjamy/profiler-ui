import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

export interface validationProps {
  value?: string | null | undefined
  error?: string | undefined
}
interface FormValues {
  name: string | number | boolean
  email: string
  message: string
}

const validateEmail = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required')
})

const ContactForm: React.FC = () => {
  return (
    <div>
        <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validateEmail}
      onSubmit={(values: FormValues) => {
        // Send the form values to the server or do something else
        console.log(values)
      }}
    >
      {({ errors, touched }) => (
         <Form className='flex flex-col p-[0.5rem] items-center'>
          <div className='flex flex-row w-[100%] justify-between'>
          <div className='flex flex-col w-[45%]'>
            <label htmlFor="name" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Name</label>
            <Field name="name" type="text" className='block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' />
             {(errors.name !== undefined && errors.name !== null) &&
              (touched.name !== undefined && touched.name !== null)
               ? (
             <div>{errors.name}</div>
                 )
               : null}
          </div>
          <div className='flex flex-col w-[45%]'>
            <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Email</label>
            <Field name="email" type="email" className='block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' />
                  {(errors.email !== undefined && errors.email !== null) &&
                  (touched.email !== undefined && touched.email !== null)
                    ? (
             <div>{errors.email}</div>
                      )
                    : null}
          </div>
          </div>
          <div className='flex flex-col w-[100%]'>
            <label htmlFor="message" className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>Message</label>
            <Field name="message" as="textarea" className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' />
                  {(errors.message !== undefined && errors.message !== null) &&
                  (touched.message !== undefined && errors.message !== null)
                    ? (
             <div>{errors.message}</div>
                      )
                    : null}
          </div>
          <button type="submit" className='border bg-blue-700 p-[8px] rounded-[5px] mt-[2rem] text-white'>Get in touch</button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default ContactForm
