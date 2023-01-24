import  { FC, useState } from 'react';
import './App.css';
import Todos from './component/Todos';
import { TodosForm } from './component/TodosForm';
import Todo from './models/todos';



const  App: FC  = ()=>  {

 const [todos,setTodos]  = useState<Todo[]>([])
  const addTodosHandler = (enterdData: Todo):void =>
  {
    const newTodo = enterdData;
    setTodos((prev) =>{
      return prev.concat(newTodo)
    })
  }

  const onRemoveTodosHandler = (todoId:string):void=>
  {
      setTodos((prev)=>
      {
        return prev.filter(todo => todo.id !== todoId);
      })
  }
  return (
    <div className="App">
     <TodosForm onAdd = {addTodosHandler}/>
     <Todos  onRemoveTodo={onRemoveTodosHandler} items= {todos}/>
    </div>
  );
}

export default App;
