

import React, { memo } from 'react';

const HabitAddForm = memo((props)=>{
    console.log("habitAddForm");
    const inputRef = React.createRef();
    const onSubmit =(event)=>{
        event.preventDefault();
        const name=inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = '';

    };
    return (
        <form className="addForm" onSubmit={onSubmit}>
        <input type="text" className="addForm-input" 
        name="input" placeholder="Habit" ref={inputRef} 
        />
        <button  className="addForm-submit" >Add</button>
        </form>
        
    );
}
);

export default HabitAddForm;