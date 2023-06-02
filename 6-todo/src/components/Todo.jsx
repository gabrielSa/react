import React from "react";

function Todo({todo}) {

    return(
        <div className="todo">

            <div className="content">
                <p>{todo.text}</p>
                <p>{"(" + todo.category + ")"}</p>
            </div>

            <div className = "buttons">
                <button className="complete">Completar</button>
                <button className="remove">x</button>
            </div>

        </div>

    );
};

export default Todo