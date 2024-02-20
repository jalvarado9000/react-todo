import React from 'react'

export const AddTodoForm = (props) => {
  return (
    <div className="text-bg-dark container-lg ">
        <form action="" className="m-5 pb-1">
            <label htmlFor="todoTitle" className="h5 m-1 mt-3" >Title </label>
            <input type="text" id="todoTitle" />
            <input type="submit" className="btn btn-primary m-1 mb-2" value="Add" onChange={props.onSearch}/>
        </form>



    </div>
  )
}
