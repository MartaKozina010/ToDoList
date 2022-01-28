import React from 'react';
import { NumericLiteral } from 'typescript';
import './ToDoApp';
import { Task } from './Task';
import { TaskObject } from './ToDoApp'


type TaskListProps = {
    tasks: TaskObject[];
    updateStatus: (taskID: number, taskStatus: boolean) => void
    removeTask: (task: TaskObject) => void
}

export const TaskList = (props: TaskListProps) => {

    const taskListMap = props.tasks.map((el, index) =>
        <Task
            key={index * Math.random() * 10000}
            tName={el.taskName}
            tStatus={el.taskStatus}
            updateTaskStatus={(taskStatus) => { props.updateStatus(el.taskID, taskStatus) }}
            removeTask={() => { props.removeTask(el) }}

        />
    );

    return (
        <>
            {taskListMap}
        </>
    )
}

