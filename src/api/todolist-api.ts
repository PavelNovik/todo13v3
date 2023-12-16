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
        // return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title})
        return instance.post<ResponseType<CreateTodoRespType>>('todo-lists', {title})
    },
    updateTodolist(todolistId: string, title: string) {
        // return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, settings)
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title})
    },
    deleteTodolist(todolistId: string) {
        // return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    getTasks(todolistId: string) {

        return instance.get<GetTasksType>(`/todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId: string, model: PayloadType) {
        return instance.put<ResponseType<CreateTaskRespType>>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
    }
}

type PayloadType = {
    completed: boolean
    deadline: string
    description: string | null
    priority: number
    startDate: string
    status: number
    Title: string
}

type CreateTodoRespType = {
    item: TodolistType
}
type CreateTaskRespType = {
    item: TaskType
}

export type TodolistType = {
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
    // data: {
    //     item: TodolistType
    // }
    data: CreateTodoRespType
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hi = 2,
    Urgently = 3,
    Later = 4
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: Date
    deadline: Date
    id: string
    todoListId: string
    order: number
    addedDate: Date
}

type GetTasksType = {
    items: TaskType[]
    totalCount: number
    error: string | null
}