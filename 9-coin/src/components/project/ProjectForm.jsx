import Input from "../form/Input.jsx";
import Select from "../form/Select.jsx";
import SubmitButton from "../form/SubmitButton.jsx";
import "./ProjectForm.css"

const ProjectForm = ({btnText}) => {
    return (
        <form className="form">
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
            
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total"/>
            
            <Select name="category_id" text="Selecione a categoria"/>
            
            <SubmitButton text={btnText}/>
        </form>

    );
};

export default ProjectForm