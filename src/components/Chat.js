import React from 'react'
import Typewriter from 'typewriter-effect';

const Chat = ({owner,message}) => {
  return (
    <div className='mb-2 flex'>
      {owner}:
        <span className={owner==="Selina"?"text-red-500":"text-slate-400"}>
            {owner==="Selina"?
            <Typewriter
            options={{
              typeSpeed:5000,
              strings: message,
              autoStart: true,
            }}
          />:message}
        </span>
    </div>
  )
}

export default Chat
