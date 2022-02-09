import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from "./App";
import {Simulate} from "react-dom/test-utils";


export type TodolistPropsType = {
    title: string;
    tasks: Array<TaskType>;
    deleteTask: (id: string) => void;
    changeFilter: (value: FilterValuesType) => void;
    addTask: (title: string) => void;
    changeStatus: (taskId: string, isDone: boolean) => void;
    filter: FilterValuesType;
}

export type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

export function Todolist(props: TodolistPropsType) {

    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle.trim())
            setNewTaskTitle("")
        } else {
            setError("Title is required");
        }

    }


    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: any) => {
        setError(null)
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle("")
        }
    }

    const onAllClickFilter = () => props.changeFilter("all")
    const onActiveClickFilter = () => props.changeFilter("active")
    const onCompletedClickFilter = () => props.changeFilter("completed")


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={onNewTitleChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    className={error ? "error" : '"'}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}

            </div>
            <ul>
                {
                    props.tasks.map((task) => {
                        const onRemoveHandler = () => props.deleteTask(task.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            props.changeStatus(task.id, e.currentTarget.checked)
                        }

                        return <li
                            key={task.id}
                            className={task.isDone ? "is-Done" : ""}
                        >
                            <input type="checkbox"
                                   onChange={onChangeHandler}
                                   checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={onRemoveHandler}>x</button>
                        </li>
                    })
                }

            </ul>
            <div>
                <button
                    onClick={onAllClickFilter}
                    className={props.filter === 'all' ? "active-filter" : ""}
                >All
                </button>
                <button
                    onClick={onActiveClickFilter}
                    className={props.filter === 'active' ? "active-filter" : ""}
                >Active
                </button>
                <button
                    onClick={onCompletedClickFilter}
                    className={props.filter === 'completed' ? "active-filter" : ""}
                >Completed
                </button>
            </div>
        </div>
    )
}

