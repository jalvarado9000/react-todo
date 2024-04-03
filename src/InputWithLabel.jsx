import React, { useRef, useEffect } from 'react';

export const InputWithLabel = ({ handleTitleChange, isFocused, children }) => {

    const inputRef = useRef();

    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused, children]);

    return (
        <>
            <label htmlFor={children} className="m-1 mt-3">
                <h5>Title</h5>
            </label>
            <input ref={inputRef}
                name={children}
                type="text"
                id={children}
                value={children}
                onChange={handleTitleChange} />
            <input type="submit" className="btn btn-primary m-1 mb-2" value="Add" />
        </>
    )
}
