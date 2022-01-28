import React from 'react';
import { NumericLiteral } from 'typescript';
import './ToDoApp.css';

type TaskProps = {
    tName: string,
    tStatus: boolean,
    updateTaskStatus: (a: boolean) => void
    removeTask: () => void
}

export const Task = (props: TaskProps) => {

    return (
        <div className='TaskLine'>
            <div
                className="TaskName"
                onClick={
                    () => props.updateTaskStatus(!props.tStatus)}
                style={{ textDecoration: props.tStatus ? undefined : "line-through" }}>
                {props.tName}
            </div>

            <button
                className='RemoveTask'
                onClick={props.removeTask}
            >
                X</button>
        </div>
    )
}