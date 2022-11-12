import React, { useState } from "react";
import './style.css';
import Banner from '../PaginaBanner';
import SobreEmpresa from '../PaginaConteudo';


export default function MudancaCor(){

    const CorPreto = 'bg-preto' 
    const CorBranco = 'bg-branco'

    const [novaCor, setNovaCor] = useState(CorBranco);
    
    const alterarCor = () =>{
        if(novaCor === CorBranco){
            setNovaCor(CorPreto);
        }else{
            setNovaCor(CorBranco);
        }
    }

    return(
        <div>
        <header>
            <section className={novaCor}>
                <div className='menu'>
                    <img src="./assets/LogoBarbearia.png"/>
                    
                </div>
                    <a className="botaoMenu">
                        <div className="botaoCor">
                                <div className="botao">
                                    <div className="botaoAlterar">
                                        
                                    </div>
                                    
                                <a onClick={alterarCor}>
                                    <p className="textoBotaoNoite">Claro</p>
                                    <p className="textoBotaoClaro">Escuro</p>
                                </a>
                                
                                </div>
                            
                        </div>
                    </a>
            </section>
        </header>

       
                <Banner/>
     

            <div className={novaCor}>
                <SobreEmpresa/>
            </div>
        </div>
    );
}