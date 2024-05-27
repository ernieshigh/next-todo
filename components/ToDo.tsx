"use client";

import { useTransition } from "react";
import { revalidatePath } from "next/cache";
import { completeTodo } from "@/utils/action";

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`px-8 py-2 border border-black/25 cursor-pointer ${
        todo.completed ? "line-through text-black/30" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      <h3>{todo.todoName}</h3>
      <p>{todo.content}</p>
    </div>
  );

  revalidatePath("/todos");
};

export default Todo;
