import Image from 'next/image'
import { Inter } from 'next/font/google'
import React ,{useState} from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const [toDo, settoDo] = useState({title:"", description:""})
const addtodo= () => { 
let todos=localStorage.getItem("todos")

if (todos){
  let todosJson=JSON.parse(todos)
  if (todosJson.filter(value=>{return value.title==toDo.title}).length >0){

    alert("todo with this title already exists")
  settoDo({title:"", description:""})

  }
  else{
  todosJson.push(toDo)
  localStorage.setItem("todos",JSON.stringify(todosJson))

  alert("to do added succesfully")
  settoDo({title:"", description:""})}
}
else{

  localStorage.setItem("todos",JSON.stringify([toDo]))  
}
 };
 const handleOnchange= (e) => { 

settoDo({...toDo, [e.target.name]:e.target.value})


  }


  return (
    <div className="my-3 text-3xl">
    
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">

    <div class=" bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Add To Do</h2>
      <div class="relative mb-4">
        <label for="title" class="leading-7 text-sm text-gray-600">To Do Title</label>
        <input onChange={handleOnchange} value={toDo.title} type="text" id="title" name="title" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="description" class="leading-7 text-sm text-gray-600">To Do text</label>
        <input  onChange={handleOnchange} value={toDo.description} type="textarea" id="description" name="description" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={addtodo} class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 w-1/11  mx-auto rounded text-lg">Add To Do</button>
     
    </div>
  </div>
</section>
    </div>
  )
}
