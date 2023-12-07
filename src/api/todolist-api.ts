import axios from "axios";

// const settings = {
//     withCredentials: true,
// }

const instance = axios.create({baseURL: 'https://social-network.samuraijs.com/api/1.1/', withCredentials: true})

export const todolistAPI = {
    getTodolist() {
        // return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return instance.get<TodolistType[]>('todo-lists')
    },
    createTodolist(title: string) {
        // return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
        return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title})
    },
    updateTodolist(todolistId: string, title: string) {
        // return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, settings)
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
    },
    deleteTodolist(todolistId: string) {
        // return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    }
}

type TodolistType = {
    id: string
    title: string
    addedDate: Date
    order: number
}
type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

type UpdateTodolistType = {
    data: {}
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

type CreateTodolistType = {
    data: {
        item: TodolistType
    }
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}