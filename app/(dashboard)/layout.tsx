import TodoForm from "@/components/TodoForm";

const DashboardLayout = ({ children }) => {
  return (
    <div className="border-black border p-1">
      <h1> Dashboard Page - </h1>
      <div>
        <TodoForm />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
