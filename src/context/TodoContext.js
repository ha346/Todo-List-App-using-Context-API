import { useContext, createContext } from "react"; 

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Todo Msg",
        completed: false
    }],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    removeTodo: (id) => { },
    toggleCompleted: (id) => { }
})

export const TodoContextProvider = TodoContext.Provider;
 
export const useTodo = () => {
    return useContext(TodoContext);
}