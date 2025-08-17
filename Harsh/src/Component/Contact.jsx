import React from 'react'

const Contact = () => {
  return (
    <div name="Contacts" className='max-w-screen-xl container mx-auto px-6 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-4 '>Contact me</h1>
      <span>Please Fill Out Form Below TO Contact Me </span>

      <div className='flex flex-col items-center justify-center mt-5 rounded-xl'>
        <form action="https://getform.io/f/brogovma"
         method="POST"
         className='bg-slate-200 w-96 px-8 py-6'>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
            <div className='flex flex-col mb-4 '>
                <label className='' >Full Name</label>
                <input
                 type="text"
                  id="name"
                   name="name"
                    placeholder='Enter Your Name'
                     className='border border-gray-300 p-2 rounded  mb-4 bg-white rounded-lg'  />
            </div>

            <div className='flex flex-col mb-4 '>
                <label className='' >Email Adress </label>
                <input
                 type="text"
                  id="email"
                   name="email"
                    placeholder='Enter Your Gmail'
                     className='border border-gray-300 p-2 rounded  mb-4 bg-white rounded-lg'  />
            </div>
            <div className='flex flex-col mb-4 '>
                <label className='' >Messsage</label>
                <textarea
                 
                  id="message"
                   name="message"
                   type="text"
                  placeholder="Enter your Query"
                     className='border border-gray-300 p-2 rounded  mb-4 bg-white rounded-lg'  />
            </div>
            <button type='submit'>Send </button>
              
            
        </form>
      </div>
    </div>
  )
}

export default Contact
