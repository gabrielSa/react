import React from "react";

function TodoForm(){

    return(
        <div>
            
            <h2>Criar nova tarefa:</h2>
            <form>
                <input type="text" placeholder="Digite o título"/>
            <select>
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