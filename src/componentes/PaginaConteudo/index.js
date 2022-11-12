import React from "react";
import './style.css';

export default function SobreEmpresa(){
    return(
        <section>
            <div className="sobre">
                <h1>Bem-vindo a Barber Shop</h1>
                <p className="subTitulo">Nossa barbearia oferece profissionais de qualidade, estamos prontos para 
                lida com suas maiores expectativas.</p>

                <p>Nossa serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou
                    o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e 
                    você nunca ficará desapontado.
                </p>

                <div className="imagemBaixo">
                    <img src="./LogoBarbearia.png" alt="Identificação da barbearia"/>
                </div>
            </div>
        </section>
    )
}