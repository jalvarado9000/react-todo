

import * as React from 'react';

export const AddTodoForm = (props) => {



  const [todoTitle, setTodoTitle] = React.useState('');


  const handleTitleChange = (event) => {

    let newTodoTitle = event.title.value;
    setTodoTitle(newTodoTitle);
  };


  const handleAddTodo = (event) => {

    let obj = {
      title: todoTitle,
      id: Date.now()
    }

    event.preventDefault();

    setTodoTitle(event.target.elements.title.value);
    console.log(todoTitle);


    props.onAddTodo({ ...obj });
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
