import React from 'react'
import {useState} from 'react'
import Chat from '../components/Chat'

const Contact = () => {
  const [message, setmessage] = useState([])

  const handlesubmit=(e)=>{
      e.preventDefault()
      fetchdata(e.target.text.value)
  }

  async function fetchdata(query){
    await fetch(`https://chatbot-0ep1.onrender.com/chat?query=${query}`)
    .then(response => response.json())
    .then(data => setmessage([...message, {name:"You",message:query}, {name:"Selina",message:data.response}]));
  }

  return (
    <div className='py-32 flex flex-col items-center gap-2'>
      <div className='w-4/5 rounded overflow-auto h-[500px] border-4 p-2 border-red-900 border-3 bg-base'>
        {message.map((msg,index)=>{
          return <Chat key={index} message={msg.message} owner={msg.name}/>
        })}
      
      </div>
      <form onSubmit={handlesubmit} className="flex w-4/5 justify-center">
        <input type="text" className='w-100 bg-navbar outline-0 p-2 rounded' placeholder='Type "hi"' name="text"/>
      </form>
      
      <div className='flex lg:flex-row flex-col mt-20 gap-8'>
         <a className="bg-red-700 hover:bg-red-900 font-bold p-2 rounded text-white capitalize" target="__blank" href="tel:+919790571935">phone</a>
         <a className="bg-red-700 hover:bg-red-900 font-bold p-2 rounded text-white capitalize" target="__blank" href="https://www.linkedin.com/in/dheerajh">linkedin</a>
         <a className="bg-red-700 hover:bg-red-900 font-bold p-2 rounded text-white capitalize" target="__blank" href="https://github.com/dheerajhemachandran">github</a>
         <a className="bg-red-700 hover:bg-red-900 font-bold p-2 rounded text-white capitalize" target="__blank" href = "mailto: dheerajhemachandran@gmail.com">email</a>
      </div>
    </div>
  )
}

export default Contact
