import { useState } from "react"; 
import { useTodo } from "../context";
import Input from "./Input";
import Button from "./Button";
import Checkbox from "./Checkbox";

function TodoItem({ todo }) {

    const { removeTodo, updateTodo, toggleCompleted } = useTodo();

    const [isEditable, setIsEditable] = useState(false);
    const [textMsg, setTextMsg] = useState(todo.todo); 
    const [show, setShow] = useState(false); 

    const editTodo = () => { 
        updateTodo(todo.id, { ...todo, todo: textMsg });
        setIsEditable(false);
    }
 
    return (
        <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={`hover:${!show} flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed?"bg-[#c6e9a7]":"bg-[#ccbed7]"}`}
        >
            
            <Checkbox
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={()=>toggleCompleted(todo.id)}
            />

            <Input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isEditable?"border-black/10 px-2":"border-transparent"} ${todo.completed?"line-through":""} `}
                value={textMsg}
                onInputChange={(current)=>setTextMsg(current)}
                readOnly={!isEditable}
            />

            {/* Edit, Save Button */} 
            <Button
                className={`${show?"inline-flex":"hidden"} w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50`}
                onClick={() => {
                    if (todo.completed) return;

                    if (isEditable) {
                        editTodo()
                    }
                    else {
                        setIsEditable((prev) => !prev);
                    }
                }}
                disabled={todo.completed}
                text={isEditable?"📁":"✏️"}
            /> 

            {/* Delete Todo Button */}
            <Button
                className={`${show?"inline-flex":"hidden"} w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0`}
                onClick={()=>removeTodo(todo.id)}
                text="❌"
            />
        </div>
    );
}

export default TodoItem;