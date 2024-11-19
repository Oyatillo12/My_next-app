"use client";

import TodoList from "@/components/TodoList";
import TodoSubmit from "@/components/TodoSubmit";
import { useState } from "react";

export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([])

  return (
    <div className=" min-h-screen p-8 pb-20  sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center font-bold text-[32px]">HI! Write Your todos</h1>
      <TodoSubmit setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos}/>
    </div>
  );
}
