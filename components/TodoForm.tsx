import { newTodo } from "@/utils/action";

const TodoForm = ({}) => {
  return (
    <div>
      <form action={newTodo}>
        <label>Enter Name</label>{" "}
        <input type="text" name="todoName" className="border borderBlue" />
        <label>Enter Stuff</label> <input type="text" name="content" />
        <button type="submit">Make todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
