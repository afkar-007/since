import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {


const [course,setCourse]=useState([])
 const[username,setUsername]=useState("")
 const[skills,setSkills]=useState("")
const [error,setError]=useState("")


 function check(e){
  console.log(username);
  console.log(skills);
   e.preventDefault()
  

 }


 useEffect(()=>{
fetching()

 },[])

 async function fetching() {
  const Response= await fetch("https://6a4a2579edfa6a2b5fd79809.mockapi.io/project")
  const data =await Response.json()
  
  setCourse(data)

 }

//  --===========================create=====================

async function create(e) {

  e.preventDefault()

  console.log(username);
  if(username.length<3){
    setError("Enter a valid name")
return
  }
    if(skills.length<3){
    setError("Enter a valid title")
    return
  }

 


    await fetch("https://6a4a2579edfa6a2b5fd79809.mockapi.io/project",{
      method:"POST",
      headers:{'content-Type':'application/json'},
      body:JSON.stringify({
        name: username,
        title:skills
        
      })
    })
    setError("")
    setSkills("")
    setUsername("")
    fetching()
    
    
  
}


// ==================-================delete================

async function handledelete(id) {

  await fetch(`https://6a4a2579edfa6a2b5fd79809.mockapi.io/project/${id}`,{
    method:"DELETE"

  })
  fetching()
}








  return(
  <>

<h1 className='brooklyn-heading '>tiger</h1>
  <form action=""  onSubmit={(e)=>{create(e)}}>

   <input type="text" className='oversized-container' placeholder='Enter your name' value={username}   onChange={(e)=>{setUsername(e.target.value)}}/>
   <br /> <br />
   <p className='luxury-paragraph'>{error}</p>
   <input type="text" className='oversized-container' placeholder='Enter your title' value={skills}  onChange={(e)=>{setSkills(e.target.value)}}/>
   <button type="submit" className='btn-luxury' >submit</button>
   
</form>
{
  course.map((sends)=>
  
    <div className='premium-hardware-card ' key={sends.id}>

     <h1>{sends.name}</h1>
      <p>{sends.title}</p>
      <button className='btn-velvet-delete' onClick={(e)=>handledelete(sends.id )}  >DELETE</button>
      
    </div>
  

  
  )
}

    </>
  )
}

export default App
