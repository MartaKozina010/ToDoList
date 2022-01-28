import React, { useState, useEffect } from 'react';
import { NewTask } from './NewTask'
import { TaskList } from './TasksList'


export type TaskObject = {
    taskName: string,
    taskStatus: boolean,
    taskID: number
}

export function ToDoApp() {

    const initialList = JSON.parse(localStorage.getItem("listKey") || "[]")

    const [list, setList] = useState<TaskObject[]>(initialList)

    const [display, setDisplay] = useState(false)

    const doneTasks = list.filter(el => !el.taskStatus).length;
    const undoneTasks = list.length;

    useEffect(() => {
        localStorage.setItem("listKey", JSON.stringify(list))
    }, [list])

    const addTaskToList = (task: TaskObject) => {
        task.taskName.trim() !== "" && setList([...list, task]) 
    }

    const updateStatus = (taskID: number, taskStatus: boolean) => {
        const tmpList = list.map((el) => {
            if (el.taskID === taskID) {
                return { taskName: el.taskName, taskStatus, taskID: el.taskID }
            }
            return el
        }
        )
        setList(tmpList)
    }

    const removeTask = (task: TaskObject) => {
        const tmpList = list.filter((el) => el.taskID !== task.taskID)
        setList(tmpList)
    }

    return (

        <div className='TaskContainer'>
            <h2>My tasks:</h2>
            <h4>Tasks done: {doneTasks} / {undoneTasks} </h4>
            <TaskList tasks={list} updateStatus={updateStatus} removeTask={removeTask} />
            <NewTask addTaskToList={addTaskToList} />

        </div>
    );
}