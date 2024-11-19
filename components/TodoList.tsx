import React from 'react'

interface TodoType {
    id: number;
    text: string;
    completed: boolean;
}


const TodoList:React.FC<{todos:TodoType[]}> = ({todos}) => {
  return (
    <ul className='w-[500px] mx-auto mt-5 rounded-lg bg-slate-400 p-2 space-y-2'>
      {todos.length > 0 ? todos.map((item:TodoType, index:number) =>(
        <li className='flex items-center justify-center p-2 bg-white rounded-lg' key={item.id}>
            <h3 className='text-[18px] font-semibold'>{index +1}. {item.text}</h3>
        </li>
      )) : <li className='p-2 bg-white rounded-lg text-[18px] font-semibold' >Create your todos</li>}
    </ul>
  )
}

export default TodoList
