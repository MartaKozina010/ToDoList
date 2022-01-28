import React, { useState } from 'react';
import { NumericLiteral } from 'typescript';
import './ToDoApp.css';
import { TaskObject } from './ToDoApp';

type NewTaskProps = {
    addTaskToList: (task: TaskObject) => void
}

export const NewTask = (props: NewTaskProps) => {

    const [input, setInput] = useState("")

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setInput(event.target.value)
    }

    return (
        <>
            <input className="addTask" type="text" placeholder='Enter your task' value={input} onChange={handleChange} />
            <button className="addButton" onClick={() => {
                props.addTaskToList({ taskName: input, taskStatus: true, taskID: Math.round(Math.random() * 1000) })
                setInput("")
            }}>Add</button>
        </>
    )
}