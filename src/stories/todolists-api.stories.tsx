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

        todolistAPI.createTodolist(payload.title).then(res=> setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = 'f7915a78-2675-4bdc-a71b-9223496b6bd5'
        // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, settings).then((res) => {
        //     setState(res.data)
        // }).catch((e)=> console.error(e))
        todolistAPI.deleteTodolist(todoId).then(res=> setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const payload = {title: 'HTML'}
        const todoId = 'f0cfb101-3259-46f9-8662-2381a29289f3'
        // axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, payload, settings).then((res) => {
        //     setState(res.data)
        // })
        todolistAPI.updateTodolist(todoId, payload.title).then(res=> setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

