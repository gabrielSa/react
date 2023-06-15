import React from "react";
import savings from "../../../src/img/savings.svg"
import "./Home.css"
import LinkButton from "../layout/LinkButton";

const Home = () => {
    return(
            <section className="home_container">
                <h1>
                    Bem-vindo ao <span>Costs</span>
                </h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton to="/newprojects" text="Criar Projeto" />
                <img src={savings} alt="Costs" />
            </section>
    );
};

export default Home;