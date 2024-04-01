import React from 'react'

export const InputWithLabel = ({ todoTitle, handleTitleChange, isFocused, children }) => {

    const inputRef = React.useRef(null);

    React.useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <>
            <label htmlFor={todoTitle} className="h5 m-1 mt-3">
                Title
            </label>
            <input ref={inputRef} name={children} type="text" id={todoTitle} value={todoTitle} onChange={handleTitleChange} />
            <input type="submit" className="btn btn-primary m-1 mb-2" value="Add" />
        </>
    )
}
