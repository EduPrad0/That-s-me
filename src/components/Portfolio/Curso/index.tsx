import { ContainerSenai } from "../styles";

import SenaiImg from '../../../assets/senaiImg.png'
import jgvelha from '../../../assets/imgJava.png'

export function Curso(){
    return (
        <>
            <ContainerSenai>
                <section>
                    <h2>Projeto do <span><img width="70px" src={SenaiImg} alt="" /></span></h2>
                    <p>Projeto desenvolvido nas aulas do curso de Desenvolvimento de sistemas, no Senai. <br />
                        Neste prototipo, é feito um jogo da velha todo em java, onde você pode verificar mais sobre o codigo
                        em : 
                    </p>
                    <a href="">Jogo da velha em Java</a>
                </section>
                
                <div>
                    <img width="300px" src={jgvelha} alt="" />
                </div>
            </ContainerSenai>
        </>
    );
}