import { Inter } from '@next/font/google'
import Input from '@/components/input.js'
import TextArea from '@/components/Textarea.js'
import React, { useState } from 'react'
import {validate} from '../utils/validate'


const inter = Inter({ subsets: ['latin'] })

export default function Form(props) {

  //States to keep track of input data
  const[values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  //States to keep track of error data
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  //Form submittion control
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Checks for errors in our input
    const errors = validate(values);
    const isError = Object.keys(errors).length;

    //if errors object isnt null and there are multiple errors
    if(isError && isError > 0){
      setErrors(errors);
      return;
    }

    //Resets error messages to show nothing
    setErrors(errors);

    //Handling API request
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(values),
      });
      if(!res.ok){
        setValues({name: '', message: '', email: ''});
      }

      //Will redirect to thankyou page after fetch is completed
      props.route.push('/thankyou');

      //Error handeling
    } catch (error) {
      console.error(error);
    }
  }

  //Handeling change in input 
  const onChange = (e) => {
    setValues((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  //Button handeler to close form
  const closeForm = () => {
    //Sets form visibility to false
    props.setTrigger(false);

    //Resetting input values and getting rid of errors
    setValues({name: '', message: '', email: ''});
    setErrors({name: '', email: '', message: ''});
  }
  
  //if trigger is true, renders the form window, otherwise no render
  return (props.trigger) ? (
      <div className="absolute w-11/12 pb-6 overflow-y-auto bg-blue-100 border-2 border-gray-500 rounded-lg lg:w-6/12 h-9/12 lg:pt-2">
          <div className='px-3 pt-16'>
            <form className="flex flex-col items-center w-2/3 mx-auto sm:px-10" onSubmit={handleSubmit}>
              <button className = "absolute top-4 right-4 mr-6 mt-3 ring-1 ring-gray-400 bg-white rounded-md p-2 \
               text-red-700 hover:text-red-800 hover:bg-gray-100 \
               focus:outline-none focus:ring-2 focus:ring-indigo-500" 
               type='button' onClick={closeForm}>X</button>

              <Input 
              error={!!errors.name}
              errorMessage={errors.name}
              value={values.name}  
              onChange={onChange} 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              label="Your Name"/>

              <Input 
              error={!!errors.email}
              errorMessage={errors.email}
              value={values.email} 
              onChange={onChange} 
              id="email" 
              name="email" 
              placeholder="JohnDoe@gmail.com" 
              label="Your Email"/>

              <TextArea 
              error={!!errors.message}
              errorMessage={errors.message} 
              value={values.message} 
              onChange={onChange} 
              id="message" 
              name="message" 
              placeholder="Hello" 
              label="Your Message" />

              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold \
               hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
               type='submit'>Submit
              </button>
            </form>
          </div>
      </div>
  ) : ""
}
