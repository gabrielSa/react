import React from "react";
import { useState } from "react";

function TodoForm({addTodo}) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value, category);
        setCategory("");
        setValue("");
    }

    return (
        <div>

            <h2>Criar nova tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título" value={value} onChange={(e) => setValue(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Cria tarefa</button>
            </form>

        </div>
    );
};

export default TodoForm