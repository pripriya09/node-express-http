import { useState } from 'react'
import axios from "axios"


function App() {
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const [message,setMessage] =useState("")
 
  function handlesubmit(e){
    e.preventDefault()
  axios.post("http://localhost:8080/submit",
  {
    name:name,
    email:email,
    message:message,
  },
  {
    headers:{
      "Content-Type":"application/json"
    },

  }
)
.then((reponse)=>{
  console.log(reponse)
})
.catch((error)=>{
  console.log(error)
})
 


  }

  return (
    <>
  
    <form action="" method="post"  onSubmit={handlesubmit}>
      <input type="text"  placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}/><br />
      <input type="text" placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
      <textarea name="message" id="" cols="30" rows="10" placeholder='enter msg here' value={message} onChange={(e)=>setMessage(e.target.value)}>{message}</textarea><br />
      <button>submit</button>
    </form>


    
    </>
   )
}

export default App
