import { useState } from "react";
import { ContainerAbout, ContainerHome } from "./styles";

import Astronaut from '../../assets/astronautWW.png'
import { Button } from "../Button";


export function Welcome(){
    const [ homeIsOn, setHomeIsOn ] = useState(true);
    
    return homeIsOn ? (
        <>
            <ContainerHome id="home">
                <article>
                    <img src={Astronaut} alt="BackGroundAstronaut" />
                 </article>
                <div>
                    <h1>
                    Bem-vindo!
                    </h1>
                    <p>
                    Meu nome é Eduardo e sou Desenvolvedor Front-end <br />
                    esse é o meu portfólio, explore-o
                    </p>
                    

                    <span onClick={() => setHomeIsOn(false)}>
                        <Button name={"Sobre mim"} />
                    </span>
            </div>
            </ ContainerHome>
        </>    
    ) : (
        <>
            <ContainerAbout>
                <article>
                    <img src={Astronaut} alt="" />
                </article>
                <div>
                    <h1>Sobre Mim</h1>
                    <p>
                    Meu nome é Eduardo Do Prado
                    e tenho 18 anos
                    atualmente moro em Cotia SP,
                    e estudo Analise e desenvolvimento
                    de sistemas.
                    Eu trabalho na área de front-end,
                    Comecei a programar em 2021
                    aos meus 18 anos
                    </p>
                   
                    <span onClick={() => setHomeIsOn(true)}>
                        <Button name={"Sobre mim"} />
                    </span>
                </div>
            </ ContainerAbout>
        </>
    )
}