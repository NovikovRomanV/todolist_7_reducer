import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const TasksReducer = (state: TaskType[], action: ActionType):TaskType[]=>{
    switch (action.type) {
        case 'ADD-TASK': {
            let newTask = { id: v1(), title: action.title, isDone: false };
            return [newTask, ...state]
        }
        case "REMOVE-TASK": {
            return state.filter(el => el.id !== action.id)
        }
        default: return state
    }
}
type ActionType = AddTaskACType | RemoveTaskType
type AddTaskACType = ReturnType<typeof addTaskAc>
type RemoveTaskType = ReturnType<typeof removeTaskAC>

export const addTaskAc = (title: string) => {
    return {
        type: 'ADD-TASK',
        title,
    } as const
}

export const removeTaskAC = (id: string) => {
    return {
        type: 'REMOVE-TASK',
        id,
    } as const
}