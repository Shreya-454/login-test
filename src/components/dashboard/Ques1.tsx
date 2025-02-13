import React from 'react'
const Question = [{
    list: {
      data: [
        {
          title: "What is the capital of India?",
          options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        }
      ]
    }
}];
const Ques1 = () => {
    return (
    <div className='flex justify-center items-center h-full'>
      <p className='text-5xl'>{Question[0].list.data[0].title} {Question[0].list.data[0].options[0]}</p>
    </div>
  )
}
export default Ques1