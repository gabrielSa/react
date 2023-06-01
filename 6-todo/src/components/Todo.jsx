import React from "react";

function Todo({todo}) {

    return(
        <div>

            <div className="content">
                <p>{todo.text}</p>
                <p>{"(" + todo.category + ")"}</p>
            </div>

            <div className = "buttons">
                <button>Completar</button>
                <button>x</button>
            </div>

        </div>

    );
};

export default Todo