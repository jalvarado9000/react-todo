

import React, { useState } from 'react';

export const AddTodoForm = ({onAddTodo}) => {



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



    
    onAddTodo(newTodo);
    setTodoTitle('');



  };










  return (
    <div className="text-bg-dark container-lg">
      <form className="m-5 pb-1" onSubmit={handleAddTodo}>
        <label htmlFor={todoTitle} className="h5 m-1 mt-3">
          Title
        </label>
        <input name="title" type="text" id={todoTitle} value={todoTitle} onChange={handleTitleChange} />
        <input type="submit" className="btn btn-primary m-1 mb-2" value="Add" />
      </form>


    </div>
  )
}
