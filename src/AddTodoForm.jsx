

import * as React from 'react';

export const AddTodoForm = (props) => {


  
  const [todoTitle, setTodoTitle] = React.useState('');

 

  const handleAddTodo  = (event) => {
    event.preventDefault();

    setTodoTitle(event.target.value);
    console.log(todoTitle);

    props.onAddTodo(todoTitle);
    
   
   
  };

 


 

  return (
    <div className="text-bg-dark container-lg">
        <form action="" className="m-5 pb-1" onSubmit={handleAddTodo}>
          <label htmlFor={todoTitle} className="h5 m-1 mt-3">
            Title
          </label>
          <input name="title" type="text" id={todoTitle} onChange={handleAddTodo} />
          <input type="submit" className="btn btn-primary m-1 mb-2" value="Add"  />
        </form>

       
      </div>
  )
}
