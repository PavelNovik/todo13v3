import React, {useEffect, useState} from 'react'
// import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

// const settings = {
//     withCredentials: true,
//
// }

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        // const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        const promise = todolistAPI.getTodolist()
        promise.then((res) => {
            // console.log(res.data)
            setState(res.data)
        })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        const payload = {title: 'React'}
        // axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', payload, settings).then((res) => {
        //     setState(res.data)
        // })

        todolistAPI.createTodolist(payload.title).then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '937468f2-faa3-43a8-84de-64183a16fa80'
        // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, settings).then((res) => {
        //     setState(res.data)
        // }).catch((e)=> console.error(e))
        todolistAPI.deleteTodolist(todoId).then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const payload = {title: 'Something updated'}
        const todoId = '1969dd98-26af-4e91-9602-f9223ac39081'
        // axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, payload, settings).then((res) => {
        //     setState(res.data)
        // })
        todolistAPI.updateTodolist(todoId, payload.title).then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const GetTodolistTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')

    const onClickHandler = ()=> {
        todolistAPI.getTasks(todolistId).then((res) => {
            console.log(res.data.items)
            setState(res.data)
        })
    }

    // useEffect(() => {
    //     const todolistId = 'df1211fc-4d7d-4360-9b4c-88305a9d7d0d'
    //     todolistAPI.getTasks(todolistId).then((res) => {
    //         console.log(res.data.items)
    //         setState(res.data)
    //     })
    //
    // }, [])
    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" placeholder={'enter todolist id'} value={todolistId}
                   onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <button onClick={onClickHandler}>Get tasks</button>
        </div>
    </div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')
    const [textValue, setTextValue] = useState<string>('')

    const onClickHandler = () => {
        const payload = {title: textValue}

        todolistAPI.createTask(todolistId, payload.title).then(res => setState(res.data.data))
    }
    //
    // useEffect(() => {
    //     const todolistId = 'df1211fc-4d7d-4360-9b4c-88305a9d7d0d'
    //     const payload = {title: 'Learn React'}
    //
    //     todolistAPI.createTask(todolistId, payload.title).then(res => setState(res.data.data))
    // }, [])

    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" placeholder={'todolist id'} value={todolistId} onChange={(e) => setTodolistId(e.currentTarget.value)}/>
            <input type="text" placeholder={'new task'} value={textValue} onChange={(e) => setTextValue(e.currentTarget.value)}/>
            <button onClick={onClickHandler}>Create task</button>
        </div>
    </div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [todoIdValue, setTodoIdValue] = useState<string>('')
    const [taskIdValue, setTaskIdValue] = useState<string>('')

    const onClickHandler = () => {
        todolistAPI.deleteTask(todoIdValue, taskIdValue).then(res => setState(res.data))
    }

    // useEffect(() => {
    //     const todoId = 'df1211fc-4d7d-4360-9b4c-88305a9d7d0d'
    //     const taskId = 'edc4a00f-d09a-4cb3-a2f3-e3056a71e32d'
    //     todolistAPI.deleteTask(todoId, taskId).then(res => setState(res.data))
    // }, [])

    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" placeholder={'Enter todo id'} value={todoIdValue}
                   onChange={(e) => setTodoIdValue(e.currentTarget.value)}/>
            <input type="text" placeholder={'Enter task id'} value={taskIdValue}
                   onChange={(e) => setTaskIdValue(e.currentTarget.value)}/>
            <button onClick={onClickHandler}>Delete Task</button>
        </div>
    </div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todoId, setTodoId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')
    const [newTitle, setNewTitle] = useState<string>('')

    const onClickHandler = () => {
        const model = {
            Title: newTitle,
            description: '',
            completed: true,
            status: 0,
            priority: 1,
            startDate: "2023-12-12T10:39:51.667",
            deadline: "2023-12-12T10:39:51.667",
        }

        todolistAPI.updateTask(todoId, taskId, model).then(res => setState(res.data))
    }

    // useEffect(() => {
    //     const payload = {
    //         title: "Something interesting",
    //         description: '',
    //         completed: true,
    //         status: 0,
    //         priority: 1,
    //         startDate: "2023-12-12T10:39:51.667",
    //         deadline: "2023-12-12T10:39:51.667",
    //     }
    //     const todoId = 'df1211fc-4d7d-4360-9b4c-88305a9d7d0d'
    //     const taskId = 'ed53487e-3da0-46cc-a174-9606e1a9deb0'
    //     todolistAPI.updateTask(todoId, taskId, payload).then(res => setState(res.data))
    // }, [])

    return <div>{JSON.stringify(state)}
        <div>
            <input type="text" value={todoId} placeholder={'Enter todo id'}
                   onChange={(e) => setTodoId(e.currentTarget.value)}/>
            <input type="text" value={taskId} placeholder={'Enter task id'}
                   onChange={(e) => setTaskId(e.currentTarget.value)}/>
            <input type="text" value={newTitle} placeholder={'Enter new title'}
                   onChange={(e) => setNewTitle(e.currentTarget.value)}/>
            <button onClick={onClickHandler}>Update Task</button>
        </div>
    </div>
}