import { useState } from "react";
import { useTodo } from "../context";
import Button from "./Button";
import Input from "./Input";

function TodoForm() {

    const [todo, setTodo] = useState("");

    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;

        addTodo({ todo, completed: false });
        setTodo("");
    }


    return (
        <form onSubmit={add} className="flex">
            <Input
                type="text"
                placeholder="Write Todo..."
                value={todo}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onInputChange={(current) => setTodo(current)}
            />
            <div className="ml-3">
                <Button
                    text="Add"
                    className="rounded-r-lg px-3 py-2 bg-green-600 text-white shrink-0"
                />
            </div>
        </form>
    );
}

export default TodoForm;