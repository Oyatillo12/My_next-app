"use client";

import { TodoType } from '@/app/page';
import React, { useState } from 'react'

interface TodoSubmitProps {
  todos: TodoType[]
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
}

const TodoSubmit:React.FC<TodoSubmitProps> = ({todos, setTodos}) => {
  const [value,setValue] = useState<string>('')

    const handleAddtodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTodo:TodoType = {
          id:todos.length ? todos[todos.length -1].id +1: 1,
          text: value,
          completed: false,
        }
        setTodos([...todos, newTodo]);
        setValue('');
      };
  return (
    <form onSubmit={handleAddtodo}  className="w-[500px] bg-slate-200 p-2 mx-auto mt-5 rounded-lg flex items-center justify-between" autoComplete="off">
    <input value={value} onChange={(e) => setValue(e.target.value)} required className="outline-none w-[79%] p-2 rounded-lg " name="todo" type="text" placeholder="Create your todo"/>
    <button type="submit" className="w-[19%] bg-blue-500 rounded-lg text-white p-2 hover:opacity-70 duration-300">Add</button>
</form>
  )
}

export default TodoSubmit
