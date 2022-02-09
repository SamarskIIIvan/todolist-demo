import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";


export type FilterValuesType = "all"  | "completed" |  "active";

function App() {

    let [tasks, setTask] = useState<Array<TaskType>>([
        {id: v1(), title: "css", isDone: false},
        {id: v1(), title: "html", isDone: false},
        {id: v1(), title: "javaScript", isDone: false},
        {id: v1(), title: "react", isDone: false},
        {id: v1(), title: "redux", isDone: false},
        {id: v1(), title: "typeScript", isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValuesType>("all")

    function deleteTask(id: string) {
      let filteredTasks = tasks.filter(task => task.id !== id)
        setTask(filteredTasks)
     }
     function addTask( title: string) {
        let newTask = {id: v1(), title: title, isDone: false }
         let newTasks = [newTask, ...tasks];
        setTask(newTasks)
     }
     function changeStatus(taskId: string, isDone: boolean){
        let task  = tasks.find(task => task.id === taskId);
        if(task){
            task.isDone = isDone
        }
         setTask([...tasks])
     }



     function changeFilter(value: FilterValuesType) {
        setFilter(value)
         
     }

     let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone  === true)
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone  === false)
    }


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                deleteTask={deleteTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeStatus ={changeStatus}
                filter = {filter}

            />
        </div>
    );
}

export default App;


