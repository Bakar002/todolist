import React, {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const index = () => {




  const [todos, setTodos] = useState([])
  useEffect(() => {
    let todos = localStorage.getItem("todos")
    setTodos(JSON.parse(todos))
   
  }, [])
  

  const deleteTodo = (title) => { 
      let newTodos = todos.filter(item =>{
          return item.title != title
      })
      localStorage.setItem("todos", JSON.stringify(newTodos))
      setTodos(newTodos)
   }




  return (
    <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">Your ToDo</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Your ToDos will show up here</p>
      </div>
      <div class="flex flex-wrap -m-4">



       { todos?.map(item=>{
return( <div class="p-4 lg:w-1/4 md:w-1/2">
<div class="h-full flex flex-col items-center text-center">
  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={`https://picsum.photos/600/900?a=${item.title}`}/>
  <div class="w-full">

    <h3 class="text-gray-500 mb-3">{item.title}</h3>
    <p class="mb-4">{item.description}</p>
    <span class="inline-flex">
    <div>
      <a  onClick={()=>{deleteTodo(item.title)}}className="ml-2 text-gray-500">
        {/* FontAwesome Trash Icon */}
        <FontAwesomeIcon icon={faTrashAlt} />
      </a>

      <a  className="ml-2 text-gray-500"  href={`/edit/${item.title}`}>
        {/* FontAwesome Edit Icon */}
        <FontAwesomeIcon icon={faEdit} />
      </a>
    </div>
    </span>
  </div>
</div>
</div>)
        })}
       
      </div>
      </div>
  </section>
  )
}

export default index