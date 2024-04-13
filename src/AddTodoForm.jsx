import { useState } from 'react';
import { InputWithLabel } from './InputWithLabel'

export const AddTodoForm = ({ onAddTodo, postTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    let newTodo = {
      title: todoTitle,
      id: Date.now(),
    };
    postTodo(newTodo);
    onAddTodo(newTodo);
    

    
    
    setTodoTitle('');
  };

  return (
    <div className="text-bg-dark container-lg">
      <form className="m-5 pb-1" onSubmit={handleAddTodo}>
        <InputWithLabel 
        handleTitleChange={handleTitleChange} 
        isFocused> 
        {todoTitle} 
        </InputWithLabel>
      </form>
    </div>
  )
}