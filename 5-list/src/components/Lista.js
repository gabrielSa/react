
function Lista({names}){

    return(
        <div>
            <h3>Lista de itens:</h3>
            {names.map((name, indice) => (
                <p key={indice}> Opção: {name}</p>
            ))}
            
        </div>
    );
}

export default Lista